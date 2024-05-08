import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Header = styled.header`
  height: 740px;
  position: relative;
  overflow: hidden;
`;

const BackgroundCircle = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(400px);
`;

export const Circle1 = styled(BackgroundCircle)`
  position: sticky;
  top: 380px;
  left: 78%;
  width: 300px;
  height: 300px;
  background-color: #bc2b9e;
`;

export const Circle2 = styled(BackgroundCircle)`
  position: absolute;
  width: 286px;
  height: 287px;
  background-color: #b6aef2;
  top: 100px;
  left: 200px;
  z-index: 1;
`;

export const Welcome = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;
  padding-left: 100px;
  position: absolute;
  z-index: 2;
  & h1 {
    font-family: "Libre Baskerville", serif;
    font-weight: 700;
    font-size: 64px;
  }
  & span {
    font-family: "Poppins", sans-serif;
    font-size: 28px;
  }
  .pinkcolor {
    color: #c82f8d;
    font-family: "Libre Baskerville", serif;
    font-weight: 700;
    font-size: 64px;
  }
`;

export const Main = styled.main`
  height: 900px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
`;

export const Article = styled.article`
  padding: 48px;
  & h3 {
    font-family: "Libre Baskerville", serif;
    text-align: center;
    font-size: 48px;
    padding: 32px;
  }
`;

export const Articles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 32px;
`;

export const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 700px;
  gap: 16px;
  padding: 32px;
  & h2 {
    font-family: "Libre Baskerville", serif;
    font-weight: 700;
    font-size: 48px;
  }
`;

export const GridContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.footer`
  height: 500px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 8px;
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  & h4 {
    font-family: "Caveat Brush", cursive;
    font-weight: 700;
    font-size: 64px;
    color: #c82f8d;
    margin-bottom: 8px;
  }
  .contactme-text {
    font-size: 24px;
    font-weight: 500;
    margin: 8px 0;
  }
  & span {
    font-size: 18px;
  }
`;

export const Flower = styled.div`
  display: flex;
  align-items: end;
  padding-left: 150px;
  /* transform: rotate(25deg); */
`;

export const Rainbow = styled.div`
  display: flex;
  align-items: start;
  justify-content: end;
  padding-right: 100px;
  /* transform: rotate(-15deg); */
`;
