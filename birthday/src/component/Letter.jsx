import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Div, Button } from "../elem";

export const Letter = () => {
  const navigate = useNavigate();

  return (
    <Div variant="body">
      <HTag>예수님보다 훨씬 더 빨리 태어난 코딩 산타가 있다?!</HTag>
      <StLetter>
        <p>🥳 떵호님, 27번째 생일 축하해요! 🎉 </p>
        <p>제가 항해를 무사히 마칠 수 있도록 도와준 1등 공신! (등* 아님)</p>
        <p>어려운 문제가 소영을 가로 막을 때...</p>
        <p>알 수 없는 오류들이 소영을 괴롭힐 때...</p>
        <p>
          <Stbold>도움이 필요한 곳</Stbold>엔 언제나 성호님이 있었읍니다...
        </p>
        <StDiv>
          <p>
            이 웹사이트는 got 성호님의 27번째 생일을 축하하기 위해 만들어진
            웹서비스 입니다
          </p>
          <p>
            생일 쭈카해요!🎂 오늘 하루 세상에서 가장 행복한 사람이 성호님이길
            바랍니다!
          </p>
        </StDiv>
      </StLetter>
      <Button
        onClick={() => {
          navigate("/Compliment");
        }}
      >
        성호님의 장점 99 보러 가기! 👉🏻
      </Button>
    </Div>
  );
};

const HTag = styled.h3`
  font-size: 22px;
  margin-bottom: 20px;
  color: #a8cad6;
`;

const Stbold = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #50694d;
`;

const StDiv = styled.div`
  width: 100%;
  margin-top: 80px;
  margin-bottom: 35px;
  font-weight: 600;
  color: #e3384c;
`;

const StLetter = styled.div`
  margin-top: 50px;
  & p {
    margin-bottom: 5px;
  }
`;
