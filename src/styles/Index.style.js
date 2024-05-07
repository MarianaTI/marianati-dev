import styled from "@emotion/styled";

export const Header = styled.header`
  height: 730px;
`;

const BackgroundCircle = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(400px);
`;

export const Circle1 = styled(BackgroundCircle)`
  position: fixed;
  width: 300px;
  height: 300px;
  background-color: #bc2b9e;
  bottom: 150px;
  right: 150px;
`;

export const Circle2 = styled(BackgroundCircle)`
  width: 266px;
  height: 267px;
  background-color: #b6aef2;
  top: 200px;
  left: 200px;
  z-index: -1;
`;

export const Welcome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  height: 100%;
  padding-left: 100px;
  & h1 {
    font-family: "Yeseva One", serif;
    font-size: 64px;
  }
  & span {
    font-family: "Poppins", sans-serif;
    font-size: 28px;
  }
  .pinkcolor{
    color: #C82F8D;
    font-family: "Yeseva One", serif;
    font-size: 64px;
  }
`;
