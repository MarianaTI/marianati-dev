import styled from "@emotion/styled";

export const CardStyled = styled.div`
  cursor: pointer;
  width: 300px;
  border: 1px solid rgba(0, 0, 0, 0.07);
  border-radius: 15px;
  margin: 32px 0px;
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0px 0px 10px 5px rgba(200, 47, 141, 0.5);  
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 8px;
  & img {
    border-radius: 15px;
  }
  & h1 {
    color: #181818;
    font-size: 24px;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
  }
  & span {
    color: #181818;
    font-size: 14px;
    font-family: "Poppins", sans-serif;
  }
`;
