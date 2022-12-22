import styled from "styled-components";
import { Letter } from "../component/Letter";
import { Title } from "../component/Title";

export const Card = () => {
  return (
    <Div>
      <Title />
      <Letter />
    </Div>
  );
};

const Div = styled.div`
  width: 1200px;
  height: 850px;
`;
