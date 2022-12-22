import styled from "styled-components";
import { Div } from "../elem";

export const Title = () => {
  return (
    <Div>
      <StFont>
        <h1>🎂 Happy Birthday 성호! 🍰 </h1>
      </StFont>
    </Div>
  );
};

const StFont = styled.div`
  width: 350px;
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 25px;
  background-color: white;
  color: #53656c;
  box-shadow: 2px 1px 1px 1px #3f3f3f3d;
  & h1 {
    font-weight: 500;
  }
`;
