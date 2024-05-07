import React, { useState } from "react";
import {
  IconMenu,
  LinkStyled,
  LogoWrapper,
  Menu,
  NavStyled,
} from "./index.style";
import { faBarChart } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <NavStyled>
      <LogoWrapper>
        <span>Mariana Trujillo</span>
      </LogoWrapper>
      <Menu onClick={toggleMenu}>
        <IconMenu icon={faBars} />
      </Menu>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <LinkStyled href="/">Home</LinkStyled>
        </li>
        <li>
          <LinkStyled href="#">Sobre mí</LinkStyled>
        </li>
        <li>
          <LinkStyled href="#">Currículum</LinkStyled>
        </li>
      </ul>
    </NavStyled>
  );
};

export default Navbar;
