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
  Lines,
  Main,
  Rainbow,
  Welcome,
} from "@/styles/Index.style";
import Image from "next/image";
import { frontend, ui } from "../../constants";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const navigateToProject = (slug) => {
    return router.push({
      pathname: "/[projectSlug]",
      query: { projectSlug: slug },
    });
  };
  return (
    <Container>
      <Header>
        <Flower>
          <img
            src="/img/flowers-retro.png"
            style={{ width: "300px", height: "300px" }}
          />
        </Flower>
        <Welcome>
          <h1>Hola! Soy Mariana</h1>
          <span>Front End Developer | UX/UI</span>
          <SocialMedia />
        </Welcome>
        <Lines>
          <img
            src="/img/lines-retro.png"
            style={{ width: "400px", height: "380px" }}
          />
        </Lines>
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
          <Image
            src="/img/aboutme-image.png"
            width={400}
            height={400}
            alt="about-me"
          />
        </GridContainer>
      </Main>
      <img src="/img/wave-aboutme.png" width="100%" height="320px" />
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
              {frontend.projects.map((project, index) => (
                <Card
                  key={index}
                  image={project.image}
                  alt={project.slug}
                  title={project.name}
                  description={project.description}
                  onClick={() => navigateToProject(project.slug)}
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
              {ui.projects.map((project, index) => (
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
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          style={{ height: "100% ", width: "100%" }}
        >
          <path
            fill="#f3f4f5"
            fill-opacity="1"
            d="M0,128L80,154.7C160,181,320,235,480,229.3C640,224,800,160,960,122.7C1120,85,1280,75,1360,69.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            style={{ stroke: "none", fill: "#CA3C4A" }}
          ></path>
        </svg>
        <Footer>
          <Contact>
            <h4>¡Gracias por visitar!</h4>
            <span className="contactme-text">Contáctame</span>
            <span>marianatrujillo27@hotmail.com</span>
            <span>(+52) 999 273 7423</span>
            <span>Mérida, Yucatán</span>
          </Contact>
        </Footer>
      </div>
    </Container>
  );
}
