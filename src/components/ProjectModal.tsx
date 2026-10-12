import { useEffect, useRef, useState } from "react";
import { AnimatePresence, m, useReducedMotion } from "motion/react";
import type { Project } from "../data";
import { motionEase, motionTime } from "../motionSystem";

interface ProjectModalProps { project: Project; onClose: () => void; }

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLElement>(null);
  const gallery = project.images?.length ? project.images : project.image ? [project.image] : [];
  const [activeImage, setActiveImage] = useState(0);
  const reducedMotion = useReducedMotion();
  useEffect(() => {
    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    closeButtonRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (gallery.length > 1 && event.key === "ArrowRight") setActiveImage((index) => Math.min(index + 1, gallery.length - 1));
      if (gallery.length > 1 && event.key === "ArrowLeft") setActiveImage((index) => Math.max(index - 1, 0));
    };
    const handleFocusTrap = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;
      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>("a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex='-1'])");
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && (document.activeElement === first || !dialogRef.current?.contains(document.activeElement))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (document.activeElement === last || !dialogRef.current?.contains(document.activeElement))) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keydown", handleFocusTrap);
    document.body.classList.add("modal-open");
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keydown", handleFocusTrap);
      document.body.classList.remove("modal-open");
      previouslyFocused?.focus();
    };
  }, [gallery.length, onClose]);

  return (
    <m.div className="modal-backdrop" role="presentation" onClick={(event) => { if (event.target === event.currentTarget) onClose(); }} initial={reducedMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={reducedMotion ? undefined : { opacity: 0 }} transition={{ duration: reducedMotion ? 0 : motionTime.quick }}>
      <m.section ref={dialogRef} className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" aria-describedby="project-modal-description" tabIndex={-1} initial={reducedMotion ? false : { opacity: 0, y: 18, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={reducedMotion ? undefined : { opacity: 0, y: 12, scale: 0.99 }} transition={{ duration: reducedMotion ? 0 : motionTime.standard, ease: motionEase }}>
        <div className="modal-header"><p className="eyebrow">{project.type}</p><button ref={closeButtonRef} className="modal-close" type="button" onClick={onClose} aria-label="Fechar detalhes do projeto">Fechar <span aria-hidden="true">×</span></button></div>
        <h2 id="project-modal-title">{project.title}</h2>
        <p id="project-modal-description" className="project-modal-description">{project.description}</p>
        {gallery.length ? (
          <div className="project-gallery" aria-label={`Imagens de ${project.title}`}>
            <figure className="project-gallery-main">
              <AnimatePresence mode="wait" initial={false}>
                <m.img key={gallery[activeImage]} src={gallery[activeImage]} alt={`Captura de ecrã de ${project.title}, imagem ${activeImage + 1} de ${gallery.length}`} width={project.id === "precos-baixos" ? 1284 : 1356} height={project.id === "precos-baixos" ? 523 : 603} decoding="async" initial={reducedMotion ? false : { opacity: 0, scale: 0.99 }} animate={{ opacity: 1, scale: 1 }} exit={reducedMotion ? undefined : { opacity: 0, scale: 1.01 }} transition={{ duration: reducedMotion ? 0 : motionTime.quick, ease: motionEase }} />
              </AnimatePresence>
            </figure>
            {gallery.length > 1 && (
              <div className="project-gallery-controls">
                <m.button className="gallery-step" type="button" aria-label="Imagem anterior" onClick={() => setActiveImage((activeImage - 1 + gallery.length) % gallery.length)} whileTap={reducedMotion ? undefined : { scale: 0.94 }} disabled={activeImage === 0}>
                  <span aria-hidden="true">←</span> Anterior
                </m.button>
                <span className="project-gallery-count" aria-live="polite">{String(activeImage + 1).padStart(2, "0")} / {String(gallery.length).padStart(2, "0")}</span>
                <div className="project-gallery-thumbs" role="group" aria-label="Selecionar imagem do projeto">
                  {gallery.map((image, index) => (
                    <button
                      key={image}
                      type="button"
                      className={"project-gallery-thumb" + (index === activeImage ? " is-active" : "")}
                      aria-label={`Ver imagem ${index + 1} de ${gallery.length}`}
                      aria-pressed={index === activeImage}
                      onClick={() => setActiveImage(index)}
                    >
                      <img src={image} alt="" loading="lazy" />
                    </button>
                  ))}
                </div>
                <m.button className="gallery-step" type="button" aria-label="Imagem seguinte" onClick={() => setActiveImage((activeImage + 1) % gallery.length)} whileTap={reducedMotion ? undefined : { scale: 0.94 }} disabled={activeImage === gallery.length - 1}>
                  Seguinte <span aria-hidden="true">→</span>
                </m.button>
              </div>
            )}
          </div>
        ) : null}
        <div className="case-study-grid">
          {project.contribution && <div><span className="case-label">Contribuição</span><p>{project.contribution}</p></div>}
          <div><span className="case-label">Destaques</span><ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></div>
          {project.tech.length > 0 && <div><span className="case-label">Tecnologias</span><p>{project.tech.join(" · ")}</p></div>}
        </div>
        {project.url && <a className="text-link project-live-link" href={project.url} target="_blank" rel="noreferrer">Ver site <span aria-hidden="true">↗</span></a>}
      </m.section>
    </m.div>
  );
}
