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
          alt="성호"
        />
        <StP>🎁 성호님, 생일 진심으로 축하해요!</StP>
        <StDiv>
          <p>
            오늘 급하게 만드느라, 사실 디자인도 되게 별로고 다양한 기능들은 못
            넣었지만...
          </p>
          <p>성호님이 알려주신 것들을 기반으로 열심히 만들었어요 🥺</p>
          <p>중간에 노래 끄신 거 아니죠?! -0-;;;</p>
          <p>항해하면서 많이 의지 되고, 항상 감사했어요</p>
          <p>
            아! 그리고 모르실 수도 있겠지만 칭찬 카드에 이모티콘 달린 것들은
          </p>
          <p>누르면 히든 메시지가 있답니다?! (없는 것도 있긴 합니다요..)</p>
          <p>3개월동안, 정말 정말 감사했어요!</p>
          <p>항해 끝나고도 저랑 동료 해주실 거죠?ㅠ</p>
          <p>27번째 생일 축하해요! 오늘 하루 행복한 하루 보내세요 💝</p>
          <span>소영 드림</span>
        </StDiv>
        <StBtnBox>
          <StBtn
            onClick={() => {
              navigate("/");
            }}
          >
            메인으로 돌아가기
          </StBtn>
          <StBtn
            onClick={() => {
              navigate("/compliment");
            }}
          >
            장점 99 보러가기
          </StBtn>
          <StBtn
            onClick={() => {
              navigate("/gift");
            }}
          >
            선물 코드 확인하기
          </StBtn>
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
