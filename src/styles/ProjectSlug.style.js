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
  & h5{
    font-size: 22px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.5);
    font-family: "Poppins", sans-serif;
  }
  & h1{
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
  .image1 {
    background-color: rgba(246, 151, 220, 1);
    width: auto;
    height: 50%;
    border-radius: 25px;
  }
  .image2 {
    background-color: rgba(187, 80, 237, 1);
    width: auto;
    height: 100%;
    border-radius: 25px;
  }
`;
