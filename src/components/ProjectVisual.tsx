import type { Project } from "../data";
import { m, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { hoverFrameVariants, motionEase, motionTime, projectFrameVariants } from "../motionSystem";

interface ProjectVisualProps { project: Project; }

export default function ProjectVisual({ project }: ProjectVisualProps) {
  const ref = useRef<HTMLElement | null>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageOffset = useTransform(scrollYProgress, [0, 1], [14, -14]);
  if (!project.image) return null;

  return (
    <m.figure
      ref={ref}
      className="project-visual"
      variants={projectFrameVariants}
      initial="rest"
      whileHover={reducedMotion ? undefined : "hover"}
      transition={{ duration: motionTime.quick, ease: motionEase }}
    >
      <m.img className="project-screenshot" variants={hoverFrameVariants} style={{ y: reducedMotion ? 0 : imageOffset }} src={project.image} alt={`Captura de ecrã do projeto ${project.title}`} width={project.imageWidth ?? 1356} height={project.imageHeight ?? 603} loading="lazy" decoding="async" />
      <figcaption className="project-visual-caption" aria-hidden="true"><span>Captura do projeto</span><span>{project.type}</span></figcaption>
    </m.figure>
  );
}
