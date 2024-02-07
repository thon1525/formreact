"use client";

import React, { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  colorScheme?: "primary" | "secondary"|"outline";
  isDisabled?: boolean;
  rightIcon?: React.ReactNode;
  leftIcon?: ReactNode;
  size?: "sm" | "md" | "lg" | "xl"
  radius?: "sm" | "md" | "lg" | "xl"
  fontColor?: "primary" | "secondary" | "tertiary" | "white" | "black" 
  fontSize?: "sm" | "md" | "lg" | "xl"
}

const Button: FC<ButtonProps> = ({
  children,
  className ,
  colorScheme = "primary",
  isDisabled = false,
  leftIcon,
  rightIcon,
  size = "sm",
  radius = "sm",
  fontColor = "text-white",
  fontSize = "sm"
  
}) => {
  const getColorSchemeClass = (schemeParam: string) => {
    switch (schemeParam) {
      case "primary":
        return "bg-[#7B2CBF] hover:bg-purple-500 text-white";
      case "secondary":
        return "bg-[#007C00] hover:bg-cyan-500";
        case "outline":
          return " border border-solid border-[#7b2cbf] focus:outline-none focus:border-[#7b2cbf] hover:bg-[#7b2cbf]  hover:text-white  transition duration-300 ease-in-out";
      default:
        return "bg-[#7B2CBF] hover:bg-purple-500 text-white";
    }
  };
  const buttonRadius = (radiusParam: string) =>{
    switch (radiusParam){
      case "sm": return "rounded-[0]"
      case "md": return "rounded-[10px]"
      case "lg": return "rounded-[15px]"
      case "xl": return "rounded-full"
      default: return "rounded-sm"
    }
  }
  const buttonSize = (sizeParam: string) =>{
    switch (sizeParam){
      case "sm": return "px-10 py-2"
      case "md": return "px-16 py-2"
      case "lg": return "px-20 py-3"
      case "xl": return "px-28 py-5"
      default: return "px-10 py-2"
    }
  }
  const fontColorControl = (fontColor: string) =>{
    switch (fontColor){
      case "primary": return "text-[#7B2CBF]"
      case "secondary": return "text-[#455445]"
      case "black": return "text-black"
      case "white": return "text-white"
      default: return "text-white"
    }
  }
  const fontSizeControl = (fontColor: string) =>{
    switch (fontColor){
      case "sm": return "text-[12px]"
      case "md": return "text-[16px]"
      case "lg": return "text-[20px]"
      case "xl": return "text-[28px]"
      default: return "text-[12px]"
    }
  }

  
  const sizeButton = buttonSize (size)
  const roundedButton = buttonRadius(radius)
  const colorSchemeClass = getColorSchemeClass(colorScheme);
  const disableStyle = isDisabled ? "cursor-not-allowed" : "cursor-pointer";
  const colorFont = fontColorControl(fontColor)
  const sizeFont = fontSizeControl (fontSize)
  const combinedClassName = `${sizeButton} ${roundedButton} ${colorFont} ${sizeFont}  ${disableStyle} ${colorSchemeClass} ${className}`;

  
  return (
    <button disabled={isDisabled} className={combinedClassName}>
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
};

export { Button };