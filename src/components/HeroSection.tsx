import { AnimatePresence, m, useReducedMotion, useScroll, useTransform, type Variants } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { motionEase, motionTime } from "../motionSystem";
import { featuredTechnologies, siteInfo } from "../data";

const navigation = [
  { href: "#work", label: "Projetos" },
  { href: "#experience", label: "Experiência" },
  { href: "#stack", label: "Tecnologias" },
  { href: "#about", label: "Perfil" },
  { href: "#contact", label: "Contacto" },
];

const rise: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: motionTime.entrance, ease: motionEase } },
};

function PortraitFeature({ reducedMotion }: { reducedMotion: boolean | null }) {
  return (
    <m.figure
      className="hero-portrait-feature"
      initial={reducedMotion ? false : { opacity: 0, scale: 0.97, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: reducedMotion ? 0 : motionTime.entrance, ease: motionEase, delay: reducedMotion ? 0 : 0.24 }}
    >
      <div className="hero-photo-frame">
        <img
          src="/portfolio/nelson-matsinhe-portrait.webp"
          alt="Nelson Matsinhe, desenvolvedor Full-Stack"
          width="1200"
          height="942"
          fetchPriority="high"
        />
      </div>
      <figcaption><span>Nelson Matsinhe</span><span>Maputo, MZ</span></figcaption>
    </m.figure>
  );
}

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const reducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement | null>(null);
  const menuToggleRef = useRef<HTMLButtonElement | null>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const portraitOffset = useTransform(scrollYProgress, [0, 1], [0, 34]);
  const sequence: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: reducedMotion ? 0 : 0.11 } },
  };
  const entrance: Variants = reducedMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : rise;

  useEffect(() => {
    const sections = navigation.map(({ href }) => document.querySelector(href)).filter((node): node is Element => Boolean(node));
    if (!sections.length || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
      }
    }, { rootMargin: "-38% 0px -52% 0px" });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      menuToggleRef.current?.focus();
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <section ref={heroRef} id="top" className="hero-shell">
      <header className="site-header">
        <a href="#top" className="site-brand" aria-label="Nelson Matsinhe, início">
          <span className="brand-monogram">NM</span>
          <span>Nelson Matsinhe<small>Desenvolvedor Full-Stack</small></span>
        </a>
        <m.button
          ref={menuToggleRef}
          className="mobile-menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Fechar navegação principal" : "Abrir navegação principal"}
          onClick={() => setMenuOpen((open) => !open)}
          whileTap={reducedMotion ? undefined : { scale: 0.96 }}
          transition={{ duration: motionTime.quick, ease: motionEase }}
        >
          {menuOpen ? "Fechar" : "Menu"}
        </m.button>
        <nav className="primary-navigation" aria-label="Navegação principal">
          {navigation.map((item) => (
            <m.a key={item.href} href={item.href} aria-current={activeSection === item.href ? "location" : undefined} onClick={() => setMenuOpen(false)}>
              {item.label}
              <AnimatePresence initial={false}>
              {activeSection === item.href && <m.span key={activeSection} className="navigation-indicator" initial={reducedMotion ? false : { scaleX: 0 }} animate={{ scaleX: 1 }} exit={reducedMotion ? undefined : { scaleX: 0 }} transition={{ duration: reducedMotion ? 0 : motionTime.quick, ease: motionEase }} />}
              </AnimatePresence>
            </m.a>
          ))}
        </nav>
        <AnimatePresence initial={false}>
          {menuOpen && (
            <m.nav
              id="primary-navigation"
              className="mobile-navigation"
              aria-label="Navegação móvel"
              initial={{ height: 0, opacity: 0, y: -8 }}
              animate={{ height: "auto", opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: -8 }}
              transition={{ duration: reducedMotion ? 0 : motionTime.quick, ease: motionEase }}
              style={{ overflow: "hidden" }}
            >
              {navigation.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}<span aria-hidden="true">↗</span></a>
              ))}
            </m.nav>
          )}
        </AnimatePresence>
      </header>

      <div className="hero-layout">
        <m.div className="hero-copy" variants={sequence} initial={reducedMotion ? false : "hidden"} animate="visible">
          <m.p variants={entrance} className="hero-overline"><span className="status-dot" /> Maputo, Moçambique <span className="overline-divider">/</span> Desenvolvimento web</m.p>
          <h1 className="hero-title">
            <span className="hero-title-line"><m.span variants={entrance}>Nelson Alexandre</m.span></span>
            <span className="hero-title-line hero-title-offset"><m.span variants={entrance}>Matsinhe<span className="hero-title-period">.</span></m.span></span>
          </h1>
          <m.p variants={entrance} className="hero-role">Desenvolvedor <em>Full-Stack</em></m.p>
          <m.p variants={entrance} className="hero-intro">{siteInfo.heroIntro}</m.p>
          <m.div variants={entrance} className="hero-actions">
            <m.a className="button button-bright" href="#work" whileHover={reducedMotion ? undefined : { y: -3 }} whileTap={reducedMotion ? undefined : { scale: 0.98 }} transition={{ duration: motionTime.quick, ease: motionEase }}>Explorar projetos <span aria-hidden="true">↘</span></m.a>
            <m.a className="button button-outline" href="#contact" whileHover={reducedMotion ? undefined : { y: -3 }} whileTap={reducedMotion ? undefined : { scale: 0.98 }} transition={{ duration: motionTime.quick, ease: motionEase }}>Contactar-me <span aria-hidden="true">↗</span></m.a>
            <a className="button button-cv" href={siteInfo.cv} download>Descarregar CV <span aria-hidden="true">↓</span></a>
          </m.div>
          <m.div variants={entrance} className="hero-stack-note" aria-label="Tecnologias principais">
            <span>Stack principal</span>{featuredTechnologies.map((technology, index) => <span className="hero-stack-item" key={technology}>{index > 0 && <i aria-hidden="true">·</i>}<strong>{technology}</strong></span>)}
          </m.div>
        </m.div>

        <div className="hero-visual">
          <m.div className="hero-orbit hero-orbit-one" aria-hidden="true" initial={reducedMotion ? false : { opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: reducedMotion ? 0 : motionTime.entrance, delay: reducedMotion ? 0 : 0.1, ease: motionEase }} />
          <m.div className="hero-orbit hero-orbit-two" aria-hidden="true" initial={reducedMotion ? false : { opacity: 0, scale: 0.92, rotate: -8 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: reducedMotion ? 0 : motionTime.entrance, delay: reducedMotion ? 0 : 0.18, ease: motionEase }} />
          <div className="hero-coordinate" aria-hidden="true"><span>MAPUTO</span><span>MOÇAMBIQUE</span></div>
          <m.div className="hero-parallax" style={{ y: reducedMotion ? 0 : portraitOffset }}>
            <PortraitFeature reducedMotion={reducedMotion} />
          </m.div>
        </div>
      </div>
      <a href="#work" className="hero-scroll-cue"><span className="scroll-line" aria-hidden="true" /> Descer para explorar</a>
      <span className="hero-index" aria-hidden="true">PORTFÓLIO <b>2026</b></span>
    </section>
  );
}
