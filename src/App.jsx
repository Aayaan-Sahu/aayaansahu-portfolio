import { LazyMotion, domAnimation, motion as Motion, useReducedMotion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

const experiences = [
  {
    company: 'Computer Vision Robotics Lab @ UIUC',
    role: 'Researcher',
    period: 'Feb 2026 - Present',
    tech: ['PyTorch', 'GAN', 'Diffusion', 'ResNet'],
    description: [
      'Researching concept editing in latent spaces of generative models',
      'Isolated concept vectors using TCAV, ACE, ICE and visualized with gradient optimization and MACO',
      'Modifying StyleGan2 architecture to enable controlled concept editing',
    ],
  },
  {
    company: 'Operation Safe Escape',
    role: 'Software Engineer',
    period: 'Sep 2025 - Dec 2025',
    tech: ['React', 'Django', 'WebSockets', 'Encryption'],
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
    tech: ['Python', 'XGBoost', 'Neural Networks', 'SHAP'],
    description: [
      'Biases are a significant problem in the US medical system',
      'Trained accurate XGBoost models and neural networks to predict triage outcomes',
      'Implemented SHAP values for model explainability',
    ],
  },
];

const projects = [
  {
    title: 'LLMBDA λ',
    description:
      'Prompt engineering that saves money',
    tech: ['Python', 'FastAPI', 'Supabase', 'React', 'TypeScript'],
    image: '/LLMBDA.png',
    github: '#',
    live: 'https://llmbda.org',
    badge: 'LIVE_STATUS // OK',
    accent: '#98c379',
  },
  {
    title: 'PRISM 🔊',
    description:
      'Real-time filtering of voices for deaf and hard-of-hearing individuals',
    tech: ['Python', 'Modal', 'Signal_Processing'],
    image: '/LLMBDA.png',
    github: 'https://github.com/Aayaan-Sahu/PRISM',
    live: '#',
    badge: 'LIVE_STATUS // OK',
    accent: '#98c379',
  },
  {
    title: 'kova 🤖',
    description:
      'Real-time scam call detection agent',
    tech: ['Python', 'FastAPI', 'LangGraph', 'TypeScript'],
    image: '/PORTL.png',
    github: 'https://github.com/Aayaan-Sahu/kova',
    live: '#',
    badge: 'BETA_RELEASE',
    accent: '#c678dd',
  },
  {
    title: 'PORTL 🌀',
    description:
      'Real-time file sharing powered by WebSockets and WebRTC.',
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
  { id: 'contact', label: 'CONTACT' },
];

const panelClass =
  'border border-[#3e4451] bg-[#21252b]/95 shadow-[0_24px_70px_rgba(0,0,0,0.24)]';
const monoClass = "font-['JetBrains_Mono'] uppercase tracking-[0.22em]";
const displayClass = "font-['Space_Grotesk']";
const readingClass = "font-['Inter']";
const bodyClass = "font-['JetBrains_Mono']";
const motionEase = [0.22, 1, 0.36, 1];
const dotSpacing = 18;
const dotRadius = 1;
const dotBaseColor = { red: 126, green: 134, blue: 150, alpha: 0.62 };
const dotHighlightColor = { red: 214, green: 222, blue: 238, alpha: 0.98 };
const dotInfluenceRadius = 160;
const dotHighlightRadius = 170;

const heroNameVariant = {
  hidden: { opacity: 0, y: 18, filter: 'blur(10px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.24, ease: motionEase, delay: 0.04 },
  },
};

const heroDetailVariant = {
  hidden: { opacity: 0, y: 14, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.22, ease: motionEase, delay: 0.16 },
  },
};

const heroNavVariant = {
  hidden: { opacity: 0, y: -12, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.22, ease: motionEase, delay: 0.28 },
  },
};

const heroActionsVariant = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: motionEase, delay: 0.24 },
  },
};

const sectionHeadingVariant = {
  hidden: { opacity: 0, y: 18, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.22, ease: motionEase },
  },
};

const rowContainerVariant = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.24, ease: motionEase, staggerChildren: 0.08 },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 18, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.22, ease: motionEase },
  },
};

function chunkItems(items, size) {
  const rows = [];
  for (let index = 0; index < items.length; index += size) {
    rows.push(items.slice(index, index + size));
  }
  return rows;
}

