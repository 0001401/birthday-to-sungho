import styled, { css } from "styled-components";

const Button = ({ children, ...props }) => {
  return <StBtn {...props}>{children}</StBtn>;
};

export default Button;

const StBtn = styled.button`
  position: fixed;
  top: 630px;
  left: 710px;
  background-color: #27472c;
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
`;
