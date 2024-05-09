import React from "react";
import { CardStyled, Content } from "./index.style";

const Card = ({ image, title, description, alt }) => {
  return (
    <CardStyled>
      <Content>
        <img src={image} alt={alt}/>
        <h1>{title}</h1>
        <span>{description}</span>
      </Content>
    </CardStyled>
  );
};

export default Card;