function smoothstep(value) {
  return value * value * (3 - 2 * value);
}

function mixDotColor(amount) {
  const intensity = Math.max(0, Math.min(1, amount));
  const red = Math.round(dotBaseColor.red + (dotHighlightColor.red - dotBaseColor.red) * intensity);
  const green = Math.round(
    dotBaseColor.green + (dotHighlightColor.green - dotBaseColor.green) * intensity,
  );
  const blue = Math.round(dotBaseColor.blue + (dotHighlightColor.blue - dotBaseColor.blue) * intensity);
  const alpha = dotBaseColor.alpha + (dotHighlightColor.alpha - dotBaseColor.alpha) * intensity;

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

function hash2D(x, y, seed) {
  const value = Math.sin(x * 127.1 + y * 311.7 + seed * 74.7) * 43758.5453123;
  return value - Math.floor(value);
}

function valueNoise2D(x, y, seed) {
  const x0 = Math.floor(x);
  const y0 = Math.floor(y);
  const tx = x - x0;
  const ty = y - y0;
  const u = smoothstep(tx);
  const v = smoothstep(ty);
  const a = hash2D(x0, y0, seed);
  const b = hash2D(x0 + 1, y0, seed);
  const c = hash2D(x0, y0 + 1, seed);
  const d = hash2D(x0 + 1, y0 + 1, seed);
  const top = a + (b - a) * u;
  const bottom = c + (d - c) * u;

  return top + (bottom - top) * v;
}

function layeredNoise2D(x, y, seed) {
  let amplitude = 0.6;
  let frequency = 1;
  let total = 0;
  let amplitudeSum = 0;

  for (let octave = 0; octave < 3; octave += 1) {
    total += valueNoise2D(x * frequency, y * frequency, seed + octave * 17.13) * amplitude;
    amplitudeSum += amplitude;
    amplitude *= 0.5;
    frequency *= 2;
  }

  return total / amplitudeSum;
}

function DotBackground({ shouldReduceMotion }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return undefined;
    }

    const context = canvas.getContext('2d');
    if (!context) {
      return undefined;
    }

    const pointer = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      active: false,
    };

    let width = window.innerWidth;
    let height = window.innerHeight;
    let frameId = 0;
    let lastFrameTime = 0;

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(width * devicePixelRatio);
      canvas.height = Math.round(height * devicePixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    };

    const handlePointerMove = (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
    };

    const handlePointerLeave = () => {
      pointer.active = false;
    };

    const drawDots = (time) => {
      context.clearRect(0, 0, width, height);
      context.fillStyle = mixDotColor(0);

      const columns = Math.ceil(width / dotSpacing) + 1;
      const rows = Math.ceil(height / dotSpacing) + 1;
      const timeOffset = time * 0.00008;

      if (shouldReduceMotion) {
        for (let row = 0; row < rows; row += 1) {
          const baseY = row * dotSpacing;
          for (let column = 0; column < columns; column += 1) {
            const baseX = column * dotSpacing;

            context.beginPath();
            context.arc(baseX, baseY, dotRadius, 0, Math.PI * 2);
            context.fill();
          }
        }
        return;
      }

      for (let row = 0; row < rows; row += 1) {
        const baseY = row * dotSpacing;
        for (let column = 0; column < columns; column += 1) {
          const baseX = column * dotSpacing;
          const noiseX =
            layeredNoise2D(baseX * 0.018 + timeOffset, baseY * 0.018 + timeOffset * 0.55, 11) -
            0.5;
          const noiseY =
            layeredNoise2D(baseX * 0.018 - timeOffset * 0.45, baseY * 0.018 + timeOffset, 29) -
            0.5;

          let offsetX = noiseX * 3.2;
          let offsetY = noiseY * 3.2;
          let highlightStrength = 0;

          if (pointer.active) {
            const deltaX = baseX - pointer.x;
            const deltaY = baseY - pointer.y;
            const distance = Math.hypot(deltaX, deltaY);

            if (distance < dotInfluenceRadius) {
              const distanceRatio = 1 - distance / dotInfluenceRadius;
              const influence = distanceRatio * distanceRatio * 3;
              const safeDistance = Math.max(distance, 1);

              offsetX += (deltaX / safeDistance) * influence;
              offsetY += (deltaY / safeDistance) * influence;
            }

            if (distance < dotHighlightRadius) {
              const highlightRatio = 1 - distance / dotHighlightRadius;
              highlightStrength = smoothstep(highlightRatio) * 0.9;
            }
          }

          context.fillStyle = mixDotColor(highlightStrength);
          context.beginPath();
          context.arc(baseX + offsetX, baseY + offsetY, dotRadius, 0, Math.PI * 2);
          context.fill();
        }
      }
    };

    const animate = (time) => {
      if (shouldReduceMotion) {
        drawDots(time);
        return;
      }

      if (time - lastFrameTime >= 1000 / 30) {
        lastFrameTime = time;
        drawDots(time);
      }

      frameId = window.requestAnimationFrame(animate);
    };

    resizeCanvas();
    drawDots(0);

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerleave', handlePointerLeave);

    if (!shouldReduceMotion) {
      frameId = window.requestAnimationFrame(animate);
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
      window.cancelAnimationFrame(frameId);
    };
  }, [shouldReduceMotion]);

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 opacity-50" />;
}

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
  const shouldReduceMotion = useReducedMotion();
  const projectsByRow = chunkItems(projects, 2);

  const heroMotionProps = shouldReduceMotion
    ? {}
    : {
        initial: 'hidden',
        animate: 'show',
      };

  const scrollMotionProps = shouldReduceMotion
    ? {}
    : {
        initial: 'hidden',
        whileInView: 'show',
        viewport: { once: true, amount: 0.25 },
      };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <LazyMotion features={domAnimation}>
      <div
        className={`relative min-h-screen overflow-x-hidden bg-[#282c34] text-[#abb2bf] ${bodyClass}`}
      >
        <div className="pointer-events-none fixed inset-0 bg-[#282c34]" />
        <DotBackground shouldReduceMotion={shouldReduceMotion} />

        <div className="relative z-10">
        <header className="sticky top-0 z-30 border-b border-[#3e4451] bg-[#282c34]/90 backdrop-blur-xl">
          <div className="mx-auto flex max-w-[1280px] items-center justify-end gap-4 px-4 py-4 sm:px-6 md:grid md:grid-cols-[1fr_auto_1fr] md:justify-normal lg:px-8">
            <div className="hidden md:block" />

            <Motion.nav
              className="hidden items-center justify-center gap-6 md:flex"
              variants={heroNavVariant}
              {...heroMotionProps}
            >
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
            </Motion.nav>

            <Motion.div
              className="flex items-center justify-end gap-3"
              variants={heroNavVariant}
              {...heroMotionProps}
            >
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className={`hidden border border-[#61afef] bg-[#61afef] px-4 py-2 text-[10px] text-[#282c34] transition hover:bg-[#8abcf2] sm:inline-flex ${monoClass}`}
              >
                RESUME
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
            </Motion.div>
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
              <Motion.div
                className={`mx-auto inline-flex items-center border border-[#c678dd]/40 bg-[#c678dd]/8 px-3 py-1 text-[9px] text-[#c678dd] ${monoClass}`}
                variants={heroDetailVariant}
                {...heroMotionProps}
              >
                GRADUATING: 2028
              </Motion.div>

              <Motion.h1
                className={`mt-8 text-[clamp(3.4rem,10vw,6.4rem)] font-bold leading-[0.88] tracking-[-0.08em] text-[#d7dae0] ${displayClass}`}
                variants={heroNameVariant}
                {...heroMotionProps}
              >
                <Motion.span className="block" variants={heroNameVariant} {...heroMotionProps}>
                  Aayaan Sahu.
                </Motion.span>
                <Motion.span
                  className="block text-[#61afef]"
                  variants={heroDetailVariant}
                  {...heroMotionProps}
                >
                  CS + Economics
                </Motion.span>
                <Motion.span
                  className="block text-[#d7dae0]"
                  variants={heroDetailVariant}
                  {...heroMotionProps}
                >
                  @ UIUC.
                </Motion.span>
              </Motion.h1>

              {/* <p className="mx-auto mt-6 max-w-[620px] text-sm leading-7 text-[#5c6370] sm:text-[15px]">
                Building with LLMs, machine learning, and full-stack systems. I care about making
                technical ideas real, useful, and shippable.
              </p> */}

              <Motion.div
                className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
                variants={heroActionsVariant}
                {...heroMotionProps}
              >
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
              </Motion.div>
            </div>
          </section>

          <section className="border-t border-[#3e4451]" id="projects">
            <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 lg:px-8">
              <Motion.div
                className="mb-8 flex items-end justify-between gap-4"
                variants={sectionHeadingVariant}
                {...scrollMotionProps}
              >
                <div>
                  <div className={`text-[10px] text-[#61afef] ${monoClass}`}>SELECTED_PROJECTS</div>
                  <h2 className="mt-3 text-4xl font-bold tracking-[-0.06em] text-[#d7dae0]">
                    PROJECTS
                  </h2>
                </div>

              </Motion.div>

              <div className="space-y-6">
                {projectsByRow.map((row, rowIndex) => (
                  <Motion.div
                    key={`project-row-${rowIndex}`}
                    className="grid gap-6 lg:grid-cols-2"
                    variants={rowContainerVariant}
                    {...scrollMotionProps}
                    transition={
                      shouldReduceMotion
                        ? undefined
                        : { duration: 0.24, ease: motionEase, delay: rowIndex * 0.06, staggerChildren: 0.08 }
                    }
                  >
                    {row.map((project) => (
                      <Motion.article
                        key={project.title}
                        variants={itemVariant}
                        className={`group hover-pop-card flex h-full flex-col overflow-hidden ${panelClass}`}
                      >
                        <div className="relative h-[300px] overflow-hidden border-b border-[#3e4451] bg-[#1b1d23]">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="h-full w-full object-cover grayscale transition duration-300 group-hover:grayscale-0 group-focus-within:grayscale-0"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#21252b] via-[#21252b]/30 to-transparent" />
                        </div>

                        <div className="flex flex-1 flex-col p-6">
                          <h3 className="text-[1.7rem] font-bold tracking-[-0.05em] text-[#d7dae0]">
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

                          <div className="mt-auto flex items-center justify-between gap-4 pt-6">
                            {project.github === '#' ? (
                              <div
                                className={`inline-flex min-h-9 items-center gap-2 text-[9px] text-[#5c6370] ${monoClass}`}
                              >
                                <span className="size-4" aria-hidden="true" />
                                PRIVATE_REPO
                              </div>
                            ) : (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className={`inline-flex min-h-9 items-center gap-2 text-[9px] text-[#abb2bf] transition hover:text-[#61afef] ${monoClass}`}
                              >
                                <Icons.code />
                                REPO_ACCESS
                              </a>
                            )}

                            {project.live === '#' ? <span /> : (
                              <a
                                href={project.live}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex size-9 items-center justify-center border border-[#3e4451] bg-[#21252b] text-[#61afef] transition hover:border-[#61afef]/60 hover:bg-[#61afef]/10"
                              >
                                <Icons.external />
                              </a>
                            )}
                          </div>
                        </div>
                      </Motion.article>
                    ))}
                  </Motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="border-t border-[#3e4451]" id="experience">
            <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 lg:px-8">
              <Motion.div className="mb-8" variants={sectionHeadingVariant} {...scrollMotionProps}>
                <div className={`text-[10px] text-[#c678dd] ${monoClass}`}>DEPLOYMENT_HISTORY</div>
                <h2 className="mt-3 text-4xl font-bold tracking-[-0.06em] text-[#d7dae0]">
                  EXPERIENCE
                </h2>
              </Motion.div>

              <Motion.div
                className="space-y-4"
                variants={rowContainerVariant}
                {...scrollMotionProps}
                transition={
                  shouldReduceMotion
                    ? undefined
                    : { duration: 0.24, ease: motionEase, staggerChildren: 0.1, delayChildren: 0.04 }
                }
              >
                {experiences.map((experience) => (
                  <Motion.article
                    key={experience.company}
                    variants={itemVariant}
                    className={`grid gap-7 p-6 md:grid-cols-[240px_minmax(0,1fr)] md:gap-8 lg:p-7 ${panelClass}`}
                  >
                    <div className="flex flex-col items-start">
                      <div className={`text-[9px] text-[#61afef] ${monoClass}`}>TIME_WINDOW</div>
                      <div className={`mt-4 text-xs leading-7 text-[#abb2bf] ${monoClass}`}>
                        {experience.period}
                      </div>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {experience.tech.map((item) => (
                          <span
                            key={`${experience.company}-${item}`}
                            className={`border border-[#3e4451] bg-[#2c313a] px-2 py-1 text-[8px] text-[#61afef] ${monoClass}`}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="md:border-l md:border-[#3e4451] md:pl-8">
                      <h3 className="text-[1.7rem] font-bold leading-none tracking-[-0.05em] text-[#d7dae0] sm:text-[1.85rem]">
                        {experience.role}
                      </h3>
                      <p className="mt-3 text-sm text-[#61afef]">{experience.company}</p>

                      <ul className="mt-6 space-y-4 text-sm leading-7 text-[#5c6370]">
                        {experience.description.map((item) => (
                          <li key={item} className="flex gap-4">
                            <span className="mt-[11px] size-1.5 shrink-0 rounded-full bg-[#98c379]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Motion.article>
                ))}
              </Motion.div>
            </div>
          </section>

          <section className="border-t border-[#3e4451] bg-[#2c313a]/35" id="contact">
            <div className="mx-auto max-w-[1280px] px-4 py-14 sm:px-6 lg:px-8">
              <div className={`text-[10px] text-[#c678dd] ${monoClass}`}>INIT_CONNECTION</div>
              <h2 className="mt-4 text-4xl font-bold tracking-[-0.06em] text-[#d7dae0]">
                CONTACT
              </h2>

              <div className="mt-10 grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-12">
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                    {contacts.map((contact) => {
                      const Icon = Icons[contact.icon];

                      return (
                        <a
                          key={contact.label}
                          href={contact.href}
                          target="_blank"
                          rel="noreferrer"
                          className="group flex min-h-[154px] flex-col items-start justify-between border border-[#3e4451] bg-[#21252b]/80 px-5 py-5 transition hover:border-[#61afef]/60 hover:bg-[#2c313a]"
                        >
                          <div className="flex items-center gap-3 text-[#61afef]">
                            <div className="grid size-11 place-items-center border border-[#61afef]/35 bg-[#61afef]/10 transition group-hover:border-[#61afef]/60 group-hover:bg-[#61afef]/15">
                              <div className="text-[#61afef] [&>svg]:size-6">
                                <Icon />
                              </div>
                            </div>
                            <span className={`text-[8px] ${monoClass}`}>{contact.label}</span>
                          </div>
                          <span className={`text-[9px] text-[#5c6370] transition group-hover:text-[#61afef] ${monoClass}`}>
                            OPEN_LINK
                          </span>
                        </a>
                      );
                    })}
                </div>

                <div className={`group hover-pop-card flex h-full flex-col justify-center gap-6 self-stretch p-6 lg:min-h-[240px] ${panelClass}`}>
                  <div>
                    <div className={`text-[10px] text-[#61afef] ${monoClass}`}>SYSTEM_READY</div>
                    <h3 className={`mt-4 text-2xl font-bold text-[#d7dae0] ${displayClass}`}>
                      Open to building, research, and interesting technical problems.
                    </h3>
                    <p className={`mt-4 text-sm leading-7 text-[#5c6370] ${readingClass}`}>
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

        {/* <footer className="border-t border-[#3e4451] bg-[#21252b]">
          <div
            className={`mx-auto flex max-w-[1280px] flex-col gap-2 px-4 py-6 text-[8px] text-[#5c6370] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8 ${monoClass}`}
          >
            <span>TERMINAL_01</span>
            <span>AAYAAN SAHU // FULL_SYSTEM_OPERATIONAL</span>
            <span>2026</span>
          </div>
        </footer> */}
        </div>

        <a
          href="mailto:aasahu2@illinois.edu"
          className="fixed bottom-5 right-5 z-20 grid size-12 place-items-center rounded-md border border-[#61afef] bg-[#61afef] text-[#282c34] shadow-[0_16px_40px_rgba(97,175,239,0.25)] transition hover:bg-[#8abcf2]"
        >
          <Icons.mail />
        </a>
      </div>
    </LazyMotion>
  );
}

export default App;
