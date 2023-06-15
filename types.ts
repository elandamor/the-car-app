import { MouseEventHandler } from "react";

export interface ButtonProps {
  text: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit";
}
