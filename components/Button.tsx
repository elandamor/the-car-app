"use client";

import Image from "next/image";
import { ButtonProps } from "~/types";

export default function Button({
  text,
  type,
  containerStyles,
  textStyles,
  rightIcon,
  handleClick,
}: ButtonProps) {
  return (
    <button
      disabled={false}
      type={type ?? "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{text}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
}
