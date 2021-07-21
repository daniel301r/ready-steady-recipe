import { HTMLProps } from "react";
import styled, { CSSObject } from "styled-components";
import ErrorMessage from "./ErrorMessage";

interface IStyledInputProps {
  hasError?: boolean;
}

const StyledInput = styled.input<IStyledInputProps>`
  min-width: 0;
  font-family: Lato, "Helvetica Neue", Arial, Helvetica, sans-serif;
  padding: 10px;
  font-size: 16px !important;
  background: white;
  border-radius: 2px;
  border: 2px solid transparent;
  color: ${({ theme }) => theme.colors.primary};
  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.colors.secondary};
  }
`;

interface IBaseLabelProps {
  customStyle?: CSSObject;
}

const BaseLabel = styled.label<IBaseLabelProps>`
  display: grid;
  grid-gap: 2px;
  width: 100%;
`;

const StyledLabel = styled(BaseLabel)((props) => ({ ...props.customStyle }));

interface ICustomInputProps extends HTMLProps<HTMLInputElement> {
  error?: string;
  labelStyle?: CSSObject;
}

const TextField = ({
  value,
  type,
  onChange,
  min,
  max,
  onBlur,
  label,
  placeholder,
  name,
  error,
  onKeyDown,
  labelStyle,
}: ICustomInputProps) => {
  return (
    <StyledLabel customStyle={labelStyle}>
      <strong>{label}</strong>
      <StyledInput
        type={type || "text"}
        name={name}
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
        hasError={!!error}
        placeholder={placeholder}
        autoComplete="new-password" // cf. https://stackoverflow.com/questions/37503656/react-doesnt-render-autocomplete-off
      />
      {!!error && <ErrorMessage message={error} margin="5px 0px 0px 0px" />}
    </StyledLabel>
  );
};

export default TextField;