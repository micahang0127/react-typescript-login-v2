import { Button } from "@mui/material/";
import React from "react";

type ButtonProps = {
  variant?: "contained" | "text" | "outlined";
  disabled?: boolean;
  color?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const ButtonMui = ({
  variant = "contained",
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <Button variant={variant} disabled={disabled} onClick={onClick}>
      SignIn
    </Button>
  );
};

export default ButtonMui;
