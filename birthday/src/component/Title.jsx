import styled from "styled-components";
import { Div } from "../elem";

export const Title = () => {
  return (
    <Div>
      <StFont>
        <h1>🎂 Happy Birthday! 🍰 </h1>
      </StFont>
    </Div>
  );
};

const StFont = styled.div`
  width: 310px;
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 25px;
  background-color: white;
  color: #e3384c;
  box-shadow: 2px 1px 1px 1px #3f3f3f3d;
  & h1 {
    font-weight: 500;
  }
`;
