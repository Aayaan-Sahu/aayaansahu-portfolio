import { useState } from 'react';

const experiences = [
  {
    company: 'Operation Safe Escape',
    role: 'Software Engineer',
    period: 'Sep 2025 - Dec 2025',
    description: [
      'Operation Safe Escape has helped 700+ survivors of domestic violence',
      'Built a Google Form-esque dynamic form builder using React and Django',
      'Built secure in-house messaging system with WebSockets + end-to-end encryption',
    ],
  },
  {
    company: 'Analyzing Bias in Emergency Room Triaging',
    role: 'Researcher',
    period: 'Jun 2021 - Dec 2022',
    description: [
      'Biases are a significant problem in the US medical system',
      'Trained accurate XGBoost models and neural networks to predict triage outcomes',
      'Implemented SHAP values for model explainability',
    ],
  },
];

const projects = [
  {
    title: 'LLMBDA',
    description:
      'LLMBDA is a AI prompt engineering platform that helps users refine prompts and optimize tokens.',
    tech: ['Python', 'FastAPI', 'Supabase', 'React', 'TypeScript'],
    image: '/LLMBDA.png',
    github: '#',
    live: 'https://llmbda.org',
    badge: 'LIVE_STATUS // OK',
    accent: '#98c379',
  },
  {
    title: 'PORTL 🌀',
    description:
      'PORTL is a real-time file sharing web application that allows users to share files instantly, powered by WebSockets and WebRTC.',
    tech: ['Python', 'FastAPI', 'React', 'TypeScript', 'WebSockets', 'WebRTC'],
    image: '/PORTL.png',
    github: 'https://github.com/Aayaan-Sahu/PORTL',
    live: 'https://aayaan-sahu.github.io/PORTL/',
    badge: 'BETA_RELEASE',
    accent: '#c678dd',
  },
];

const contacts = [
  {
    icon: 'mail',
    label: 'PROTOCOL (EMAIL)',
    value: 'aasahu2@illinois.edu',
    href: 'mailto:aasahu2@illinois.edu',
  },
  {
    icon: 'github',
    label: 'REPOSITORY',
    value: 'github.com/Aayaan-Sahu',
    href: 'https://github.com/Aayaan-Sahu',
  },
  {
    icon: 'linkedin',
    label: 'NETWORK',
    value: 'linkedin.com/in/aayaan-sahu',
    href: 'https://www.linkedin.com/in/aayaan-sahu/',
  },
  {
    icon: 'instagram',
    label: 'SOCIAL',
    value: '@aayaan_sahu',
    href: 'https://www.instagram.com/aayaan_sahu/',
  },
];

const navItems = [
  { id: 'projects', label: 'PROJECTS' },
  { id: 'experience', label: 'EXPERIENCE' },
  // { id: 'tech', label: 'TECH_STACK' },
  { id: 'contact', label: 'COMMAND_CENTER' },
];

const railItems = [
  { icon: '▣', label: 'OBJ_327' },
  { icon: '⟳', label: 'CLS_582' },
  { icon: '◈', label: 'SSL_019' },
  { icon: '◎', label: 'DL_239' },
];

const stats = [
  { value: '05+', label: 'years of exp' },
  { value: '500k+', label: 'lines of code' },
];

const panelClass =
  'border border-[#3e4451] bg-[#21252b]/95 shadow-[0_24px_70px_rgba(0,0,0,0.24)]';
const monoClass = "font-['JetBrains_Mono'] uppercase tracking-[0.22em]";
const displayClass = "font-['Space_Grotesk']";
const bodyClass = "font-['Inter']";

