import { useEffect, useRef } from 'react';

const skills = [
  'Python', 'PyTorch', 'FastAPI', 'R', 'SQL', 'React', 'TypeScript', 'PostgreSQL',
  'C++', 'AWS', 'Docker', 'Git',
];

const experiences = [
  {
    company: 'Operation Safe Escape',
    role: 'Software Engineer',
    period: 'Sep 2025 - Dec 2025',
    description: [
      'Operation Safe Escape has helped 700+ survivors of domestic violence',
      'Built a Google Form-esque dynamic form builder using React and Django',
      'Built secure in-house messaging system with WebSockets + end-to-end encryption'
    ]
  },
  {
    company: 'Analyzing Bias in Emergency Room Triaging',
    role: 'Researcher',
    period: 'Jun 2021 - Dec 2022',
    description: [
      'Biases are a significant problem in the US medical system',
      'Trained accurate XGBoost models and neural networks to predict triage outcomes',
      'Implemented SHAP values for model explainability',
    ]
  },
];

const projects = [
  {
    title: 'LLMBDA',
    description: 'LLMBDA is a AI prompt engineering platform that helps users refine prompts and optimize tokens.',
    tech: ['Python', 'FastAPI', 'Supabase', 'React', 'TypeScript'],
    image: '/LLMBDA.png',
    github: '#',
    live: 'https://llmbda.org'
  },
  {
    title: 'PORTL 🌀',
    description: 'PORTL is a real-time file sharing web application that allows users to share files instantly, powered by WebSockets and WebRTC.',
    tech: ['Python', 'FastAPI', 'React', 'TypeScript', 'WebSockets', 'WebRTC'],
    image: '/PORTL.png',
    github: 'https://github.com/Aayaan-Sahu/PORTL',
    live: 'https://aayaan-sahu.github.io/PORTL/'
  },
  // {
  //   title: 'Smart Home Automation',
  //   description: 'An IoT platform for managing smart home devices. Features voice control, scheduling, and energy optimization algorithms.',
  //   tech: ['React Native', 'Node.js', 'MQTT', 'AWS IoT'],
  //   image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop',
  //   github: '#',
  //   live: '#'
  // }
];

const contacts = [
  { icon: 'mail', label: 'Email', value: 'aasahu2@illinois.edu', href: 'mailto:aasahu2@illinois.edu' },
  { icon: 'github', label: 'GitHub', value: 'github.com/Aayaan-Sahu', href: 'https://github.com/Aayaan-Sahu' },
  { icon: 'linkedin', label: 'LinkedIn', value: 'linkedin.com/in/aayaan-sahu', href: 'https://www.linkedin.com/in/aayaan-sahu/' },
  { icon: 'instagram', label: 'Instagram', value: '@aayaan_sahu', href: 'https://www.instagram.com/aayaan_sahu/' }
];

// Simple icon components
const Icons = {
  mail: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  instagram: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        ry="5"
        strokeWidth={1.5}
      />
      <circle cx="12" cy="12" r="4" strokeWidth={1.5} />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  github: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  linkedin: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  twitter: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  arrow: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  ),
  mouse: () => (
    <svg className="w-6 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 32">
      <rect x="6" y="2" width="12" height="20" rx="6" strokeWidth={1.5} />
      <line x1="12" y1="7" x2="12" y2="11" strokeWidth={1.5} strokeLinecap="round" />
    </svg>
  ),
  menu: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  ),
  close: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
};

