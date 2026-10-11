import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import { BrandMark } from "./brand-mark";
import { ScrollReveal } from "./scroll-reveal";

type Project = {
  name: string;
  category: string;
  kind: "Individual project" | "Team project";
  description: string;
  contribution?: string;
  stack: string[];
  github: string;
  demo: string;
  number: string;
  screenshotFile: string;
  screenshotAlt: string;
};

const projects: Project[] = [
  {
    name: "TravelTrucks",
    category: "Travel · Vehicle rental",
    kind: "Individual project",
    description: "A web app for browsing and choosing campers, with a searchable catalog and practical filters to help narrow the options.",
    stack: ["Next.js", "React", "TypeScript", "TanStack Query", "CSS Modules"],
    github: "https://github.com/Slava-S943/travel-trucks",
    demo: "https://travel-trucks-omega-eight.vercel.app/",
    number: "01",
    screenshotFile: "travel-trucks.jpg",
    screenshotAlt: "TravelTrucks camper catalog and rental interface",
  },
  {
    name: "Harmoniq",
    category: "Editorial · Team project",
    kind: "Team project",
    description: "A collaborative web project. I worked on API functionality for updating and deleting articles.",
    contribution: "Article update and delete API functionality",
    stack: ["JavaScript", "REST API"],
    github: "https://github.com/vitaliypolets/project-webcrafters-03",
    demo: "https://project-webcrafters-03-frontend.vercel.app/",
    number: "02",
    screenshotFile: "harmoniq.jpg",
    screenshotAlt: "Harmoniq articles website interface",
  },
  {
    name: "EcoTote",
    category: "E-commerce · Team project",
    kind: "Team project",
    description: "A collaborative storefront project focused on reusable tote bags and a clear shopping experience.",
    contribution: "Header and navigation menu",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/vitaliifedunyk/eco-tote-project",
    demo: "https://vitaliifedunyk.github.io/eco-tote-project/",
    number: "03",
    screenshotFile: "eco-tote.jpg",
    screenshotAlt: "EcoTote online storefront interface",
  },
  {
    name: "Bug Hunters",
    category: "Web application · Team project",
    kind: "Team project",
    description: "A collaborative web application built with a shared focus on useful interface details and a consistent experience.",
    contribution: "iziToast notifications, global loader, and footer",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/vitaliifedunyk/bug-hunters",
    demo: "https://vitaliifedunyk.github.io/bug-hunters/",
    number: "04",
    screenshotFile: "bug-hunters.jpg",
    screenshotAlt: "Bug Hunters web application interface",
  },
];

const stackGroups = [
  { label: "Frontend", items: ["JavaScript", "TypeScript", "React", "Next.js", "HTML", "CSS"] },
  { label: "Backend", items: ["Node.js", "Express", "REST API", "MongoDB"] },
  { label: "Tools", items: ["Git", "GitHub", "Figma"] },
];

function getProjectScreenshot(fileName: string) {
  const filePath = join(process.cwd(), "public", "images", "projects", fileName);
  return existsSync(filePath) ? `/images/projects/${fileName}` : undefined;
}

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 16 16" fill="none"><path d="M3.25 12.75 12.5 3.5M4 3.5h8.5V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function GithubIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.02-.7.08-.69.08-.69 1.12.08 1.7 1.15 1.7 1.15 1 1.69 2.6 1.2 3.23.91.1-.72.4-1.2.7-1.47-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.1-2.96 0 0 .94-.3 3.06 1.15a10.63 10.63 0 0 1 5.57 0c2.12-1.44 3.05-1.15 3.05-1.15.61 1.54.23 2.68.12 2.96.72.78 1.15 1.78 1.15 3 0 4.3-2.61 5.24-5.1 5.52.4.34.76 1.02.76 2.06v3.09c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" /></svg>;
}

function LinkedinIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.7H4.98V9.2h2.95v9.5ZM6.46 7.9a1.71 1.71 0 1 1 .02-3.42 1.71 1.71 0 0 1-.02 3.42ZM19 18.7h-2.95v-4.62c0-1.1-.02-2.51-1.53-2.51-1.53 0-1.76 1.19-1.76 2.43v4.7H9.81V9.2h2.83v1.3h.04c.39-.74 1.36-1.52 2.8-1.52 3 0 3.55 1.97 3.55 4.53v5.2Z" /></svg>;
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return <a className="social-link" href={href} target="_blank" rel="noreferrer" aria-label={label}>{children}</a>;
}

