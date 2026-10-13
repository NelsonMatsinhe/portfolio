import { useCallback, useState } from "react";
import { AnimatePresence, m, useReducedMotion } from "motion/react";
import { motionEase, motionTime } from "../motionSystem";
import { projects, type Project } from "../data";
import ProjectModal from "./ProjectModal";
import ProjectVisual from "./ProjectVisual";
import Reveal from "./Reveal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const reducedMotion = useReducedMotion();
  const closeProject = useCallback(() => setSelectedProject(null), []);
  const featuredIds = ["informacao-publica-tempo", "versalmovie", "klc-marketplace", "precos-baixos"];
  const featuredProjects = featuredIds.map((id) => projects.find((project) => project.id === id)).filter((project): project is Project => Boolean(project));
  const otherProjects = projects.filter((project) => !featuredIds.includes(project.id));

  return (
    <section id="work" className="section-shell work-section" aria-labelledby="projects-title">
      <div className="work-heading">
        <Reveal effect="left"><p className="eyebrow">01 — Projetos</p></Reveal>
        <Reveal effect="up" delayMs={60} className="work-heading-main"><h2 id="projects-title">Projetos para a web, o comércio e <em>o dia a dia.</em></h2><p className="section-intro">Plataformas de informação, comércio eletrónico e aplicações para web e dispositivos móveis.</p></Reveal>
      </div>
      <div className="project-list featured-project-list">
        {featuredProjects.map((project, index) => (
          <Reveal key={project.id} effect={index === 0 ? "left" : index === 1 ? "scale" : index === 2 ? "right" : "up"} className={`project-reveal project-reveal-${index + 1}`} delayMs={index * 50}>
            <m.article className={`featured-project-row project-card project-card-${index + 1}`} whileHover={reducedMotion ? undefined : { y: -3 }} transition={{ duration: motionTime.quick, ease: motionEase }}>
              <div className="project-content">
                <p className="project-type"><span>{String(index + 1).padStart(2, "0")}</span> {project.type}</p>
                <h3>{project.title}</h3><p>{project.short}</p>
                <p className="project-contribution">{project.contribution}</p>
                {project.tech.length > 0 && <p className="project-tech"><span>Tecnologias</span>{project.tech.join(" · ")}</p>}
                <div className="project-actions">
                  <m.button className="project-open-link" type="button" aria-haspopup="dialog" aria-label={`Ver detalhes do projeto ${project.title}`} onClick={() => setSelectedProject(project)} whileHover={reducedMotion ? undefined : { y: -2 }} whileTap={reducedMotion ? undefined : { scale: 0.97 }} transition={{ duration: motionTime.quick, ease: motionEase }}>Ver detalhes <span aria-hidden="true">↗</span></m.button>
                  {project.url && <a className="project-live-link" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Abrir o site de ${project.title} num novo separador`}>Ver site <span aria-hidden="true">↗</span></a>}
                </div>
              </div>
              <ProjectVisual project={project} />
            </m.article>
          </Reveal>
        ))}
      </div>
      {otherProjects.length > 0 && <div className="other-projects">
        <div className="other-projects-heading"><p className="eyebrow">Outros projetos</p><p>Sem captura disponível nesta página.</p></div>
        <div className="other-projects-list">
          {otherProjects.map((project) => (
            <article className="other-project" key={project.id}>
              <div>
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.short}</p>
                {project.contribution && <p className="other-project-contribution">{project.contribution}</p>}
                {project.tech.length > 0 && <p className="other-project-tech">Tecnologias · {project.tech.join(" · ")}</p>}
              </div>
              <div className="other-project-actions">
                <m.button className="project-open-link" type="button" aria-haspopup="dialog" aria-label={`Ver detalhes do projeto ${project.title}`} onClick={() => setSelectedProject(project)} whileHover={reducedMotion ? undefined : { y: -2 }} whileTap={reducedMotion ? undefined : { scale: 0.97 }} transition={{ duration: motionTime.quick, ease: motionEase }}>Ver detalhes <span aria-hidden="true">↗</span></m.button>
                {project.url && <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Abrir o site de ${project.title} num novo separador`}>Ver site <span aria-hidden="true">↗</span></a>}
              </div>
            </article>
          ))}
        </div>
      </div>}
      <AnimatePresence mode="wait">
        {selectedProject && <ProjectModal key={selectedProject.id} project={selectedProject} onClose={closeProject} />}
      </AnimatePresence>
    </section>
  );
}
