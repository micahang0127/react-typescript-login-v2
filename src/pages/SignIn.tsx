import React, { ChangeEvent, MouseEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_TODO } from "../apis/graphql/gql/user.gql";
import { Box, Container } from "@mui/material/";
import InputMui from "../components/_atoms/form/InputMui";
import ButtonMui from "../components/_atoms/buttons/ButtonMui";
import { buttonRight } from "../assets/css/style";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [loginUser, { data: userD, error: userE, loading: userL }] = useMutation(LOGIN_TEST);
  const [loginUser, { data: userD, error: userE, loading: userL }] =
    useMutation(ADD_TODO);

  const handleOnChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("iiiemail" + event.target.value);
    setEmail(event.target.value);
  };

  const handleOnChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("iiippppwwwl" + event.target.value);
    setPassword(event.target.value);
  };

  const handleOnClickSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    console.log(event, email, password);

    try {
      loginUser({
        variables: {
          type: "placeholder",
          someOtherVariable: 1234,
        },
      });
      console.log(userD, userE, userL);
      // if(userD && userD.token) authTokenActions.setAuthToken(data.tokenAuth)
      // const result = await loginUser({variables: {email: email, password: password}})
      // const accessToken = result.data?.loginUser.accessToken;
      // console.log(accessToken)
    } catch (error) {
      console.log("loginError", error);
    }
  };

  // useEffect(() => {
  //   if(data && data.tokenAuth) authTokenActions.setAuthToken(data.tokenAuth)
  // }, [userD])

  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>Sign in</h1>
          <InputMui
            id="email"
            name="email"
            label="Email Address"
            onChange={handleOnChangeEmail}
          />
          <InputMui
            id="password"
            name="password"
            label="Password"
            onChange={handleOnChangePassword}
          />
          <div
            style={{
              marginTop: 30,
              marginBottom: 2,
              ...buttonRight,
            }}
          >
            <ButtonMui label="SignIn" onClick={handleOnClickSubmit} />
          </div>
        </Box>
      </Container>
    </>
  );
};

export default SignIn;
