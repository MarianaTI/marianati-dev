import styled from "@emotion/styled";

export const CardStyled = styled.div`
  cursor: pointer;
  width: 300px;
  margin: 80px 0px;
  background-color: #fff5f1;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px 16px 16px;
  gap: 8px;
  & img {
    padding: 16px;
    width: 300px;
    height: 250px;
  }
  & h1 {
    color: #181818;
    font-size: 28px;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
  }
  & span {
    text-align: center;
    color: #181818;
    font-size: 14px;
    font-family: "Poppins", sans-serif;
  }
`;