export default function App() {
  const sectionsRef = useRef([]);

  // Scroll reveal animation using Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('glass-up');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const sections = document.querySelectorAll('.reveal-section');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // Custom cursor effect
  useEffect(() => {
    // Check if device supports hover (not touch)
    const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    if (isTouch) return;

    // Create cursor elements
    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    document.body.appendChild(cursorDot);

    let mouseX = 0, mouseY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    };



    // Hover state for interactive elements
    const handleMouseEnter = () => {
      cursorDot.classList.add('cursor-hover');
    };

    const handleMouseLeave = () => {
      cursorDot.classList.remove('cursor-hover');
    };

    // Add listeners
    document.addEventListener('mousemove', handleMouseMove);

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .ice-chip, .glass-card, .glass-button, .nav-link');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      cursorDot.remove();
    };
  }, []);

  const scrollToSection = (id) => {
    // document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    const element = document.getElementById(id);
    if (!element) return;

    const targetPosition = element.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 200; // milliseconds - lower = faster
    let startTime = null;
    const animation = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3); // ease-out cubic

      window.scrollTo(0, startPosition + distance * easeProgress);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  return (
    <>
      {/* Ambient Background Orbs */}
      <div className="ambient-background">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      {/* Floating Island Navbar */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <nav className="glass-nav px-2 py-2 flex items-center gap-2">
          <span className="px-4 text-sm font-medium tracking-widest uppercase" style={{ fontFamily: 'var(--font-heading)' }}>
            AAYAAN SAHU
          </span>

          <div className="hidden md:flex items-center">
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <button onClick={() => scrollToSection('experience')} className="nav-link">Experience</button>
            <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
          </div>

          <a href="/Resume.pdf" target="_blank" className="glass-button ml-2">
            Resume
          </a>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-8 max-w-6xl mx-auto">
          <div className="pt-32 md:pt-0">
            <p className="label-uppercase animate-blur-fade animate-delay-1">
              Hello, I'm
            </p>

            <h1 className="heading-xl mt-4 animate-blur-fade animate-delay-2">
              Aayaan Sahu
            </h1>

            <h2 className="heading-lg text-secondary mt-4 animate-blur-fade animate-delay-3">
              CS + Economics @ UIUC
            </h2>

            <p className="max-w-xl text-lg text-secondary mt-6 leading-relaxed animate-blur-fade animate-delay-4">
              I love building. I'm currently interested in LLMs and machine learning.
            </p>

            <div className="flex flex-wrap gap-4 mt-10 animate-blur-fade animate-delay-5">
              <button
                onClick={() => scrollToSection('projects')}
                className="glass-button-primary glass-button"
              >
                View Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-link text-secondary px-4 py-2"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-pulse-soft text-secondary">
            <Icons.mouse />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section px-6 md:px-8 max-w-6xl mx-auto">
          <div className="reveal-section opacity-0">
            <p className="label-uppercase mb-4">About Me</p>
            <h2 className="heading-lg mb-12">Building the Future</h2>

            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              {/* Text Column */}
              <div className="space-y-6 text-secondary leading-relaxed">
                <p>
                  I'm a Computer Science and Economics student at the University of Illinois
                  Urbana-Champaign with a passion for creating impactful technology solutions.
                </p>
                <p>
                  My journey in tech started with building simple websites and has evolved into
                  developing full-stack applications, working with machine learning models, and
                  contributing to open-source projects.
                </p>
                <p>
                  When I'm not coding, you'll find me at the gym, hanging out with my friends, listening to music
                  or doing all of them at the same time.
                </p>
              </div>

              {/* Skills Column */}
              <div className="glass-panel p-8">
                <h3 className="heading-md mb-6">Skills & Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span key={skill} className="ice-chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section px-6 md:px-8 max-w-6xl mx-auto">
          <div className="reveal-section opacity-0 text-center mb-16">
            <p className="label-uppercase mb-4">Career</p>
            <h2 className="heading-lg">Experience</h2>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="reveal-section opacity-0 glass-card p-8"
              >
                <div className="grid md:grid-cols-[200px_1fr] gap-6">
                  <div>
                    <p className="text-secondary text-sm">{exp.period}</p>
                  </div>
                  <div>
                    <h3 className="heading-md">{exp.role}</h3>
                    <p className="text-lavender mt-1">{exp.company}</p>
                    <ul className="mt-4 space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-secondary">
                          <span className="glow-dot mt-2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section px-6 md:px-8 max-w-6xl mx-auto">
          <div className="reveal-section opacity-0 text-center mb-16">
            <p className="label-uppercase mb-4">Portfolio</p>
            <h2 className="heading-lg">Featured Projects</h2>
          </div>

          <div className="space-y-24">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`reveal-section opacity-0 grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''
                  }`}
              >
                {/* Image */}
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <div className="relative rounded-xl overflow-hidden border border-white/10">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 md:h-80 object-cover project-image"
                    />
                  </div>
                </div>

                {/* Description */}
                <div className={`glass-panel p-8 ${index % 2 === 1 ? 'md:col-start-1 md:-mr-16 relative z-10' : 'md:-ml-16 relative z-10'}`}>
                  <h3 className="heading-md">{project.title}</h3>
                  <p className="text-secondary mt-4 leading-relaxed">
                    {project.description}
                  </p>
                  <p className="text-sm text-secondary mt-4">
                    {project.tech.join(' • ')}
                  </p>
                  <div className="flex gap-4 mt-6">
                    {
                      project.github === '#' ? null : (
                        <a href={project.github} className="text-link flex items-center gap-2 text-sm" target="_blank">
                          <Icons.github /> Code
                        </a>
                      )
                    }
                    <a href={project.live} target='_blank' className="text-link flex items-center gap-2 text-sm">
                      <Icons.arrow /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section px-6 md:px-8 max-w-6xl mx-auto">
          <div className="reveal-section opacity-0 max-w-3xl mx-auto glass-panel p-12">
            <div className="text-center mb-12">
              <p className="label-uppercase mb-4">Get in Touch</p>
              <h2 className="heading-lg">Let's Connect</h2>
              <p className="text-secondary mt-4 max-w-md mx-auto">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {contacts.map((contact) => {
                const Icon = Icons[contact.icon];
                return (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card p-6 flex items-center justify-center md:justify-start gap-4 group"
                  >
                    <div className="text-secondary group-hover:text-lavender transition-colors">
                      <div className="w-8 h-8 md:w-5 md:h-5 [&>svg]:w-full [&>svg]:h-full">
                        <Icon />
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <p className="text-sm text-secondary">{contact.label}</p>
                      <p className="text-sm">{contact.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <a
              href="mailto:aasahu2@illinois.edu"
              className="gradient-button block w-full text-center"
            >
              Say Hello
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 text-center text-secondary text-sm">
          <p>Designed & Built by Aayaan Sahu</p>
          <p className="mt-2 text-xs opacity-50">© 2026</p>
        </footer>
      </main>
    </>
  );
}
