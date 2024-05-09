import { useRouter } from "next/router";
import React from "react";
import { frontend } from "../../constants";
import {
  GridContainer,
  Images,
  ProjectInformation,
} from "@/styles/ProjectSlug.style";

export default function View() {
  const router = useRouter();
  const { projectSlug } = router.query;

  const project = frontend.projects.find((p) => p.slug === projectSlug);

  if (!project) {
    return <div>Proyecto no encontrado</div>;
  }

  return (
    <div>
      <GridContainer>
        <ProjectInformation>
          <h5>{frontend.theme}</h5>
          <h1>{project.name}</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </span>
          <span>Herramientas:</span>
          <ul>
            <li>Esto</li>
            <li>Lo otro</li>
            <li>Lo de más allá</li>
          </ul>
        </ProjectInformation>
        <Images>

          <div className="image2"/>
        </Images>
      </GridContainer>
    </div>
  );
}
