import { useRouter } from "next/router";
import React from "react";
import { frontend } from "../../constants";

export default function View() {
  const router = useRouter();
  const { projectSlug } = router.query;

  const project = frontend.find((p) => p.slug === projectSlug);

  if (!project) {
    return <div>Proyecto no encontrado</div>;
  }

  return <div>View: {project.name}</div>;
}
