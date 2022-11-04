import React, { ChangeEvent, MouseEvent, useState } from "react";
import { Box, Container } from "@mui/material/";
import InputMui from "../components/_atoms/form/InputMui";
import ButtonMui from "../components/_atoms/buttons/ButtonMui";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [loginUser] = useMutation<Pick<IMutation, 'loginUser'>,loginUser(LOGIN_USE)

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
    // try {
    //   const result = await loginUser({
    //     variables: {
    //       email: email,
    //       password: password,
    //     },
    //   });
    //   const accessToken = result.data?.loginUser.accessToken;
    // } catch (error) {
    //   console.log("loginerror", error);
    // }
  };

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   });
  // };

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
          <div style={{ marginTop: 30, marginBottom: 2 }}>
            <ButtonMui onClick={handleOnClickSubmit} />
          </div>
        </Box>
      </Container>
    </>
  );
};

export default SignIn;
