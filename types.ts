import { Dispatch, MouseEventHandler, SetStateAction } from "react";

export interface ButtonProps {
  text: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit";
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: Dispatch<SetStateAction<string>>;
}
