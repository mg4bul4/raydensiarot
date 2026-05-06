import type { NarrativeCaseStudy } from "@/lib/narrative-case-study-types";

/** Use **term** in strings for bold emphasis (parsed by NarrativeRichText). */

export const GROUNDED_TALKS_NARRATIVE: NarrativeCaseStudy = {
  displayTitle: "GroundedTalks",
  kicker: "UX Design · Brand Identity · Edu-tech",
  roleLine: "Creative Lead, UX Design",
  tagline: "A mentor-led career discovery platform that reached 300+ students and made the next step feel possible.",
  bentoSummary: {
    coreProblem:
      "Career resources felt scattered, generic, and hard to trust under real student time pressure.",
    myRole:
      "Creative Lead, UX Design. End-to-end: discovery research, IA, wireframing, visual system, and high-fidelity prototyping.",
    strategicDecision:
      "Frame the product as decision-support, not information delivery. Reduce ambiguity, surface next steps, and keep content scannable enough that students would actually use it.",
    userBenefit:
      "Students move from broad career questions to concrete role and skill guidance without leaving a coherent interface.",
  },
  overview: {
    summary:
      "**GroundedTalks** is a mentor-led career discovery platform designed for students trying to connect coursework with real industry paths. The project existed because existing career resources felt scattered, generic, and hard to trust under real student time pressure.",
    challenge:
      "Students could find information, but they couldn't easily turn it into a plan they believed in. Advice was fragmented across search results, social threads, and disconnected school resources. The risk was decision paralysis: when everything feels equally unclear, users stop exploring and default to inaction.",
    audience:
      "University students navigating major and career decisions, particularly those feeling behind or overwhelmed. Secondary users were community members and mentors who wanted a clearer way to share guidance with students actively seeking direction.",
  },
  strategicLogic: {
    designStrategyHeading: "Research and design decisions",
    designStrategy:
      "I started with discovery across surveys and interviews — 87% of respondents said they felt lost in their career journey, 62% reported major confusion about their major, and 50% felt unprepared for the workforce. Those signals were loud enough to anchor the entire IA around **reducing ambiguity first**. I stayed in low-fidelity until stakeholders were aligned on flow and information structure, then moved to visual refinement. Key decisions focused on scan speed, comprehension, and emotional safety.",
    visualIdentityHeading: "Branding rationale",
    visualIdentity:
      "I built a warm \"Cup of Joe\" visual language to make professional guidance feel conversational instead of institutional. That tone choice directly supported trust for users who were already anxious about career uncertainty. I introduced light gamified patterns to make dense mentor and career information feel approachable without trivializing the content. Constraints included platform limitations (Squarespace) and content volume, so I prioritized modular components that could scale while preserving readability.",
    processImages: [
      {
        src: "/projects/grounded-talks/wireframe-landing-page.png",
        alt: "Low-fidelity wireframe for the GroundedTalks landing page",
        caption: "Wireframe: landing page",
      },
      {
        src: "/projects/grounded-talks/wireframe-career-page.png",
        alt: "Low-fidelity wireframe for the GroundedTalks career exploration page",
        caption: "Wireframe: career exploration",
      },
      {
        src: "/projects/grounded-talks/wireframe-career-insights-visualizer.png",
        alt: "Low-fidelity wireframe for the career insights visualizer layout",
        caption: "Wireframe: insights visualizer",
      },
    ],
    personaImages: [
      {
        src: "/projects/grounded-talks/persona-peter-openminded-explorer.png",
        alt: "UX persona card for Peter Dawson, The Openminded Explorer, showing goals, frustrations, and needs",
        caption: "Peter Dawson · The Openminded Explorer",
      },
      {
        src: "/projects/grounded-talks/persona-aliyah-mastermind.png",
        alt: "UX persona card for Aliyah Saad, The Mastermind, showing goals, frustrations, and needs",
        caption: "Aliyah Saad · The Mastermind",
      },
    ],
  },
  solution: {
    heroImage: {
      src: "/projects/grounded-talks/case-study-hero-mockup.png",
      alt: "High-fidelity GroundedTalks mockup showing desktop and mobile landing experience",
    },
    body:
      "The final solution is a structured discovery platform combining **mentor insights**, career path exploration, and scannable educational content. Users move from broad questions to concrete role and skill guidance without leaving a coherent interface. I paired high-fidelity interface patterns with reusable content modules so long-form advice stayed readable and actionable. The prototype below shows the interactive behavior that made the product understandable in use, not just in static screens.",
    imagePlaceholders: [
      "Style guide: typography, palette, and logo lockup",
    ],
    images: [
      {
        src: "/projects/grounded-talks/case-study-style-guide.png",
        alt: "GroundedTalks style guide showing Helvetica Neue, Open Sans, Raleway typefaces, Creme Latte Coffee color palette, and logotype",
        variant: "desktop",
      },
    ],
    prototypeEmbedUrl: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FJCudWWWOUFPvT874qDMIGH%3Fnode-id%3D618-338%26t%3DZT80TGs74DUIt1r2-6",
    additionalScreens: [
      {
        title: "Landing page",
        src: "/projects/grounded-talks/final-screen-01-landing.png",
        alt: "High-fidelity GroundedTalks landing page with hero, career preview, and mentor logos",
      },
      {
        title: "Explore careers",
        src: "/projects/grounded-talks/final-screen-02-explore-careers.png",
        alt: "High-fidelity Explore Careers screen with career path cards",
      },
      {
        title: "Career insights visualizer",
        src: "/projects/grounded-talks/final-screen-03-career-insights-visualizer.png",
        alt: "High-fidelity Career Insights Visualizer with skill plot and career compass",
      },
    ],
    fullBleedCaption: "Career Insights Visualizer: skill plot and career compass in context",
    fullBleedImage: {
      src: "/projects/grounded-talks/final-screen-03-career-insights-visualizer.png",
      alt: "High-fidelity Career Insights Visualizer with skill plot and career compass",
    },
  },
  outcome: {
    impact:
      "GroundedTalks reached **300+ students** during discovery and produced a clearer path for evaluating careers with less guesswork. Feedback highlighted the skills visualizer as especially useful for understanding what a field actually requires. Students reported stronger confidence after using the platform, and one student noted: the experience made career planning feel concrete and less overwhelming.",
    throughLine:
      "Clarity and pacing are **core product decisions**, not just writing polish. When users are anxious, structure carries as much value as the information itself. The deeper lesson is to test content density early: even strong insights fail if the interaction flow makes users work too hard to parse them. If I revisited this project, I would front-load performance constraints and analytics instrumentation so quality and speed decisions could be validated sooner.",
  },
};

