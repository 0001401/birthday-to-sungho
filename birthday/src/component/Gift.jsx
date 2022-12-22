import React, { useRef } from "react";
import styled from "styled-components";
import { Div } from "../elem";
import { Title } from "./Title";

export const Gift = () => {
  const textInput = useRef();
  const copy = () => {
    const el = textInput.current;
    el.select();
    document.execCommand("copy");
    alert("복사되었습니다!🥳");
  };

  return (
    <>
      <Title />
      <Div variant="body">
        <h2>🎁 선물이 도착했습니다! 🎁</h2>
        <StDiv>
          <StBox>
            ∙ 선물코드 : <Stcode value={"2J5V8DQCJY"} ref={textInput} />
          </StBox>
          <p>∙ 코드등록 유효기간 : 2022.12.27 </p>
          <p>∙ 코드등록 방법 : 카카오톡 - 선물하기 - 선물함 - 선물코드 등록</p>
          <p>
            ∙ 등록 URL :
            <a href="http://kko.to/Dbo32RJuL0" target="blank">
              http://kko.to/Dbo32RJuL0
            </a>
          </p>

          <StBtn onClick={copy}>선물코드 복사하기</StBtn>
        </StDiv>
      </Div>
    </>
  );
};

const Stcode = styled.input`
  border: none;
  font-size: 14px;
  margin-bottom: 5px;
`;

const StDiv = styled.div`
  margin-top: 50px;
  text-align: left;
  margin-bottom: 5px;
  & p {
    margin-bottom: 5px;
  }
`;

const StBox = styled.div`
  text-align: left;
`;

const StBtn = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 20px;
  color: white;
  background-color: #27472c;
  margin-left: 35%;
  margin-top: 150px;
  border: none;
  cursor: pointer;
`;
