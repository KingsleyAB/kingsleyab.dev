// =============================================================================
// SITE DATA — EDIT EVERYTHING ABOUT THE PORTFOLIO FROM THIS ONE FILE
// =============================================================================
// All copy, links, and structured content for the site live here. Components
// only render — they never hardcode strings. Change a job title or add a
// project here and it propagates everywhere.

export const personal = {
  name: 'Kingsley Agyenim-Boateng',
  firstName: 'Kingsley',
  greeting: 'Welcome. Glad you\'re here.',
  title: 'Firmware Engineer — Memory Subsystem',
  company: 'AMD',
  location: 'Austin, Texas',
  email: 'kingsleyaboateng1@gmail.com',
  phone: '', // optional — leave empty to hide
  linkedin: 'https://linkedin.com/in/boateng-kingsley',
  github: 'https://github.com/KingsleyAB',
  resumeUrl:
    'https://drive.google.com/uc?export=download&id=1Dz_SU-v8anhqSgAMTmFsVW5wzG2du7cA',
  // The typewriter cycles through these titles on the hero.
  rotatingTitles: [
    'Firmware Engineer',
    'Memory Subsystem Engineer',
    'Embedded Systems Developer',
    'Low-Level Systems Engineer',
    'BIOS Engineer',
  ],
  heroSummary:
    'Firmware engineer at AMD. I work on the code that runs before the OS knows it exists — memory bring-up, boot flows, and the kind of bugs that only appear when the system is barely alive.',
};

export const about = {
  paragraphs: [
    `I’m Kingsley, a firmware engineer at AMD working on memory subsystem firmware. It is the kind of work that sits right between software and hardware. A lot of my day is spent around early boot, DDR5 and LPDDR5 enablement, memory initialization, silicon bring up, validation, and the weird bugs that only show up when the system is barely alive.`,
    `I like the parts of engineering that force you to slow down and actually understand what is happening. Debug logs, register dumps, protocol traces, timing issues, boot failures, and performance regressions are where the work gets interesting to me. It is not always clean, but that is the point. Real engineering is usually messy before it makes sense.`,
    `This site is my space to document that journey. Some posts will be technical, covering firmware, memory systems, debugging, C/C++, tooling, side projects, and low level systems. Some will be more personal, covering career lessons, interview prep, advice for young engineers, and things I wish someone explained earlier.`,
    `Outside of work, I enjoy soccer, photography, travel, and whatever side project has my attention at the moment. I like having things outside of engineering that still make me think, compete, create, or look at the world a little differently.`,
    `I’m not trying to present a perfect version of engineering here. I’m trying to show the real version: the bugs, the learning, the late night curiosity, the small wins, and the process of becoming better one problem at a time.`,
  ],
  expertise: [
    'Memory Subsystems',
    'DDR5 / LPDDR5',
    'Firmware Development',
    'C / C++ / Python',
    'Validation',
    'Performance Optimization',
    'Linux',
    'Lab Debug',
    'Automation',
  ],
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: 'AMD',
    role: 'Firmware Engineer — Memory Subsystem',
    period: '2023 — Present',
    location: 'Austin, Texas',
    bullets: [
      'Develop and debug low-level BIOS firmware for AMD client and server SoCs, focused on early-boot memory initialization, platform bring-up, and root-cause resolution of memory-related boot failures.',
      'Support DDR5 and LPDDR5 enablement across multiple client and server platforms, collaborating cross-functionally during silicon bring-up and validation to analyze boot behavior and system-level failures.',
      'Lead the team\'s transition to reStructuredText (.rst)-based documentation (FlexDoc), enabling firmware documentation to be versioned, built, and generated alongside firmware code.',
      'Contribute to boot time optimization initiatives, identifying and improving performance-critical paths in early boot firmware.',
      'Address static analysis and code quality issues, including large-scale cleanup of Coverity and keyword-scan (KWS) findings across the codebase.',
      'Participate in code reviews and contribute to unit test development, improving firmware quality and regression stability through automated build and test pipelines.',
    ],
  },
  {
    company: 'AMD',
    role: 'System Design Engineering Intern',
    period: 'May 2022 — January 2023',
    location: 'Austin, Texas',
    bullets: [
      'Developed and executed post-silicon validation test plans for datacenter server SoCs, working closely with firmware teams.',
      'Built and maintained post-si validation infrastructure, including software automation, hardware setup, and lab workflows.',
      'Performed system-level debug using internal AMD tools (MemEye, MBIST, HDT) and lab equipment (oscilloscopes, logic analyzers), with exposure to x86 platforms and DDR5/LPDDR5 memory.',
    ],
  },
];

