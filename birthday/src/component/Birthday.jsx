import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Div } from "../elem";
import { Title } from "./Title";

export const Birthday = () => {
  const navigate = useNavigate();
  return (
    <>
      <Title />
      <Div variant="body">
        <StImg
          src="https://velog.velcdn.com/images/resyve/post/1cfb149b-142b-42b1-93e3-29ab41856e2c/image.jpeg"
          alt="μ±νΈ"
        />
        <StP>π μ±νΈλ, μμΌ μ§μ¬μΌλ‘ μΆνν΄μ!</StP>
        <StDiv>
          <p>
            μ€λ κΈνκ² λ§λλλΌ, μ¬μ€ λμμΈλ λκ² λ³λ‘κ³  λ€μν κΈ°λ₯λ€μ λͺ»
            λ£μμ§λ§...
          </p>
          <p>μ±νΈλμ΄ μλ €μ£Όμ  κ²λ€μ κΈ°λ°μΌλ‘ μ΄μ¬ν λ§λ€μμ΄μ π₯Ί</p>
          <p>μ€κ°μ λΈλ λμ  κ±° μλμ£ ?! -0-;;;</p>
          <p>ν­ν΄νλ©΄μ λ§μ΄ μμ§ λκ³ , ν­μ κ°μ¬νμ΄μ</p>
          <p>
            μ! κ·Έλ¦¬κ³  λͺ¨λ₯΄μ€ μλ μκ² μ§λ§ μΉ­μ°¬ μΉ΄λμ μ΄λͺ¨ν°μ½ λ¬λ¦° κ²λ€μ
          </p>
          <p>λλ₯΄λ©΄ νλ  λ©μμ§κ° μλ΅λλ€?! (μλ κ²λ μκΈ΄ ν©λλ€μ..)</p>
          <p>3κ°μλμ, μ λ§ μ λ§ κ°μ¬νμ΄μ!</p>
          <p>ν­ν΄ λλκ³ λ μ λ λλ£ ν΄μ£Όμ€ κ±°μ£ ?γ </p>
          <p>27λ²μ§Έ μμΌ μΆνν΄μ! μ€λ νλ£¨ νλ³΅ν νλ£¨ λ³΄λ΄μΈμ π</p>
          <p>
            ps. λ€μ νμ΄μ§μ μ λ¬Ό μ½λ μμΌλκΉ λμ§ λ§κ³  μ λ¬Ό κΌ­ λ°μκ°μΈμ!
          </p>
          <span>μμ λλ¦Ό</span>
        </StDiv>
        <StBtnBox>
          <StBtn
            onClick={() => {
              navigate("/");
            }}
          >
            λ©μΈμΌλ‘ λμκ°κΈ°
          </StBtn>
          <StBtn
            onClick={() => {
              navigate("/compliment");
            }}
          >
            μ₯μ  99 λ³΄λ¬κ°κΈ°
          </StBtn>
          <StGiftBtn
            onClick={() => {
              navigate("/gift");
            }}
          >
            μ λ¬Ό μ½λ νμΈνκΈ°
          </StGiftBtn>
        </StBtnBox>
      </Div>
    </>
  );
};

const StImg = styled.img`
  width: 160px;
  border-radius: 50%;
`;

const StP = styled.p`
  margin-top: 20px;
  font-size: 18px;
  font-weight: 600;
  color: #27472c;
`;

const StBtnBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StBtn = styled.button`
  border: none;
  width: 150px;
  height: 40px;
  background-color: #27472c;
  border-radius: 35px;
  color: white;
  margin-top: 20px;
  cursor: pointer;
  :hover {
    opacity: 0.9;
    transform: translate(-2px, -3%);
  }
`;

const StGiftBtn = styled.button`
  border: none;
  width: 150px;
  height: 40px;
  background-color: #e3384c;
  border-radius: 35px;
  color: white;
  margin-top: 20px;
  cursor: pointer;
  :hover {
    opacity: 0.9;
    transform: translate(-2px, -3%);
  }
`;

const StDiv = styled.div`
  width: 500px;
  height: 140px;
  background-color: #d9d9d9;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
  overflow: scroll;
  text-overflow: ellipsis;
  white-space: nowrap;
  & p {
    margin-bottom: 5px;
    text-align: left;
    font-weight: 500;
  }
  & span {
    position: relative;
    left: 190px;
    top: 10px;
    font-weight: 700;
  }
  &::-webkit-scrollbar {
    background: #d9d9d9;
    width: 15px;
    height: 100%;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #27472c;
  }
  &::-webkit-scrollbar-track {
    width: 0;
    height: auto;
  }
`;
