import { MouseEvent } from "react";
import { Link } from "react-router-dom";
import { useQuery, useLazyQuery } from "@apollo/client";
import { GET_LOCATIONS } from "../apis/graphql/gql/home.gql";
import ButtonMui from "../components/_atoms/buttons/ButtonMui";
import { useSelector } from "react-redux";
import { logout } from "../redux/userSlice";

const Home = () => {
  // [useQuery]
  // useQuery는 컴포넌트가 Mount, Render 될 때, apollo client가 자동으로 실행됨
  // useQuery는 콜백함수 안에서 사용할 수 없다
  const { data: locationsData, error, loading } = useQuery(GET_LOCATIONS);
  console.log(locationsData, error, loading);

  const [getData, { data: lazyD, error: lazyE, loading: lazyL }] =
    useLazyQuery(GET_LOCATIONS);

  // const [getData { data: lazyD, error: lazyE, loading: lazyL }] = useLazyQuery(GET_LOCATIONS, {
  // fetchPolicy: "cache-and-network",
  // onError: (error) => {
  //   console.error(error);
  // },
  // onCompleted: ({ getUser }) => {
  //   console.log(getUser);
  // },
  // });

  const handleOnClickBtn = async (event: MouseEvent<HTMLButtonElement>) => {
    console.log(event);
    getData();
    console.log("fff", lazyD, lazyE, lazyL);
  };

  const handleOnClickGetUserInfo = (event: MouseEvent<HTMLButtonElement>) => {
    // const userInfo = useSelector((state) => {
    //   state.userInfo;
    // });
    // console.log(userInfo);
  };

  const handleOnClickLogout = (event: MouseEvent<HTMLButtonElement>) => {
    // dispatchEvent(logout());
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!(</p>;
  return (
    <div>
      <p>메인</p>
      <Link to="/signin">Sign In</Link>
      <Link to="/color">Color</Link>
      <div>
        <span>
          <ButtonMui label="Btn" onClick={handleOnClickBtn} />
          <ButtonMui label="userInfo" onClick={handleOnClickGetUserInfo} />
          <ButtonMui label="logout" onClick={handleOnClickLogout} />
        </span>
      </div>
    </div>
  );
};

export default Home;
