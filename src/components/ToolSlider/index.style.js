import styled from "@emotion/styled";

export const Container = styled.div`
  height: 96px;
  width: 100vw;
  background-color: #C82F8D;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
    display: flex;
    gap: 16px;
    justify-content: center;
    align-items: center;
    padding: 32px;
    & span{
        font-size: 16px;
        color: #fff;
        font-weight: 500;
    }
`;