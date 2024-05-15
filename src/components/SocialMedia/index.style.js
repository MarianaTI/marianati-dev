import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  gap: 16px;
`;

export const Circle = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border-radius: 100px;
  background-color: #f8e9cb;
  transition: all 0.3s ease-in-out;
  font-family: "Dosis", sans-serif;
  box-shadow: 0 5px 15px -5px rgba(248, 233, 203, 1);
  &:hover{
    transform: translateY(3px);
  box-shadow: none;
  }
  &:active{
    opacity: 0.5;
  }
`;