export const NAFS_NARRATIVE: NarrativeCaseStudy = {
  displayTitle: "Nafs",
  kicker: "The Disciplined Canvas · Case study",
  roleLine:
    "Lead UI / Brand Designer — logo identity and high-fidelity Figma prototypes.",
  tagline: "A calm, unified space for women's health and personal wellbeing.",
  bentoSummary: {
    coreProblem:
      "Women's health tools are fragmented and clinical — users face cognitive overload before they've even started.",
    myRole:
      "Lead UI / Brand Designer. Responsible for the logo identity and all high-fidelity Figma prototypes.",
    strategicDecision:
      "Anchor every screen in anxiety reduction: progressive disclosure, generous space, and a palette that whispers rather than shouts.",
    userBenefit:
      "Users feel empowered and at ease navigating sensitive health data — no intimidation, no overload.",
  },
  overview: {
    summary:
      "**Nafs** is a mobile-first wellness product that unifies personal tracking and reflection in one **calm, trustworthy** surface.",
    challenge:
      "**Women’s health** resources and tracking are often **fragmented and overwhelming**. The product needed a **unified, trustworthy digital environment** that did **not** feel **clinical** or **intimidating**.",
    audience:
      "People navigating **personal health and wellbeing** who want **clarity and continuity** without the **cognitive load** typical of disjointed tools and cold interfaces.",
  },
  strategicLogic: {
    designStrategy:
      "The experience is built around **anxiety reduction** and **trust**. Rather than dense dashboards or alarmist patterns, the UI favors **progressive disclosure**, a clear **all-in-one mental model**, and an **intuitive** path through **complex health data** so users never feel judged or rushed.",
    visualIdentity:
      "**Kanso** shows up as **restraint**: a **calming palette**, **generous negative space**, and typography that whispers instead of shouts. The brand mark and UI chrome support **emotional safety** first—**soft hierarchy**, **breathable layouts**, and **consistent** interaction patterns so the product feels like a **steady companion**, not a clinic portal.",
  },
  solution: {
    body:
      "The final UI centers a **unified dashboard** that **simplifies** how users scan status, routines, and reflections. **Key features** are grouped by **intent** (not by internal product silos), with **gentle** states, **clear** primary actions, and **mobile-first** ergonomics so critical flows stay **thumb-reachable** and **legible** in real-life contexts.",
    imagePlaceholders: [
      "Hero + dashboard — final high-fidelity screens",
      "Key flows — tracking, reflection, or settings",
    ],
    fullBleedCaption: "Full product overview — dashboard, tracking, and reflection surfaces side by side",
  },
  outcome: {
    impact:
      "The design succeeds when users report feeling **empowered**, **safe**, and **at ease** moving through their **personal health journey**—without the **overload** common to **medical** and **tracking** apps. The **primary benefit** is **psychological**: **confidence** in the interface as a **non-threatening** home for sensitive, ongoing use.",
    throughLine:
      "**Negative space** and **calm color** are not decoration—they are **functional**: they reduce arousal, support **return usage**, and protect **trust** in a category where **tone** is as important as **features**.",
  },
};

