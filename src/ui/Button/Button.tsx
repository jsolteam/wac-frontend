import type { ButtonHTMLAttributes } from "react";
import * as Style from "./Button.styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...props }: ButtonProps) => {
  return <Style.Button {...props}>{children}</Style.Button>;
};
