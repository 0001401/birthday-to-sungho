import styled from "styled-components";

export const Youtube = () => {
  return (
    <StDiv>
      <iframe
        src="https://www.youtube.com/embed/Xtue4A1vZfI?amp;autoplay=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
        allowfullscreen
      />
      <p>🥳 같이 들어주세요!</p>
    </StDiv>
  );
};

const StDiv = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  & p {
    color: white;
    font-weight: 400;
    font-size: 13px;
    text-align: center;
  }
  & iframe {
    width: 200px;
    height: 150px;
    border-radius: 30px;
  }
`;