export const GIGATAX_NARRATIVE: NarrativeCaseStudy = {
  displayTitle: "GigATax",
  kicker: "Hackathon Project · hack.msa 2026",
  roleLine: "UI/UX Designer & Frontend Developer",
  tagline:
    "Taxes built for creators, streamers, and everyone else the IRS forgot.",
  team: "Zubair Rashaad, Yousuf Riaz, Omar Ali, Rayden Siarot",
  techStack: [
    "React",
    "Tailwind CSS",
    "Vite",
    "FastAPI",
    "Python",
    "Supabase",
    "Plaid",
    "Claude Sonnet",
    "Google OAuth",
  ],
  bentoSummary: {
    coreProblem:
      "Independent workers lose money every year to missed deductions, surprise bills, and expensive accountants.",
    myRole: "UI/UX Designer & Frontend Developer. IA, dashboard design, and frontend build.",
    strategicDecision:
      "Build real-time categorization and deduction discovery around gig-worker context, not W2 assumptions.",
    userBenefit:
      "Users stay ahead of what they owe and find write-offs before tax season pressure hits.",
  },
  overview: {
    summary:
      "**GigATax** is a hackathon-built tax workflow designed for creators, freelancers, and other independent workers who don't fit W2 assumptions. We built it during **hack.msa 2026** to help users understand what they owe in real time and identify deductions before tax season pressure hits.",
    challenge:
      "Independent workers track income across multiple platforms, pay estimated taxes themselves, and manage expenses that vary by profession. Most tools treat them like traditional employees, which leads to missed write-offs and **surprise tax bills**. What was at stake was financial confidence: users needed to see **tax impact early enough to act**.",
    audience:
      "Creators, streamers, freelancers, and gig workers who earn across multiple platforms and have no single employer handling their withholding. For these users, tax season is an annual source of anxiety rather than a routine.",
  },
  strategicLogic: {
    designStrategyHeading: "Design process",
    designStrategy:
      "This was a constrained hackathon sprint, so I optimized for **one reliable core loop** instead of full tax-platform breadth. The key design decisions were: show transaction status early, surface AI confidence scores so users know when to trust the system, and route ambiguous items into a guided review queue rather than letting them silently fail. Every interaction was built around **speed, clarity, and demo reliability**, not long-term product polish.",
    visualIdentityHeading: "The hard problem: context",
    visualIdentity:
      "The hardest problem wasn't tax math: it was **context**. A Shell transaction means something completely different for a rideshare driver versus a photographer. The system had to understand that automatically. I designed the categorization model around a single-pass prompt that analyzes merchant, amount, and gig type together to produce a category, confidence score, and deductibility determination, making ambiguity visible to the user rather than hidden.",
    processImages: [
      {
        src: "/projects/gigatax/sign-in.png",
        alt: "GigATax sign-in screen, step 1 of 7 onboarding flow with Google OAuth and email options",
        caption: "Step 1 of 7: Sign in",
      },
      {
        src: "/projects/gigatax/connect-accounts.png",
        alt: "GigATax connect accounts screen, step 5 of 7 with Plaid, Stripe, and Twitch connection options",
        caption: "Step 5 of 7: Connect your accounts",
      },
    ],
  },
  solution: {
    heroImage: {
      src: "/projects/gigatax/landing.png",
      alt: "GigATax landing page with 'Taxes for people who hustle weird.' headline, neon green accent, and Get your money back CTA",
    },
    body:
      "We shipped a working product flow where users can connect accounts via Plaid, view AI-categorized transactions, and see how each one affects their live tax exposure. The **Needs Review queue** is a complete product loop: a transaction is flagged, surfaces on the dashboard with an estimated savings figure, the user resolves it in the Optimization view, and the dashboard updates immediately on confirmation. The system combines **automated classification** with human-in-the-loop review so unclear items never silently disappear.",
    imagePlaceholders: [
      "GigATax dashboard — live tax impact and transaction feed",
      "Needs Review queue — transaction resolution loop",
    ],
    images: [
      {
        src: "/projects/gigatax/dashboard.png",
        alt: "GigATax main dashboard showing estimated annual income of $21,400, estimated tax due of $5,136, live transaction feed with AI confidence scores, Needs Review alert, and deductions found panel",
        variant: "desktop",
      },
      {
        src: "/projects/gigatax/optimization.png",
        alt: "GigATax optimization view showing business mileage deduction with $486 gas spend detected, vehicle MPG input, miles slider, and $72.36 estimated tax savings",
        variant: "desktop",
      },
    ],
    fullBleedCaption: "GigATax: Review and file screen with complete income, expense, and deduction summary",
    fullBleedImage: {
      src: "/projects/gigatax/review-and-file.png",
      alt: "GigATax review before you file screen showing total income $21,400, categorized expenses $1,024.57, estimated tax due $5,136, and vehicle mileage deduction savings",
    },
  },
  outcome: {
    impact:
      "We placed **2nd overall** at hack.msa 2026 out of 18 competing teams. The judges highlighted the real-time feedback model and the Needs Review queue as the strongest interaction decisions in the demo. The product proved that **gig-worker tax categorization is feasible at hackathon scale** when AI context is scoped to user type rather than generic merchant matching.",
    throughLine:
      "Speed constraints are a forcing function for **prioritization clarity**: one reliable decision loop creates more credibility than a broad but shallow feature list. The deeper lesson is that **context is the hard part of tax UX** and categorization quality depends on user profile and work type, not just merchant name. If this moved beyond hackathon scope, I would validate categorization accuracy with real transaction data before adding any filing features.",
  },
};

