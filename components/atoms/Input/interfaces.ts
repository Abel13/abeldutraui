import React, { InputHTMLAttributes } from "react";
import { Control } from "react-hook-form";
import { IconBaseProps } from "react-icons";

export interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  gotError: boolean;
  disabled?: boolean;
  dataType?: string;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  error?: string;
  control: Control;
  dataType?: "currency";
  disabled?: boolean;
  leftIcon?: React.ComponentType<IconBaseProps>;
}

export interface InputValueReference {
  value: string;
}
