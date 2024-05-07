
import SocialMedia from "@/components/SocialMedia";
import { Circle1, Circle2, Header, Welcome } from "@/styles/Index.style";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
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
    </>
  );
}
