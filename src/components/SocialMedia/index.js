import Image from "next/image";
import React from "react";
import { Circle, Container } from "./index.style";

const app = [
  {
    link: "https://dribbble.com/MarianaTI",
    image: "/img/dribbble.png",
  },
  {
    link: "https://www.linkedin.com/in/mariana-trujillo-islas-026501284/",
    image: "/img/linkedin.png",
  },
  {
    link: "https://github.com/MarianaTI",
    image: "/img/github.png",
  },
];

const SocialMedia = () => {
  return (
    <Container>
      {app.map((social, index) => (
        <Circle key={index} href={social.link}>
          <Image src={social.image} height={20} width={20} alt="social icon" />
        </Circle>
      ))}
    </Container>
  );
};

export default SocialMedia;
