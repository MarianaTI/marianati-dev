import styled from "@emotion/styled";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  height: 72px;
  padding: 0 88px;
  width: 100%;
  @media (max-width: 740px) {
    flex-direction: column;
    align-items: start;
    height: auto;
    width: auto;
    padding: 0;
  }
  & ul {
    display: flex;
    @media (max-width: 740px) {
      display: none;
      flex-direction: column;
      margin-bottom: 8px;
    }
    & li {
      list-style: none;
      @media (max-width: 740px) {
        width: 100%;
        text-align: left;
        padding-left: 8px;
      }
    }
  }
  .open {
    display: flex;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 55px;
  & span {
    color: #181818;
    font-weight: 500;
  }
  @media (max-width: 740px) {
    margin-left: 32px;
  }
`;

export const Menu = styled.div`
  display: none;
  position: absolute;
  top: 16px;
  right: 8px;
  flex-direction: column;
  justify-content: space-between;
  width: 36px;
  height: 32px;
  @media (max-width: 740px) {
    display: flex;
  }
`;

export const LinkStyled = styled(Link)`
  display: block;
  text-decoration: none;
  color: #181818;
  font-family: Poppins;
  font-weight: 500;
  padding: 16px;
  @media (max-width: 740px) {
    margin: 8px;
  }
`;

export const IconMenu = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: #181818;
  font-size: 22px;
`;
