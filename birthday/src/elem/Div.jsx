import styled, { css } from "styled-components";

const Div = ({ children, ...props }) => {
  return <StDiv {...props}>{children}</StDiv>;
};

export default Div;

const StDiv = styled.div`
  width: 1200px;
  height: 150px;
  margin: 0 auto;
  text-align: center;
  padding: 50px;

  ${({ variant }) => {
    switch (variant) {
      case "body":
        return css`
          width: 600px;
          height: 550px;
          border-radius: 40px;
          background-color: white;
          text-align: center;
          padding: 50px;
          box-shadow: 2px 1px 1px 1px #fefefe3c;
        `;
      case "card":
        return css``;
      default:
        break;
    }
  }}
`;
