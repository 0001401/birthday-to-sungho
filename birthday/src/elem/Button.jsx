import styled, { css } from "styled-components";

const Button = ({ children, ...props }) => {
  return <StBtn {...props}>{children}</StBtn>;
};

export default Button;

const StBtn = styled.button`
  position: relative;
  top: 100px;
  left: 165px;
  background-color: #a8cad6;
  color: white;
  border: none;
  width: 220px;
  height: 40px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    opacity: 0.9;
    transform: translate(-2px, -3%);
  }

  ${({ variant }) => {
    switch (variant) {
      case "large":
        return css`
          width: 375px;
          height: 55px;
          font-size: 18px;
        `;
      case "medium":
        return css`
          width: 225px;
          height: 38px;
          font-size: 16px;
        `;
      case "small":
        return css`
          width: 115px;
          height: 34px;
          font-size: 13px;
          margin-left: 10px;
        `;
      default:
        break;
    }
  }}
`;
