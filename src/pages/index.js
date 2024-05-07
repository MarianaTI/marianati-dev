import SocialMedia from "@/components/SocialMedia";
import ToolSlider from "@/components/ToolSlider";
import { Circle1, Circle2, Header, Welcome } from "@/styles/Index.style";

export default function Home() {
  return (
    <div>
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
          <SocialMedia/>
        </Welcome>
      </Header>
      <ToolSlider/>
    </div>
  );
}
