import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 72px);
`;

export const Header = styled.header`
  height: 850px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const Welcome = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
  gap: 8px;
  & h1 {
    color: #181818;
    font-family: "Spicy Rice", serif;
    font-size: 72px;
  }
  & span {
    color: #181818;
    font-family: "Poppins", sans-serif;
    font-size: 24px;
    padding-bottom: 8px;
  }
`;

export const Flower = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 80px;
`;

export const Lines = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 80px;
  align-items: flex-end;
`;

export const Main = styled.main`
  height: 650px;
  display: grid;
  background-color: #fbf6ec;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
`;

export const Article = styled.article`
  margin: 300px 0px;
  padding: 64px;
  font-family: "Spicy Rice", serif;
  & h3 {
    text-align: center;
    font-size: 64px;
    color: #908A35;
    padding: 16px;
  }
  .title {
    font-size: 32px;
    color: #181818;
  }
  .description {
    font-family: "Poppins", sans-serif;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const Articles = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 700px;
  gap: 16px;
  padding: 32px;
  & h2 {
    font-family: "Spicy Rice", serif;
    font-size: 64px;
    color: #e37166;
  }
  & span {
    width: 480px;
  }
`;

export const GridContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.footer`
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ca3c4a;
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff4ed;
  padding: 32px;
  & h4 {
    font-family: "Spicy Rice", serif;
    text-align: center;
    font-size: 64px;
    padding-bottom: 16px;
  }
  .contactme-text {
    font-size: 24px;
    font-weight: 600;
    padding-bottom: 8px;
  }
  & span {
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    font-weight: 300;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
