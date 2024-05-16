import styled from "@emotion/styled";

export const GridContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 80px;
`;

export const ProjectInformation = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 80px;
  gap: 16px;
  & h5 {
    font-size: 22px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.5);
    font-family: "Poppins", sans-serif;
  }
  & h1 {
    font-size: 56px;
    font-weight: 600;
    color: #181818;
    font-family: "Poppins", sans-serif;
  }
`;

export const Images = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 72px);
  padding: 40px;
  gap: 40px;
  & img{
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 25px;
  }
`;

export const ButtonStyled = styled.button`
  border: none;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: 0.4s;
  cursor: pointer;
  position: relative;
  background-color: rgb(31, 31, 31);
  overflow: hidden;
  .svgIcon {
    transition-duration: 0.3s;
  }
  & path {
    fill: white;
  }
  .text {
    position: absolute;
    color: rgb(255, 255, 255);
    width: 120px;
    font-weight: 600;
    opacity: 0;
    transition-duration: 0.4s;
  }
  &:hover {
    width: 110px;
    transition-duration: 0.4s;
    border-radius: 30px;
  }
  &:hover .text {
    opacity: 1;
    transition-duration: 0.4s;
  }
  &:hover .svgIcon {
    opacity: 0;
    transition-duration: 0.3s;
  }
`;
