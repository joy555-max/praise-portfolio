import { useState } from "react";
import "./App.css";

const projects = [
  {
    number: "01",
    name: "Personal Portfolio",
    type: "WEB DESIGN",
    description:
      "A modern personal website designed to showcase skills, projects, and professional experience.",
    stack: ["React", "CSS", "JavaScript"],
    status: "Portfolio concept",
  },
  {
    number: "02",
    name: "Restaurant Website",
    type: "WEB DEVELOPMENT",
    description:
      "A stylish restaurant website concept with a clean menu layout and a smooth browsing experience.",
    stack: ["HTML", "CSS", "JavaScript"],
    status: "Planned project",
  },
  {
    number: "03",
    name: "Inventory Management",
    type: "FULL-STACK CONCEPT",
    description:
      "A proposed application for managing products, tracking stock, and organizing inventory records.",
    stack: ["React", "Node.js", "Express"],
    status: "Planned project",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-wrapper">
      <header className="navbar">
        <a className="logo" href="#home" onClick={closeMenu}>
          Praise<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Let's talk <span>↗</span>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="availability-dot"></span>
              OPEN TO OPPORTUNITIES
            </div>

            <p className="eyebrow">HELLO, I'M PRAISE</p>

            <h1>
              Building digital
              <br />
              experiences that
              <br />
              <span>make an impact.</span>
            </h1>

            <p className="hero-description">
              I'm a Full-Stack Developer passionate about creating
              beautiful, functional, and user-friendly web experiences.
              I turn ideas into digital products.
            </p>

            <div className="hero-buttons">
              <a className="primary-button" href="#projects">
                Explore my work <span>↗</span>
              </a>
              <a className="secondary-button" href="#contact">
                Let's connect
              </a>
            </div>

            <div className="hero-socials">
              <a href="https://github.com/joy555-max" target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <span className="social-divider"></span>
              <a href="mailto:joysolo455@gmail.com">Email ↗</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-glow"></div>
            <div className="code-card">
              <div className="code-top">
                <div className="window-dots">
                  <i></i><i></i><i></i>
                </div>
                <span>developer.js</span>
              </div>

              <div className="code-content">
                <p><span className="code-purple">const</span> developer = {"{"}</p>
                <p className="indent"><span className="code-blue">name</span>: <span className="code-green">"Praise"</span>,</p>
                <p className="indent"><span className="code-blue">role</span>: <span className="code-green">"Full-Stack Developer"</span>,</p>
                <p className="indent"><span className="code-blue">skills</span>: [</p>
                <p className="indent double-indent"><span className="code-green">"React"</span>,</p>
                <p className="indent double-indent"><span className="code-green">"JavaScript"</span>,</p>
                <p className="indent double-indent"><span className="code-green">"Node.js"</span></p>
                <p className="indent">],</p>
                <p className="indent"><span className="code-blue">creative</span>: <span className="code-orange">true</span></p>
                <p>{"};"}</p>
                <p className="code-comment">// Always building something better.</p>
              </div>
            </div>

            <div className="floating-tag tag-one">✦ Clean code</div>
            <div className="floating-tag tag-two">{"<"} Creative mind {"/>"}</div>
          </div>

          <div className="hero-bottom">
            <span>BASED IN NIGERIA</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </section>

        <section className="about section" id="about">
          <div className="section-heading">
            <span className="section-number">01 / ABOUT</span>
            <h2>A little about <span>me.</span></h2>
          </div>

          <div className="about-grid">
            <div className="about-intro">
              <p className="large-copy">
                I enjoy turning complex ideas into simple, beautiful,
                and useful digital experiences.
              </p>
            </div>

            <div className="about-details">
              <p>
                I'm Praise, a Full-Stack Developer focused on building
                modern websites and web applications. I work with
                frontend technologies and backend tools to create
                experiences that look good and work smoothly.
              </p>
              <p>
                I'm constantly learning, improving my craft, and
                exploring new ways to solve problems through code.
              </p>
              <a className="text-link" href="mailto:joysolo455@gmail.com">
                Get in touch <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="skills section" id="skills">
          <div className="section-heading">
            <span className="section-number">02 / SKILLS</span>
            <h2>My tools of <span>the trade.</span></h2>
            <p>The technologies I use to bring ideas to life.</p>
          </div>

          <div className="skills-grid">
            <article className="skill-card">
              <span className="skill-icon">01</span>
              <h3>Frontend</h3>
              <p>Creating clean, responsive, and interactive interfaces.</p>
              <div className="skill-tags">
                <span>HTML</span><span>CSS</span><span>JavaScript</span><span>React</span>
              </div>
            </article>

            <article className="skill-card">
              <span className="skill-icon">02</span>
              <h3>Backend</h3>
              <p>Building application logic and connecting services.</p>
              <div className="skill-tags">
                <span>Node.js</span><span>Express</span><span>REST APIs</span>
              </div>
            </article>

            <article className="skill-card">
              <span className="skill-icon">03</span>
              <h3>Tools</h3>
              <p>Tools that help me build, manage, and ship projects.</p>
              <div className="skill-tags">
                <span>Git</span><span>GitHub</span><span>VS Code</span><span>npm</span>
              </div>
            </article>
          </div>
        </section>

        <section className="projects section" id="projects">
          <div className="section-heading projects-heading">
            <div>
              <span className="section-number">03 / SELECTED WORK</span>
              <h2>Ideas into <span>experiences.</span></h2>
            </div>
            <p>A few concepts I'm developing and exploring.</p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-preview">
                  <span className="project-preview-number">{project.number}</span>
                  <div className="preview-symbol">
                    {project.number === "01" ? "P." : project.number === "02" ? "R." : "I."}
                  </div>
                  <span className="preview-label">PRAISE / PROJECT</span>
                </div>

                <div className="project-info">
                  <div className="project-type">{project.type}</div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="skill-tags">
                    {project.stack.map((item) => <span key={item}>{item}</span>)}
                  </div>
                  <div className="project-status">{project.status}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact section" id="contact">
          <span className="section-number">04 / CONTACT</span>
          <p className="eyebrow">HAVE AN IDEA?</p>
          <h2>Let's build something <span>great.</span></h2>
          <p className="contact-description">
            Have a project, opportunity, or idea you'd like to discuss?
            I'd love to hear from you.
          </p>

          <a className="primary-button contact-button" href="mailto:joysolo455@gmail.com">
            Say hello <span>↗</span>
          </a>

          <div className="contact-footer">
            <a href="mailto:joysolo455@gmail.com">joysolo455@gmail.com</a>
            <a href="https://github.com/joy555-max" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="logo" href="#home">Praise<span>.</span></a>
        <p>Designed & built with care by Praise.</p>
        <span>© {new Date().getFullYear()} ALL RIGHTS RESERVED</span>
      </footer>
    </div>
  );
}

export default App;