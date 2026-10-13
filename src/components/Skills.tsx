import { technologyGroups } from "../data";
import Reveal from "./Reveal";
import { m, useReducedMotion } from "motion/react";

export default function Skills() {
  const reducedMotion = useReducedMotion();
  return (
    <section id="stack" className="skills-section" aria-labelledby="skills-title">
      <div className="skills-shell">
        <div className="skills-heading">
          <Reveal effect="left"><p className="eyebrow">03 — Caixa de ferramentas</p></Reveal>
          <Reveal effect="left" delayMs={60}><h2 id="skills-title">Tecnologias com que trabalho.</h2><p>As ferramentas que utilizo para desenvolver, integrar e manter aplicações.</p></Reveal>
        </div>
        <Reveal className="primary-stack" effect="right" delayMs={100}>
          <div className="primary-stack-groups">
            {technologyGroups.map((group, groupIndex) => (
              <m.div
                className="primary-stack-group"
                key={group.label}
                initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={reducedMotion ? { duration: 0 } : { type: "spring", stiffness: 100, damping: 18, delay: 0.14 + groupIndex * 0.09 }}
                whileHover={reducedMotion ? undefined : { y: -6, transition: { type: "spring", stiffness: 220, damping: 20 } }}
              >
                <div className="stack-group-heading"><span>{String(groupIndex + 1).padStart(2, "0")}</span><h3>{group.label}</h3></div>
                <ul>{group.items.map((technology) => <m.li key={technology} whileHover={reducedMotion ? undefined : { y: -3, scale: 1.025 }} whileTap={reducedMotion ? undefined : { scale: 0.96 }} transition={{ type: "spring", stiffness: 280, damping: 18 }}>{technology}</m.li>)}</ul>
              </m.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