export type EducationItem = {
  school: string;
  degree: string;
  period: string;
};

export const education: EducationItem[] = [
  {
    school: 'Georgia Institute of Technology',
    degree: 'M.S. in Computer Science (Computing Systems)',
    period: 'Expected Graduation — Dec 2027',
    // notes:
    //   'Coursework: Computer Architecture, Embedded Systems, Operating Systems, Digital Logic Design, Signals & Systems.',
  },
  {
    school: 'Texas State University',
    degree: 'B.S. in Electrical and Computer Engineering',
    period: 'August 2020 — May 2023',
    // notes:
    //   'Coursework: Computer Architecture, Embedded Systems, Operating Systems, Digital Logic Design, Signals & Systems.',
  },
  {
    school: 'Austin Community College',
    degree: 'A.S. in Engineering',
    period: 'August 2018 — May 2020',
    // notes:
    //   'Coursework: Computer Architecture, Embedded Systems, Operating Systems, Digital Logic Design, Signals & Systems.',
  },
];

// =============================================================================
// ENGINEERING INSIGHTS — technical writing
// =============================================================================
// Each entry is a piece of writing: a titled essay or technical note. The body
// is an array of strings — one entry per paragraph — so the prose can be
// edited here without touching any component code.
//
// A `body` entry that starts with "## " is rendered as a sub-heading rather
// than a paragraph, so longer pieces can be broken into sections.
//
// To add a new piece: append another object to the `writing` array below.

export type Article = {
  id: string;
  title: string;
  // Short discipline tag, shown as the eyebrow above the title.
  category: string;
  // Human-readable reading time, e.g. "7 min read".
  readingTime: string;
  // One-line summary shown on the section list row.
  excerpt: string;
  // The article body. One string per paragraph. Prefix a string with "## "
  // to render it as a section sub-heading instead of a paragraph.
  body: string[];
};

export const writing: Article[] = [
  {
    id: 'firmware-vs-software-debugging',
    title: 'What Makes Firmware Debugging Different From Software Debugging',
    category: 'Debugging',
    readingTime: '4 min read',
    excerpt:
      'Most software debugging habits stop working once the machine stops talking back to you.',
    body: [
      'Most software engineers work with a fast debug loop. Hit a breakpoint, inspect a variable, restart, add a log, try again. Even when something is broken, the system usually still talks back to you.',
      'Firmware work is different, because half the time the machine barely tells you anything.',
      'Sometimes there\'s no console output. No stack trace. No logs. The board just hangs during bring-up, and now you\'re staring at a POST code, a training value, or a logic analyzer capture, trying to work out what changed.',
      'The feedback loop is slow, too. A small change might mean rebuilding firmware, reflashing the image, rebooting the platform, retraining memory, and rerunning validation — just to test one theory. You learn quickly that randomly changing things and hoping for a different outcome is a terrible strategy.',
      'The bug is also not always in "your code." A failure can sit anywhere between firmware, hardware, signal integrity, timing margins, board behavior, BIOS configuration, or even environmental conditions. Sometimes the code is technically correct, but the system state around it is unstable.',
      'That changes the way you approach debugging.',
      'You stop treating it like trial-and-error and start treating it like a measurement problem. The goal becomes reducing variables, building reproducible baselines, and collecting enough signal to separate coincidence from real causality.',
      'A lot of firmware debugging is honestly about discipline. The best engineers usually aren\'t the ones making the wildest guesses — they\'re the ones who stay methodical when the system is giving almost nothing back.',
      'Something I\'ve come to believe is that observability matters as much as the fix itself. The engineers who move fastest are the ones building better tooling, better diagnostics, and better ways to see system state before a failure happens.',
      'Firmware debugging is frustrating because the machine is slow to answer. But over time it teaches you to think carefully before you touch the system — and that\'s a habit worth having no matter what you\'re building.',
    ],
  },
];

export const contact = {
  heading: 'Get in touch',
  body: `Whether you're an engineer who wants to chat about firmware, or a student curious about how to break into embedded — I'd love to hear from you.`,
  closing: `I read every message. If you don't hear back within a few days, please ping me on LinkedIn.`,
};

export const seo = {
  title: 'Kingsley Agyenim-Boateng — Firmware Engineer',
  description:
    'Personal portfolio of Kingsley Agyenim-Boateng — Firmware Engineer on the Memory Subsystem team at AMD. Embedded systems, low-level debug, validation, and performance work.',
  url: 'https://kingsleyab.dev', // replace with your actual deployed URL
  ogImage: '/images/og-image.png',
};
