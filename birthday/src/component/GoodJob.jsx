import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Div } from "../elem";

export const GoodJob = () => {
  const navigate = useNavigate();
  return (
    <Div variant="body">
      <StButton
        onClick={() => {
          navigate("/");
        }}
      >
        메인으로
      </StButton>
      <StBox>
        <h3>성호님은요,</h3>
        <StCardBox>
          <StBtn>수염이 아주 멋있어요!</StBtn>
          <StBtn
            onClick={() => {
              alert("아, 물론 나에게 피해주는 사람 빼구요 😅");
            }}
          >
            그리고 다른 사람들에게 아주 친절하죠! 😉
          </StBtn>
          <StBtn>모든 일에 열정을 갖고 임하는 열정맨이에요</StBtn>
          <StBtn
            onClick={() => {
              alert("그래서 모든 사람들을 행복하게 만들어주죠!");
            }}
          >
            그리고 재미있는 유우머를 많이 알고 있어요 😆
          </StBtn>
          <StBtn
            onClick={() => {
              alert("이만큼 섬세한 사람이 있나요?!");
            }}
          >
            T지만 F인 사람들을 배려해 최대한 공감해주려고 해요 🥺
          </StBtn>
          <StBtn>과메기도 먹을 줄 아는 멋진 상남자라구요!</StBtn>
          <StBtn>그의 라이브 코딩은,,, 갓벽,,,✨</StBtn>
          <StBtn
            onClick={() => {
              alert("이건 진짜 엄청난 능력 같아요!");
            }}
          >
            알고 있는 지식을 모든 사람들이 알기 쉽게 알려줘요👍🏻
          </StBtn>
          <StBtn>그리고 사회 조사 어쩌구 자격증도 있다구요</StBtn>
          <StBtn
            onClick={() => {
              alert("그래서 다음 먹방은 언제죠?");
            }}
          >
            미역국에 밥 말아서 먹방할 때가 제일 예뻐..😳
          </StBtn>
          <StBtn>키도 아주 크시죠!</StBtn>
          <StBtn>할머님을 사랑하는 따뜻한 마음씨도 갖추고 계시죠</StBtn>
          <StBtn>주변 사람들을 다 잘 챙겨주시는 D반의 털보코더,,</StBtn>
          <StBtn>파란색이 잘 어울려요!</StBtn>
          <StBtn>술도 아주 잘 마시죠!</StBtn>
          <StBtn>하지만 23년부터는 담배를 진짜 줄이셔야 합니다?</StBtn>
          <StBtn>그리고 23년부터는 모든 일이 다 잘될 거에요!</StBtn>
          <StNext
            onClick={() => {
              navigate("");
            }}
          >
            다음 페이지로 가볼까요?
          </StNext>
        </StCardBox>
      </StBox>
    </Div>
  );
};

const StBtn = styled.button`
  width: 350px;
  height: 50px;
  border-radius: 20px;
  border: 2px solid #27472c;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: #e3384c;
  background-color: transparent;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    opacity: 0.9;
    transform: translate(-2px, -3%);
  }
`;

const StNext = styled.button`
  width: 350px;
  height: 50px;
  border-radius: 20px;
  margin-top: 10px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: white;
  background-color: #27472c;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    opacity: 0.9;
    transform: translate(-2px, -3%);
  }
`;

const StCardBox = styled.div`
  margin-top: 30px;
  width: 500px;
  height: 350px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    background: #d9d9d9;
    width: 6px;
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

const StButton = styled.button`
  border: none;
  background-color: #27472c;
  color: white;
  font-weight: 600;
  width: 80px;
  height: 40px;
  border-radius: 15px;
  position: relative;
  top: -20px;
  left: -230px;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    opacity: 0.9;
    transform: translate(-2px, -3%);
  }
`;

const StBox = styled.div`
  width: 500px;
  height: 280px;
`;
