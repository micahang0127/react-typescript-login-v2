import { Button } from "@mui/material/";
import React from "react";

type ButtonProps = {
  label: string;
  variant?: "contained" | "text" | "outlined";
  disabled?: boolean;
  color?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const ButtonMui = ({
  label,
  variant = "contained",
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <Button variant={variant} disabled={disabled} onClick={onClick}>
      {label}
    </Button>
  );
};

export default ButtonMui;
