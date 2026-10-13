import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";
import { experience } from "./data";
import { LazyMotion, domAnimation, m, useReducedMotion, useScroll, useSpring } from "motion/react";
import { useEffect } from "react";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 28, restDelta: 0.001 });
  const reducedMotion = useReducedMotion();
  if (reducedMotion) return null;
  return <m.div className="scroll-progress" style={{ scaleX: progress }} aria-hidden="true" />;
}

function App() {
  useEffect(() => {
    document.documentElement.classList.add("motion-ready");
    return () => document.documentElement.classList.remove("motion-ready");
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <div id="page">
        <ScrollProgress />
        <a className="skip-link" href="#main-content">Avançar para o conteúdo</a>
        <main id="main-content" tabIndex={-1}>
          <HeroSection />
          <Projects />
          <section id="experience" className="experience-section" aria-labelledby="experience-title">
            <div className="experience-shell">
              <div className="experience-heading">
                <Reveal effect="left"><p className="eyebrow">02 — Percurso</p></Reveal>
                <Reveal effect="left" delayMs={60}><h2 id="experience-title">Experiência profissional.</h2><p>Contribuições em desenvolvimento, evolução e manutenção de plataformas.</p></Reveal>
              </div>
              <div className="experience-list">
              {experience.map((item, index) => (
                <Reveal key={item.company} effect={index % 2 === 0 ? "right" : "left"} delayMs={index * 40}>
                  <article className="experience-item">
                    <span className="experience-index">{String(index + 1).padStart(2, "0")}</span>
                    <div className="experience-employer"><h3>{item.company}</h3><p>{item.role}</p></div>
                    <ul className="experience-points">{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
                    <p className="experience-period">{item.period}</p>
                  </article>
                </Reveal>
              ))}
              </div>
            </div>
          </section>
          <Skills />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </LazyMotion>
  );
}

export default App;
