import Card from "@/components/Card";
import SocialMedia from "@/components/SocialMedia";
import ToolSlider from "@/components/ToolSlider";
import {
  AboutMe,
  Article,
  Articles,
  CardContainer,
  Circle1,
  Circle2,
  Contact,
  Container,
  Flower,
  Footer,
  GridContainer,
  Header,
  ImageContainer,
  Main,
  Rainbow,
  Welcome,
} from "@/styles/Index.style";
import Image from "next/image";
import { frontend, ui } from "../../constants";

export default function Home() {
  return (
    <Container>
      <Header>
        <Circle1 />
        <Circle2 />
        <Welcome>
          <div>
            <h1>
              Hola! Soy <span className="pinkcolor">Mariana</span>
            </h1>
          </div>
          <span>Front End Developer | UX/UI</span>
          <SocialMedia />
        </Welcome>
      </Header>
      <ToolSlider />
      <Main>
        <GridContainer>
          <AboutMe>
            <h2>Sobre mí</h2>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </span>
          </AboutMe>
        </GridContainer>
        <GridContainer>
          <Image src="/img/image.png" width={400} height={400} alt="about-me"/>
        </GridContainer>
      </Main>
      <Article>
        <h3>Proyectos</h3>
        <Articles>
          <span className="title">Front End Developer</span>
          <span className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia.
          </span>
          <CardContainer>
            {frontend.map((project, index) => (
              <Card
                key={index}
                image={project.image}
                alt={project.slug}
                title={project.name}
                description={project.description}
              />
            ))}
          </CardContainer>
        </Articles>
        <Articles>
          <span className="title">UX/UI</span>
          <span className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia.
          </span>
          <CardContainer>
            {ui.map((project, index) => (
              <Card
                key={index}
                image={project.image}
                alt={project.slug}
                title={project.name}
                description={project.description}
              />
            ))}
          </CardContainer>
        </Articles>
      </Article>
      <Footer>
        <Flower>
          <Image src="/img/flowers.png" width={250} height={250} alt="flowers"/>
        </Flower>
        <Contact>
          <h4>¡Gracias por visitar!</h4>
          <span className="contactme-text">Contáctame</span>
          <span>marianatrujillo27@hotmail.com</span>
          <span>(+52) 999 273 7423</span>
          <span>Mérida, Yucatán</span>
        </Contact>
        <Rainbow>
          <Image src="/img/rainbow.png" width={250} height={250}  alt="rainbow"/>
        </Rainbow>
      </Footer>
    </Container>
  );
}
