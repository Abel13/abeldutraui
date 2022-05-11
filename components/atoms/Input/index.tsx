import React, { ChangeEvent, useCallback, useRef, useState } from "react";
import { FiAlertCircle } from "react-icons/fi";

import { Container, Error, Currency } from "./styles";
import { colors } from "../../../styles/colors";
import { InputProps } from "./interfaces";
import { Controller } from "react-hook-form";

const Input: React.FC<InputProps> = ({
  name,
  control,
  leftIcon: LeftIcon,
  dataType,
  disabled,
  error,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  const format = (value: number) => value * 0.01;
  const stringToNumber = (value: string): number => {
    const newValue = parseInt(value.replace(/\./g, ""), 10);
    return newValue >= 0 ? newValue : 0;
  };
  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { target: input } = event;

    const value = stringToNumber(input.value);
    const valueFormatted = value === 0 ? "0.00" : format(value).toFixed(2);
    if (inputRef.current) {
      inputRef.current.value = valueFormatted;
    }
  }, []);

  const inputType = (onChange: (...event: any) => void, value: any) => {
    switch (dataType) {
      case "currency":
        return (
          <input
            onFocus={handleInputFocus}
            type="number"
            step="any"
            maxLength={18}
            onBlur={handleInputBlur}
            disabled={disabled}
            onChange={(e) => onChange(handleChange(e))}
            value={value}
            ref={inputRef}
            {...rest}
          />
        );
      default:
        return (
          <input
            onChange={onChange}
            value={value}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            disabled={disabled}
            ref={inputRef}
            {...rest}
          />
        );
    }
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Container
          disabled={disabled}
          gotError={!!error}
          isFilled={isFilled}
          isFocused={isFocused}
        >
          {LeftIcon && <LeftIcon size={20} />}
          {dataType === "currency" && <Currency>R$</Currency>}
          {inputType(onChange, value)}

          {error && (
            <Error title={error}>
              <FiAlertCircle color={colors.danger} size={20} />
            </Error>
          )}
        </Container>
      )}
    />
  );
};

export default Input;