const Icons = {
  mail: () => (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4">
      <path
        d="M3.75 6.75h16.5a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75v-9a.75.75 0 0 1 .75-.75Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="m3.5 7.5 7.78 5.2a1.3 1.3 0 0 0 1.44 0l7.78-5.2"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  ),
  github: () => (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
      <path d="M12 1.5a10.5 10.5 0 0 0-3.32 20.46c.53.1.72-.23.72-.5v-1.94c-2.94.64-3.56-1.24-3.56-1.24-.48-1.2-1.17-1.52-1.17-1.52-.95-.65.07-.63.07-.63 1.06.07 1.62 1.09 1.62 1.09.93 1.6 2.45 1.14 3.05.87.09-.68.36-1.14.65-1.4-2.35-.27-4.82-1.17-4.82-5.24 0-1.16.4-2.1 1.08-2.85-.1-.27-.47-1.36.1-2.83 0 0 .88-.28 2.89 1.08a9.9 9.9 0 0 1 5.26 0c2-1.36 2.88-1.08 2.88-1.08.58 1.47.2 2.56.1 2.83.68.75 1.08 1.69 1.08 2.85 0 4.08-2.48 4.97-4.85 5.23.38.33.72.98.72 1.98v2.93c0 .28.2.61.73.5A10.5 10.5 0 0 0 12 1.5Z" />
    </svg>
  ),
  linkedin: () => (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
      <path d="M5.4 8.63A1.73 1.73 0 1 0 5.4 5.17a1.73 1.73 0 0 0 0 3.46ZM3.97 9.95h2.86v9.08H3.97V9.95Zm4.65 0h2.74v1.24h.04c.38-.72 1.31-1.48 2.7-1.48 2.89 0 3.43 1.9 3.43 4.37v4.95h-2.86v-4.39c0-1.05-.02-2.4-1.46-2.4-1.47 0-1.7 1.15-1.7 2.33v4.46H8.62V9.95Z" />
    </svg>
  ),
  instagram: () => (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4">
      <rect
        x="3.25"
        y="3.25"
        width="17.5"
        height="17.5"
        rx="5.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="12" r="3.75" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" />
    </svg>
  ),
  external: () => (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4">
      <path
        d="M13.5 4.5h6v6m-1.5-4.5-9.75 9.75"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M10.5 6H6.75A2.25 2.25 0 0 0 4.5 8.25v9A2.25 2.25 0 0 0 6.75 19.5h9A2.25 2.25 0 0 0 18 17.25V13.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  ),
  code: () => (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4">
      <path
        d="m8.25 8.25-4.5 3.75 4.5 3.75m7.5-7.5 4.5 3.75-4.5 3.75M13.5 5.25 10.5 18.75"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  ),
  menu: () => (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5">
      <path
        d="M4.5 6.75h15m-15 5.25h15m-15 5.25h15"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  ),
  close: () => (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5">
      <path
        d="m6.75 6.75 10.5 10.5m0-10.5-10.5 10.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  ),
  filter: () => (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4">
      <path
        d="M4.5 6h15m-12 6h9m-6 6h3"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  ),
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <div
      className={`relative min-h-screen overflow-x-hidden bg-[#282c34] text-[#abb2bf] ${bodyClass}`}
    >
      <div className="pointer-events-none fixed inset-0 bg-[#282c34]" />
      <div className="pointer-events-none fixed inset-0 opacity-40 [background-image:radial-gradient(circle,rgba(92,99,112,0.45)_1px,transparent_1px)] [background-size:18px_18px]" />

      <aside
        className={`fixed left-0 top-0 z-40 hidden h-screen w-[62px] flex-col items-center border-r border-[#3e4451] bg-[#21252b] px-2 py-4 lg:flex`}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="grid size-8 place-items-center border border-[#61afef]/30 bg-[#61afef]/10 text-[9px] text-[#61afef]">
            AS
          </div>
          <div className={`text-[6px] text-[#5c6370] ${monoClass}`}>operator</div>
        </div>

        <div className="mt-8 flex flex-1 flex-col items-center gap-5">
          {railItems.map((item, index) => (
            <div className="flex flex-col items-center gap-1" key={item.label}>
              <div className="grid size-9 place-items-center border border-[#3e4451] bg-[#2c313a] text-[10px] text-[#61afef]">
                {index === 0 ? (
                  <div className="grid size-4 place-items-center border border-[#61afef] text-[7px]">
                    {item.icon}
                  </div>
                ) : (
                  item.icon
                )}
              </div>
              <div className={`text-[6px] text-[#5c6370] ${monoClass}`}>{item.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-auto flex flex-col items-center gap-3">
          <div className={`text-[6px] text-[#5c6370] ${monoClass}`}>active</div>
          <a
            href="mailto:aasahu2@illinois.edu"
            className="grid size-8 place-items-center rounded-full border border-[#3e4451] bg-[#2c313a] text-[#61afef] transition hover:border-[#61afef]/60 hover:text-[#8abcf2]"
          >
            <Icons.mail />
          </a>
        </div>
      </aside>

      <div className="relative z-10 lg:pl-[62px]">
        <header className="sticky top-0 z-30 border-b border-[#3e4451] bg-[#282c34]/90 backdrop-blur-xl">
          <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
            <a href="#top" className={`text-sm text-[#61afef] ${displayClass} font-bold tracking-[0.18em]`}>
              TERMINAL_01
            </a>

            <nav className="hidden items-center gap-6 md:flex">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={`${monoClass} border-b pb-1 text-[10px] transition ${
                    index === 0
                      ? 'border-[#61afef] text-[#61afef]'
                      : 'border-transparent text-[#5c6370] hover:text-[#61afef]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className={`hidden border border-[#61afef] bg-[#61afef] px-4 py-2 text-[10px] text-[#282c34] transition hover:bg-[#8abcf2] sm:inline-flex ${monoClass}`}
              >
                CONNECT
              </a>

              <button
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                className="grid size-10 place-items-center border border-[#3e4451] bg-[#21252b] text-[#abb2bf] md:hidden"
                aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <Icons.close /> : <Icons.menu />}
              </button>
            </div>
          </div>

          {menuOpen ? (
            <div className="border-t border-[#3e4451] bg-[#21252b] px-4 py-3 md:hidden">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left text-[10px] text-[#abb2bf] ${monoClass}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          ) : null}
        </header>

        <main>
          <section
            id="top"
            className="mx-auto flex min-h-[calc(100vh-68px)] max-w-[1280px] items-center px-4 pb-20 pt-14 sm:px-6 lg:px-8"
          >
            <div className="mx-auto max-w-[900px] text-center">
              <div
                className={`mx-auto inline-flex items-center border border-[#c678dd]/40 bg-[#c678dd]/8 px-3 py-1 text-[9px] text-[#c678dd] ${monoClass}`}
              >
                SYSTEM_STATUS: READY
              </div>

              <h1
                className={`mt-8 text-[clamp(3.4rem,10vw,6.4rem)] font-bold leading-[0.88] tracking-[-0.08em] text-[#d7dae0] ${displayClass}`}
              >
                Aayaan Sahu.
                <span className="block text-[#61afef]">CS + Economics</span>
                <span className="block text-[#d7dae0]">@ UIUC.</span>
              </h1>

              {/* <p className="mx-auto mt-6 max-w-[620px] text-sm leading-7 text-[#5c6370] sm:text-[15px]">
                Building with LLMs, machine learning, and full-stack systems. I care about making
                technical ideas real, useful, and shippable.
              </p> */}

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <button
                  type="button"
                  onClick={() => scrollToSection('projects')}
                  className={`inline-flex items-center justify-center border border-[#61afef] bg-[#61afef] px-6 py-3 text-[10px] text-[#282c34] transition hover:bg-[#8abcf2] ${monoClass}`}
                >
                  EXPLORE_MY_WORK +
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('contact')}
                  className={`inline-flex items-center justify-center border border-[#3e4451] bg-transparent px-6 py-3 text-[10px] text-[#d7dae0] transition hover:border-[#61afef]/60 hover:text-[#61afef] ${monoClass}`}
                >
                  EXECUTE_CONTACT
                </button>
              </div>
            </div>
          </section>

          {/* <section className="border-t border-[#3e4451] bg-[#2c313a]/40" id="about">
            <div className="mx-auto max-w-[1280px] px-4 py-10 sm:px-6 lg:px-8">
              <div className="grid gap-8 lg:grid-cols-[minmax(320px,1fr)_minmax(0,1.2fr)] lg:items-start">
                <div className={`p-3 ${panelClass}`}>
                  <div className="relative min-h-[360px] border border-[#3e4451] bg-[#0f1115] p-4">
                    <div className={`absolute left-4 top-4 text-[8px] text-[#98c379] ${monoClass}`}>
                      05: DEVICE_LINKED
                    </div>
                    <div
                      className={`flex min-h-[320px] items-center justify-center text-[clamp(4.5rem,12vw,8rem)] font-medium tracking-[-0.12em] text-[#d7dae0]/70 ${displayClass}`}
                    >
                      AS
                    </div>
                    <div
                      className={`absolute bottom-4 left-4 border border-[#3e4451] bg-[#21252b]/90 px-3 py-2 text-[8px] text-[#abb2bf] ${monoClass}`}
                    >
                      OS: DRIVE_LAUNCH
                      <br />
                      KERNEL: 2.4.4
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <div className={`text-[10px] text-[#c678dd] ${monoClass}`}>__ ABOUT_ME</div>
                  <h2
                    className={`mt-4 max-w-[520px] text-3xl font-bold leading-tight text-[#d7dae0] sm:text-4xl ${displayClass}`}
                  >
                    Just a laptop, Wi-Fi, and an unhealthy urge to ship stuff.
                  </h2>

                  <div className="mt-6 max-w-[560px] space-y-4 text-sm leading-7 text-[#5c6370]">
                    <p>
                      I&apos;m a Computer Science and Economics student at the University of Illinois
                      Urbana-Champaign with a passion for creating impactful technology solutions.
                    </p>
                    <p>
                      My journey in tech started with building simple websites and has evolved into
                      developing full-stack applications, working with machine learning models, and
                      contributing to open-source projects.
                    </p>
                    <p>
                      When I&apos;m not coding, you&apos;ll find me at the gym, hanging out with my
                      friends, listening to music, or doing all of them at the same time.
                    </p>
                  </div>

                  <div className="mt-10 grid gap-8 sm:grid-cols-2">
                    {stats.map((stat) => (
                      <div key={stat.label}>
                        <div className={`text-3xl font-bold text-[#61afef] ${displayClass}`}>
                          {stat.value}
                        </div>
                        <div className={`mt-1 text-[8px] text-[#5c6370] ${monoClass}`}>
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section> */}

          <section className="border-t border-[#3e4451]" id="projects">
            <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 lg:px-8">
              <div className="mb-8 flex items-end justify-between gap-4">
                <div>
                  <div className={`text-[10px] text-[#61afef] ${monoClass}`}>SELECTED_PROJECTS</div>
                  <h2 className={`mt-3 text-4xl font-bold tracking-[-0.06em] text-[#d7dae0] ${displayClass}`}>
                    PROJECTS
                  </h2>
                </div>

                <div className="grid size-10 place-items-center border border-[#3e4451] bg-[#21252b] text-[#abb2bf]">
                  <Icons.filter />
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                {projects.map((project) => (
                  <article key={project.title} className={`group hover-pop-card overflow-hidden ${panelClass}`}>
                    <div className="relative h-[300px] overflow-hidden border-b border-[#3e4451] bg-[#1b1d23]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover grayscale transition duration-300 group-hover:grayscale-0 group-focus-within:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#21252b] via-[#21252b]/30 to-transparent" />
                      {/* <div
                        className={`absolute right-4 top-4 border px-2 py-1 text-[8px] ${monoClass}`}
                        style={{
                          borderColor: `${project.accent}55`,
                          backgroundColor: `${project.accent}12`,
                          color: project.accent,
                        }}
                      >
                        {project.badge}
                      </div> */}
                    </div>

                    <div className="p-6">
                      <h3 className={`text-[1.7rem] font-bold tracking-[-0.05em] text-[#d7dae0] ${displayClass}`}>
                        {project.title}
                      </h3>
                      <p className="mt-3 max-w-[520px] text-sm leading-7 text-[#5c6370]">
                        {project.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.tech.map((item) => (
                          <span
                            key={`${project.title}-${item}`}
                            className={`border border-[#3e4451] bg-[#2c313a] px-2 py-1 text-[8px] text-[#61afef] ${monoClass}`}
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                        {project.github === '#' ? (
                          <div className={`text-[9px] text-[#5c6370] ${monoClass}`}>PRIVATE_REPO</div>
                        ) : (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className={`inline-flex items-center gap-2 text-[9px] text-[#abb2bf] transition hover:text-[#61afef] ${monoClass}`}
                          >
                            <Icons.code />
                            REPO_ACCESS
                          </a>
                        )}

                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex size-9 items-center justify-center border border-[#3e4451] bg-[#21252b] text-[#61afef] transition hover:border-[#61afef]/60 hover:bg-[#61afef]/10"
                        >
                          <Icons.external />
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="border-t border-[#3e4451]" id="experience">
            <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 lg:px-8">
              <div className="mb-8">
                <div className={`text-[10px] text-[#c678dd] ${monoClass}`}>CAREER_HISTORY</div>
                <h2 className={`mt-3 text-4xl font-bold tracking-[-0.06em] text-[#d7dae0] ${displayClass}`}>
                  DEPLOYMENT_HISTORY
                </h2>
              </div>

              <div className="space-y-4">
                {experiences.map((experience) => (
                  <article
                    key={experience.company}
                    className={`grid gap-6 p-5 md:grid-cols-[180px_minmax(0,1fr)] ${panelClass}`}
                  >
                    <div>
                      <div className={`text-[9px] text-[#61afef] ${monoClass}`}>TIME_WINDOW</div>
                      <div className={`mt-3 text-xs text-[#abb2bf] ${monoClass}`}>{experience.period}</div>
                    </div>

                    <div>
                      <h3 className={`text-[1.8rem] font-bold tracking-[-0.05em] text-[#d7dae0] ${displayClass}`}>
                        {experience.role}
                      </h3>
                      <p className="mt-1 text-sm text-[#61afef]">{experience.company}</p>

                      <ul className="mt-5 space-y-3 text-sm leading-7 text-[#5c6370]">
                        {experience.description.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-[11px] size-1.5 shrink-0 rounded-full bg-[#98c379]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="border-t border-[#3e4451] bg-[#2c313a]/35" id="contact">
            <div className="mx-auto max-w-[1280px] px-4 py-14 sm:px-6 lg:px-8">
              <div className={`text-[10px] text-[#c678dd] ${monoClass}`}>DIRECT_TRANSMISSION</div>
              <h2 className={`mt-4 text-4xl font-bold tracking-[-0.06em] text-[#d7dae0] ${displayClass}`}>
                INIT_CONNECTION
              </h2>

              <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
                <div>
                  <div className="grid gap-8 md:grid-cols-2">
                    <div className="border-b border-[#3e4451] pb-4">
                      <div className={`text-[8px] text-[#5c6370] ${monoClass}`}>IDENTIFICATION (NAME)</div>
                      <div className="mt-3 text-sm text-[#abb2bf]">Aayaan Sahu</div>
                    </div>
                    <div className="border-b border-[#3e4451] pb-4">
                      <div className={`text-[8px] text-[#5c6370] ${monoClass}`}>PROTOCOL (EMAIL)</div>
                      <div className="mt-3 text-sm text-[#abb2bf]">aasahu2@illinois.edu</div>
                    </div>
                  </div>

                  <div className="mt-10 border-b border-[#3e4451] pb-4">
                    <div className={`text-[8px] text-[#5c6370] ${monoClass}`}>INPUT_MESSAGE</div>
                    <div className="mt-3 text-sm text-[#5c6370]">
                      Enter_command_or_query_here...
                    </div>
                  </div>

                  <a
                    href="mailto:aasahu2@illinois.edu"
                    className={`mt-10 inline-flex items-center gap-2 text-[10px] text-[#61afef] transition hover:text-[#8abcf2] ${monoClass}`}
                  >
                    EXECUTE_TRANSMISSION
                    <span className="text-base normal-case">→</span>
                  </a>

                  <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                    {contacts.map((contact) => {
                      const Icon = Icons[contact.icon];

                      return (
                        <a
                          key={contact.label}
                          href={contact.href}
                          target="_blank"
                          rel="noreferrer"
                          className="group border-b border-[#3e4451] pb-4"
                        >
                          <div className="flex items-center gap-2 text-[#61afef]">
                            <Icon />
                            <span className={`text-[8px] ${monoClass}`}>{contact.label}</span>
                          </div>
                          <div className="mt-3 text-sm text-[#abb2bf] transition group-hover:text-[#61afef]">
                            {contact.value}
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>

                <div className={`group hover-pop-card flex flex-col justify-between gap-6 p-6 ${panelClass}`}>
                  <div>
                    <div className={`text-[10px] text-[#61afef] ${monoClass}`}>SYSTEM_READY</div>
                    <h3 className={`mt-4 text-2xl font-bold text-[#d7dae0] ${displayClass}`}>
                      Open to building, research, and interesting technical problems.
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[#5c6370]">
                      Reach out if you want to talk about AI, machine learning, full-stack product
                      work, or opportunities where shipping matters.
                    </p>
                  </div>

                  <a
                    href="/Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex w-full items-center justify-center border border-[#61afef] bg-[#61afef] px-4 py-3 text-[10px] text-[#282c34] transition hover:bg-[#8abcf2] ${monoClass}`}
                  >
                    OPEN_RESUME
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-[#3e4451] bg-[#21252b]">
          <div
            className={`mx-auto flex max-w-[1280px] flex-col gap-2 px-4 py-6 text-[8px] text-[#5c6370] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8 ${monoClass}`}
          >
            <span>TERMINAL_01</span>
            <span>AAYAAN SAHU // FULL_SYSTEM_OPERATIONAL</span>
            <span>2026</span>
          </div>
        </footer>
      </div>

      <a
        href="mailto:aasahu2@illinois.edu"
        className="fixed bottom-5 right-5 z-20 grid size-12 place-items-center rounded-md border border-[#61afef] bg-[#61afef] text-[#282c34] shadow-[0_16px_40px_rgba(97,175,239,0.25)] transition hover:bg-[#8abcf2]"
      >
        <Icons.mail />
      </a>
    </div>
  );
}

export default App;
