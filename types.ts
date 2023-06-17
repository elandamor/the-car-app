import { Dispatch, MouseEventHandler, SetStateAction } from "react";

export interface ButtonProps {
  text: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: Dispatch<SetStateAction<string>>;
}

export interface CustomFilterProps {
  title: string;
}

export type Car = {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
};

export interface CarCardProps {
  car: Car;
}