export const TANZEEL_NARRATIVE: NarrativeCaseStudy = {
  displayTitle: "The Tanzeel Initiative",
  kicker: "Nonprofit · Web Design · Brand Identity",
  roleLine: "UI/UX Designer & Web Developer",
  tagline:
    "Designing a digital home for a nonprofit bringing Qur'anic education and community events to modern audiences.",
  bentoSummary: {
    coreProblem:
      "The organization was growing faster than its digital infrastructure, with no central source of truth for events, mission, or leadership.",
    myRole:
      "UI/UX Designer & Web Developer. I owned page architecture, responsive UI patterns, booking flow design, and integrated donation pathways.",
    strategicDecision:
      "Prioritize clear hierarchy, event discoverability, and direct donation and booking pathways to serve both newcomers and returning community members.",
    userBenefit:
      "Visitors can understand Tanzeel quickly, find programs without friction, and take action through bookings and donations in one place.",
  },
  overview: {
    summary:
      "**The Tanzeel Initiative** is a growing nonprofit organizing community events, tours, and educational programs around Qur'anic recitation and scholarship. When I joined the project, it had no cohesive web platform to direct its audience, manage bookings, or communicate its identity online.",
    challenge:
      "The site needed to serve two audiences at once: people discovering the initiative for the first time, and returning community members looking for specific programs. The experience had to orient new visitors quickly without slowing down repeat users who came to take action.",
    audience:
      "Muslims and families in the DFW area looking for Qur'anic education programs, community events, and ways to support the organization. Returning members needed fast access to upcoming events and booking; new visitors needed enough context to trust the organization before taking action.",
  },
  strategicLogic: {
    designStrategyHeading: "What was broken and what I owned",
    designStrategy:
      "Event details, leadership context, and donation intent were spread across disconnected channels. I owned UX structure and web implementation: page architecture, responsive UI patterns, booking flow design, and integrated donation pathways for Zelle, Apple Pay, and card. I prioritized **hierarchy first, then action paths**, so users could move from understanding to participation without losing context.",
    visualIdentityHeading: "Approach and constraints",
    visualIdentity:
      "The approach was constraint-led: keep language and layout deliberate, reduce cognitive load, and make key tasks visible above the fold. I iterated navigation and section ordering around likely first questions, then validated each flow against practical outcomes: find an event, book, donate, or contact leadership. Visual decisions stayed restrained so the interface supported **trust and readability** rather than competing with the mission content.",
  },
  solution: {
    body:
      "I designed and developed a full multi-page site including home, about, events, gallery, team, bookings, contact, and donation flows. The site now functions as Tanzeel's central digital hub for community communication, event promotion, and donor engagement. The system reflects the name Tanzeel itself: deliberate, structured, and accessible, bringing people through the experience one clear step at a time.",
    imagePlaceholders: [
      "Homepage hero with gold emblem and CTAs",
      "Team page with faculty grid and role labels",
    ],
    images: [
      {
        src: "/projects/tanzeel-initiative/hero-desktop.png",
        alt: "The Tanzeel Initiative homepage hero with dark field, gold calligraphy emblem, 'Welcome to The Tanzeel Initiative' headline, and Explore Events, Donate, and Learn More CTAs",
        variant: "desktop",
      },
      {
        src: "/projects/tanzeel-initiative/team-desktop.png",
        alt: "The Tanzeel Initiative team page with 'Our Team' heading and faculty grid showing Qari Safiyullah Khan, Shaykh Idris Nawaz, Shaykh Zaki Ali, and others",
        variant: "desktop",
      },
    ],
    fullBleedCaption: "Events page showing upcoming programs with RSVP and location details",
    fullBleedImage: {
      src: "/projects/tanzeel-initiative/events-desktop.png",
      alt: "The Tanzeel Initiative events page with 'Upcoming Events' heading and Reminiscing Ramadan event card showing poster, date, location, and RSVP button",
    },
  },
  outcome: {
    impact:
      "The launch gave the organization a dependable home base for outreach, event promotion, and donor engagement instead of relying on scattered social posts. Community members gained one place to find programs, understand leadership, and take next steps without hunting across platforms. The site went live and is actively in use for the organization's ongoing programs.",
    throughLine:
      "Mission-driven websites need **operational clarity** as much as visual identity. Hierarchy and action paths are not aesthetic decisions, they are functional ones. If I extend this work, I would instrument funnel tracking for event RSVP and donation completion to quantify where friction still exists.",
  },
};

