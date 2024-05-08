import styled from "@emotion/styled";

export const Container = styled.div`
  height: 96px;
  width: 100vw;
  background-color: #c82f8d;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export const Content = styled.div`
  padding: 32px;
  animation: scroll 40s linear infinite;
  animation-timing-function: ease-in-out;
  width: calc(150px * 20);
  & span {
    font-size: 16px;
    color: #fff;
    font-weight: 500;
  }
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-150px * 10));
    }
  }
`;

export const Slide = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  width: 150px;
`;
