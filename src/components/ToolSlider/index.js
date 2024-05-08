import React from "react";
import { Container, Content, Slide } from "./index.style";
import Image from "next/image";
import { tools } from "../../../constants";

const ToolSlider = () => {
  return (
    <Container>
      {tools.map((tool, index) => (
        <Content key={index}>
          <Slide>
            <Image
              src={tool.image}
              height={tool.height}
              width={tool.width}
              alt="tools icon"
            />
            <span>{tool.name}</span>
          </Slide>
        </Content>
      ))}
    </Container>
  );
};

export default ToolSlider;