export const MSA_UTA_NARRATIVE: NarrativeCaseStudy = {
  displayTitle: "MSA UT Arlington",
  kicker: "Web Design · UI/UX · Frontend Development",
  roleLine: "UI/UX Designer & Frontend Developer",
  tagline: "A membership-first campus hub for events, community, and connection.",
  bentoSummary: {
    coreProblem:
      "Scattered campus information weakened event discovery, membership sign-ups, and the sense of a connected community.",
    myRole:
      "UI/UX Designer & Frontend Developer. I owned information architecture, UI design, and responsive event and membership flows.",
    strategicDecision:
      "Membership-first IA: joining is obvious early, events are scannable objects, and RSVP stays coupled to discovery.",
    userBenefit:
      "Students can discover upcoming events and secure membership in a few taps. Less searching, clearer next steps.",
  },
  overview: {
    summary:
      "**MSA UT Arlington** needed a single digital hub where students and community members could understand the organization, discover events, and join without confusion. I designed and built the experience as a **mobile-first system** because most interactions happened between classes on phones.",
    challenge:
      "Event details, membership sign-up, and community context were spread across fragmented channels. Students could hear about something happening but had no reliable place to confirm details, RSVP, or join. The drop-off between intent and action was the core problem to solve.",
    audience:
      "UTA students between classes on their phones, looking to quickly find what is happening and how to join. Secondary users were community members and families looking for reliable event details and ways to stay connected with the organization.",
  },
  strategicLogic: {
    designStrategyHeading: "Design process",
    designStrategy:
      "I owned UX and frontend execution: information architecture, card-based event browsing, CTA hierarchy, and responsive implementation. The core approach was **membership-first navigation** paired with **event-first scanning** so users could decide and act in the same interaction rather than navigating back and forth between separate flows.",
    visualIdentityHeading: "Constraints and iteration",
    visualIdentity:
      "The real constraints were **low attention windows**, mobile usage patterns, and repeated return visits during active semesters. I iterated toward stronger hierarchy, larger tap targets, and predictable card patterns so people could parse event information in seconds. The visual system stayed minimal so content and CTAs stayed legible under real campus conditions, not just on a design monitor.",
  },
  solution: {
    body:
      "The home experience leads with purpose (faith and community) and **dual CTAs**: Become a Member and Explore Events. Event cards are **mobile-optimized** with high contrast, short labels, and predictable actions so students can decide in seconds. Membership flows are shortened to reduce abandonment on small screens, keeping the path from first visit to signed-up member as direct as possible.",
    imagePlaceholders: [
      "Home hero with dual CTAs",
      "Events listing — mobile card pattern",
    ],
    images: [
      {
        src: "/projects/msa-uta/hero-desktop.png",
        alt: "MSA UT Arlington homepage with UTA mascot emblem, 'Welcome to MSA UT Arlington' headline, and dual CTAs: Become a Member and Explore Events",
        variant: "desktop",
      },
      {
        src: "/projects/msa-uta/events-mobile.png",
        alt: "MSA UT Arlington mobile view showing Stay Connected section with Upcoming Events and View Calendar CTAs",
        variant: "mobile",
      },
    ],
    fullBleedCaption: "MSA UT Arlington merch drop page: product photography and CTA in context",
    fullBleedImage: {
      src: "/projects/msa-uta/merch-desktop.png",
      alt: "MSA UT Arlington merch drop page with 'Wear the message. Order online.' headline and product photography collage",
    },
  },
  outcome: {
    impact:
      "The platform gave the organization a reliable digital home that reduced reliance on scattered social posts. Students gained one place to find programs, check event details, and complete membership without hunting across platforms. The site launched actively in use during a live semester, serving the organization's events and membership cycle.",
    throughLine:
      "Student-facing platforms live or die on **interaction speed**, not feature count. The membership-first IA decision was the most important one: when joining is surfaced early and RSVP is coupled to discovery, the drop-off between intent and action shrinks. If I iterated further, I would add lightweight analytics around event CTR and membership completion to quantify where mobile users still exit.",
  },
};