export default function Home() {
  return (
    <main>
      <ScrollReveal />
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand-lockup" href="#home" aria-label="SlavaS home"><BrandMark className="brand-mark" /><span>Slava<span className="brand-name-accent">S</span></span></a>
          <nav className="main-nav" aria-label="Main navigation">
            <a href="#about">About</a><a href="#stack">Stack</a><a href="#projects">Projects</a>
          </nav>
          <a className="header-contact" href="#contact">Let’s talk <ArrowIcon /></a>
        </div>
      </header>

      <section className="hero container" id="home" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Available for opportunities</p>
          <h1 id="hero-title">Slava<span>S</span></h1>
          <p className="hero-role">Junior Fullstack Developer</p>
          <p className="hero-intro">I build thoughtful web experiences with clean interfaces, useful details, and code that works well together.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">View projects <span className="button-arrow">↓</span></a>
            <a className="button button-secondary" href="#contact">Contact me <ArrowIcon /></a>
          </div>
          <div className="hero-socials" aria-label="Social profiles">
            <SocialLink href="https://github.com/Slava-S943" label="GitHub profile"><GithubIcon /></SocialLink>
            <SocialLink href="https://www.linkedin.com/in/yaroslav-sobchuk/" label="LinkedIn profile"><LinkedinIcon /></SocialLink>
            <span className="social-caption">Find me online</span>
          </div>
        </div>
        <div className="hero-aside" aria-label="Developer profile">
          <div className="hero-index"><span>PORTFOLIO</span><span>2026 / 01</span></div>
          <div className="hero-mark" aria-hidden="true"><span>S</span><span>S</span><i /></div>
          <div className="hero-note"><span className="note-line" />
            <p>Curious by nature.<br />Thoughtful by design.</p>
            <span className="note-coordinate">49°50′ N&nbsp; 24°01′ E</span>
          </div>
        </div>
        <a className="scroll-cue" href="#about"><span /> Scroll to explore</a>
      </section>

      <section className="section about-section" id="about" aria-labelledby="about-title">
        <div className="container about-grid">
          <div className="section-heading" data-reveal><p className="eyebrow">01 / A little about me</p><h2 id="about-title">Building with<br />curiosity <span>&amp;</span> care.</h2></div>
          <div className="about-copy">
            <p className="about-lead" data-reveal>I’m a junior full-stack developer who enjoys turning ideas into useful, considered web experiences.</p>
            <p data-reveal>I learn through practical projects, from building an individual application to contributing to a team. I care about the details that make an interface feel clear and dependable, and I value open communication throughout the process.</p>
            <p data-reveal>Before moving into development, I gained experience managing people. That perspective shaped how I collaborate, take responsibility, and keep a team moving toward a shared goal.</p>
          </div>
        </div>
      </section>

      <section className="section stack-section" id="stack" aria-labelledby="stack-title">
        <div className="container">
          <div className="section-heading stack-heading" data-reveal><p className="eyebrow">02 / Tools I work with</p><h2 id="stack-title">My tech<br />stack<span className="accent-dot">.</span></h2><p className="section-description">A practical toolkit I use to build and ship web projects.</p></div>
          <div className="stack-groups">{stackGroups.map((group, index) => <article className="stack-group" data-reveal key={group.label}><div className="stack-label"><span>0{index + 1}</span><h3>{group.label}</h3></div><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>
        </div>
      </section>

      <section className="section projects-section" id="projects" aria-labelledby="projects-title">
        <div className="container">
          <div className="projects-heading"><div className="section-heading" data-reveal><p className="eyebrow">03 / Selected work</p><h2 id="projects-title">Projects<span className="accent-dot">.</span></h2></div><p className="section-description" data-reveal>A mix of independent work and team contributions.<br />Every project taught me something worth carrying forward.</p></div>
          <div className="projects-list">{projects.map((project) => {
            const screenshot = getProjectScreenshot(project.screenshotFile);
            return <article className="project-card" data-reveal key={project.name}>
            <div className={`project-visual${screenshot ? " has-screenshot" : ""}`} aria-hidden={screenshot ? undefined : true}>
              {screenshot ? <Image className="project-screenshot" src={screenshot} alt={project.screenshotAlt} fill sizes="(max-width: 840px) 100vw, (max-width: 1120px) 50vw, 560px" unoptimized /> : <><span className="visual-number">{project.number}</span><span className="visual-name">{project.name}<i>.</i></span><span className="visual-category">{project.category}</span><span className="visual-orbit orbit-one" /><span className="visual-orbit orbit-two" /><span className="visual-square" /></>}
            </div>
            <div className="project-content"><div className="project-meta"><span className={project.kind === "Individual project" ? "project-kind individual" : "project-kind"}>{project.kind}</span><span className="project-category">{project.category}</span></div>
              <h3>{project.name}</h3><p className="project-description">{project.description}</p>
              {project.contribution && <p className="contribution"><span>My contribution</span>{project.contribution}</p>}
              <ul className="project-stack" aria-label={`${project.name} technologies`}>{project.stack.map((tech) => <li key={tech}>{tech}</li>)}</ul>
              <div className="project-links"><a href={project.demo} target="_blank" rel="noreferrer">Live demo <ArrowIcon /></a><a href={project.github} target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a></div>
            </div>
            </article>;
          })}</div>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="container contact-inner"><div data-reveal><p className="eyebrow">04 / Say hello</p><h2 id="contact-title">Have a project<br />in mind<span className="accent-dot">?</span></h2><p className="contact-copy">I’m always glad to connect, learn about new ideas, and talk about the web.</p></div><div className="contact-links" data-reveal><a className="contact-link" href="https://github.com/Slava-S943" target="_blank" rel="noreferrer"><span>GitHub</span><span className="contact-handle">@Slava-S943</span><ArrowIcon /></a><a className="contact-link" href="https://www.linkedin.com/in/yaroslav-sobchuk/" target="_blank" rel="noreferrer"><span>LinkedIn</span><span className="contact-handle">SlavaS</span><ArrowIcon /></a></div></div>
      </section>

      <footer className="site-footer"><div className="container footer-inner"><a className="brand-lockup" href="#home" aria-label="SlavaS home"><BrandMark className="brand-mark" /><span>Slava<span className="brand-name-accent">S</span></span></a><p>Designed &amp; built by SlavaS</p><span>© {new Date().getFullYear()}</span></div></footer>
    </main>
  );
}
