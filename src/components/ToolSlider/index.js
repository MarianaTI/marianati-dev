import React from "react";
import { Container, Content } from "./index.style";
import Image from "next/image";

const tools = [
  {
    image: "/img/js.png",
    name: "JavaScript",
  },
  {
    image: "/img/react.png",
    name: "React.js",
  },
  {
    image: "/img/next-js.png",
    name: "Next.js",
  },
  {
    image: "/img/html5.png",
    name: "CSS",
  },
  {
    image: "/img/react.png",
    name: "HTML",
  },
  {
    image: "/img/firebase.png",
    name: "Firebase",
  },
  {
    image: "/img/jirasoftware.png",
    name: "JiraSoftware",
  },
  {
    image: "/img/figma.png",
    name: "Figma",
  },
  {
    image: "/img/adobexd.png",
    name: "AdobeXD",
  },
  {
    image: "/img/nodejs.png",
    name: "Node.js",
  },
];

const ToolSlider = () => {
  return (
    <Container>
      {tools.map((tool, index) => (
        <Content key={index}>
          <Image src={tool.image} height={32} width={28} alt="tools icon" />
          <span>{tool.name}</span>
        </Content>
      ))}
    </Container>
  );
};

export default ToolSlider;
