import styled from "@emotion/styled";

export const CardStyled = styled.div`
  cursor: pointer;
  width: 300px;
  margin: 80px 0px;
  border: 10px solid #f8e9cb;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  gap: 8px;
  & img {
    width: 230px;
    height: 230px;
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
