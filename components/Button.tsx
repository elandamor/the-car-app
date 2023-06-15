"use client";

import { ButtonProps } from "~/types";

export default function Button({
  text,
  type,
  containerStyles,
  handleClick,
}: ButtonProps) {
  return (
    <button
      disabled={false}
      type={type ?? "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{text}</span>
    </button>
  );
}
