
import "./App.css";

function App() {
  return (
    <div className="container">
      {/* Navigation */}
      <nav>
        <div className="logo">PRAISE.</div>

        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="hero" id="home">
        <span>WELCOME TO MY PORTFOLIO</span>

        <h1>Hi, I'm Praise 👋</h1>

        <h2>Full-Stack Developer</h2>

        <p>
          I build modern, responsive and user-friendly
          web applications using modern technologies.
          I enjoy turning ideas into real digital products.
        </p>

        <div className="buttons">
          <a className="button" href="#projects">
            View My Work
          </a>

          <a className="button secondary" href="#contact">
            Contact Me
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about">
        <h2>About Me</h2>
        <p>
          I'm an intermediate Full-Stack Developer
          passionate about building websites and
          applications that solve real problems.
        </p>
      </section>

      {/* Skills */}

      <section id="skills">
        <h2>My Skills</h2>

        <div className="card-grid">
          <div className="info-card">
            <h3>Frontend</h3>
            <p>HTML, CSS, JavaScript, React</p>
          </div>

          <div className="info-card">
            <h3>Backend</h3>
            <p>Node.js, Express.js, REST APIs</p>
          </div>

          <div className="info-card">
            <h3>Tools</h3>
            <p>Git, GitHub, VS Code, npm</p>
          </div>
        </div>
      </section>


      {/* Projects */}

      <section id="projects">
        <h2>My Projects</h2>

        <div className="card-grid">
          <div className="info-card">
            <h3>Personal Portfolio</h3>
            <p>A responsive website showcasing my skills and work.</p>
            <span>React • CSS</span>
          </div>

          <div className="info-card">
            <h3>Restaurant Website</h3>
            <p>A website concept for a restaurant with a modern design.</p>
            <span>HTML • CSS • JavaScript</span>
          </div>

          <div className="info-card">
            <h3>Inventory Management</h3>
            <p>A planned app for managing products and stock.</p>
            <span>React • Node.js</span>
          </div>
        </div>
      </section>


      {/* Contact */}


      <section id="contact">
        <h2>Let's Work Together</h2>

        <p>
          Have a project in mind? Let's discuss how I can
          help bring your ideas to life.
        </p>

        <div className="contact-links">
          <a href="mailto:joysolo455@gmail.com">
            Email Me
          </a>

          <a
            href="https://github.com/joy555-max"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </section>


    </div>
  );
}

export default App;
