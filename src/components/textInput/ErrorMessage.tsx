import { FunctionComponent } from "react";
import styled from "styled-components";

interface IStyledMessageProps {
  margin?: string;
  width?: string;
}

const StyledMessage = styled.div<IStyledMessageProps>`
    box-shadow: none;
    border-radius: 5px;
    background: #ad4d4d;
    color: white;
    animation: fadein 0.2s;
    margin: ${(props) => (props.margin ? props.margin : "0px")};
    padding: 12px;
    width: ${(props) => (props.width ? props.width : "100%")};
    display: grid;
    place-items: center;
    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

interface IErrorMessageProps {
  message?: string;
  margin?: string;
  width?: string;
}

const ErrorMessage: FunctionComponent<IErrorMessageProps> = ({
  message,
  margin,
  width,
  children,
}) => (
  <StyledMessage margin={margin} width={width}>
    {message}
    {children}
  </StyledMessage>
);

export default ErrorMessage;