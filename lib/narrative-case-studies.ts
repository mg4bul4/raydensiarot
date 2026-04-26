import type { NarrativeCaseStudy } from "@/lib/narrative-case-study-types";

/** Use **term** in strings for bold emphasis (parsed by NarrativeRichText). */

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
  kicker: "Hackathon Project — hack.msa 2026",
  roleLine: "UI/UX Designer & Frontend Developer",
  tagline:
    "Taxes built for creators, streamers, and everyone else the IRS forgot.",
  bentoSummary: {
    coreProblem:
      "Independent workers lose money every year to missed deductions, surprise bills, and expensive accountants.",
    myRole: "UI/UX Designer & Frontend Developer",
    strategicDecision:
      "Build real-time categorization and deduction discovery around gig-worker context, not W2 assumptions.",
    userBenefit:
      "Users stay ahead of what they owe and find write-offs before tax season pressure hits.",
  },
  overview: {
    summary:
      "The gig economy has fundamentally changed how people earn, but the tax system hasn't caught up. Millions of creators, freelancers, and independent workers navigate a tax system built for W2 employees — losing money every year to missed deductions, surprise bills, and expensive accountants. GigATax was built to fix that.",
    challenge:
      "Independent workers have no payroll, no single employer, and expenses that look nothing like a traditional employee's. Existing tools were designed for a W2 world. Every year, money is left on the table because the tools don't understand how gig workers actually operate.",
    audience:
      "A platform that connects directly to a user's income sources, categorizes transactions in real time, surfaces profession-specific deductions automatically, and keeps users ahead of what they owe — so April never catches them off guard again.",
  },
  strategicLogic: {
    designStrategy:
      "Bank connections via Plaid sync transactions automatically\nClaude Sonnet (Anthropic) reads merchant, amount, and gig type together to categorize each transaction, score its confidence, and determine deductibility in a single pass\nA receipt scanner uses Claude's vision API to extract data from images and PDFs automatically\nA deduction discovery layer runs across a user's full transaction history to surface write-offs they would have otherwise missed\nA real-time dashboard shows the live tax impact of every transaction the moment it happens",
    visualIdentity:
      "The hardest problem wasn't tax math — it was context. A Shell transaction means something completely different for a rideshare driver versus a photographer. The system had to understand that automatically. The solution was a system-level prompt that analyzes each transaction with full user context to produce a category, confidence score, and deductibility determination in a single pass.",
  },
  solution: {
    body:
      "Real-time tax impact updates on every transaction\nThe Needs Review queue as a complete product loop: transaction flagged → surfaces on dashboard with savings figure → user resolves in Optimization → dashboard updates live on confirmation",
    imagePlaceholders: [
      "GigATax product overview — dashboard and optimization flow",
      "Needs Review queue — transaction resolution loop",
    ],
    fullBleedCaption: "GigATax complete workflow in context",
  },
  outcome: {
    impact:
      "A purpose-built model trained on gig worker transaction data\nQuarterly estimated tax payments with IRS payment integration\nFull e-file support",
    throughLine:
      "State tax expansion beyond Texas\nAn audit protection layer that flags unusual returns before they transmit",
  },
};

export const TANZEEL_NARRATIVE: NarrativeCaseStudy = {
  displayTitle: "The Tanzeel Initiative",
  kicker: "Web Design & Brand Identity",
  roleLine: "Role: UI/UX Designer & Web Developer",
  tagline:
    "Designing a digital home for a nonprofit bringing Qur'anic education and community events to modern audiences.",
  bentoSummary: {
    coreProblem:
      "The organization was growing faster than its digital infrastructure, with no central source of truth for events, mission, or leadership.",
    myRole:
      "UI/UX Designer & Web Developer. Type: Nonprofit · Web Design · Brand Identity. Organization: The Tanzeel Initiative. Platform: Web.",
    strategicDecision:
      "I prioritized clear hierarchy, event discoverability, and direct donation and booking pathways to serve both newcomers and returning community members.",
    userBenefit:
      "Visitors can understand Tanzeel quickly, find programs without friction, and take action through bookings and donations in one place.",
  },
  // [STRUCTURE AUDIT] — OVERVIEW
  overview: {
    summary:
      "The Tanzeel Initiative needed a digital presence that matched the depth and intentionality of its mission. As a growing nonprofit organizing community events, tours, and educational programs around Qur'anic recitation and scholarship, it had no cohesive web platform to direct its audience, manage bookings, or communicate its identity online.",
    challenge:
      "The site served two audiences at once: people discovering the initiative for the first time and returning community members looking for specific programs. The experience needed to orient new visitors fast without slowing down repeat users who came to take action.",
    audience:
      "I designed the platform as a working communication system, not a brochure: clear wayfinding, event visibility, and action paths for bookings and donations. The project existed to turn fragmented outreach into one usable digital home.",
  },
  // [STRUCTURE AUDIT] — THE PROBLEM + ROLE & CONTRIBUTIONS + APPROACH
  strategicLogic: {
    designStrategy:
      "What was broken was continuity: event details, leadership context, and donation intent were spread across disconnected channels. I owned UX structure and web implementation, including page architecture, responsive UI patterns, booking flow design, and integrated donation pathways for Zelle, Apple Pay, and card. I prioritized hierarchy first, then action paths, so users could move from understanding to participation without losing context.",
    visualIdentity:
      "The approach was constraint-led: keep language and layout deliberate, reduce cognitive load, and make key tasks visible above the fold. I iterated navigation and section ordering around likely first questions, then tested each flow against practical outcomes: find an event, book, donate, or contact leadership. Visual decisions stayed restrained so the interface supported trust and readability instead of competing with mission content.",
  },
  // [STRUCTURE AUDIT] — SOLUTION
  solution: {
    body:
      "I designed and developed a full multi-page website including home, about, events, gallery, team, bookings, contact, and donation flows. The site now functions as Tanzeel's central digital hub for community communication, event promotion, and donor engagement. The system reflects the name Tanzeel itself: deliberate, structured, and accessible, bringing people through the experience one clear step at a time.",
    imagePlaceholders: [
      "Hero — dark + gold, CTAs and emblem",
      "Team — faculty grid with role labels",
    ],
    images: [
      {
        src: "/projects/tanzeel-initiative/hero-desktop.png",
        alt: "The Tanzeel Initiative homepage hero — dark field, gold calligraphy emblem, 'Welcome to The Tanzeel Initiative' headline, and Explore Events / Donate / Learn More CTAs",
        variant: "desktop",
      },
      {
        src: "/projects/tanzeel-initiative/team-desktop.png",
        alt: "The Tanzeel Initiative team page — 'Our Team' heading with faculty grid showing Qari Safiyullah Khan, Shaykh Idris Nawaz, Shaykh Zaki Ali, and others",
        variant: "desktop",
      },
    ],
    fullBleedCaption: "Full site overview — hero, navigation, and donation surface in context",
    fullBleedImage: {
      src: "/projects/tanzeel-initiative/events-desktop.png",
      alt: "The Tanzeel Initiative events page — 'Upcoming Events' heading with Reminiscing Ramadan event card showing poster, date, location, and RSVP button",
    },
  },
  // [STRUCTURE AUDIT] — OUTCOME / IMPACT + LEARNINGS
  outcome: {
    impact:
      "The launch gave the organization a dependable home base for outreach, event promotion, and donor engagement instead of relying on scattered social posts. Community members gained one place to find programs, understand leadership, and take next steps without hunting across platforms.",
    throughLine:
      "This project reinforced that mission-driven websites need operational clarity as much as visual identity. If I extend this work, I would instrument deeper funnel tracking for event RSVP and donation completion to quantify where friction still exists.",
  },
};

export const MSA_UTA_NARRATIVE: NarrativeCaseStudy = {
  displayTitle: "MSA UT Arlington",
  kicker: "The Disciplined Canvas · Case study",
  roleLine: "Role: UI/UX Designer & Frontend Developer",
  tagline: "A membership-first campus hub for events, community, and connection.",
  bentoSummary: {
    coreProblem:
      "Scattered campus information weakened event discovery, membership sign-ups, and the sense of a connected community.",
    myRole:
      "UI/UX Designer & Frontend Developer. I owned information architecture, UI design, and implementation of responsive event and membership flows.",
    strategicDecision:
      "Membership-first IA: joining is obvious early, events are scannable objects, and RSVP stays coupled to discovery.",
    userBenefit:
      "Students can discover upcoming events and secure membership in a few taps — less searching, clearer next steps.",
  },
  // [STRUCTURE AUDIT] — OVERVIEW
  overview: {
    summary:
      "MSA UT Arlington needed a single digital hub where students and community members could understand the organization, discover events, and join without confusion. I designed and built the experience as a mobile-first system because most interactions happened between classes on phones.",
    challenge:
      "The project existed to reduce drop-off between intent and action. Instead of separate touchpoints for discovery and sign-up, the site needed one clear flow from interest to participation.",
    audience:
      "Primary users were UTA students trying to quickly find what is happening and how to join. Secondary users were community members looking for reliable event details and ways to connect.",
  },
  // [STRUCTURE AUDIT] — THE PROBLEM + ROLE & CONTRIBUTIONS + APPROACH
  strategicLogic: {
    designStrategy:
      "What was broken was wayfinding and momentum: users could hear about events but still struggle to find details, RSVP, or complete membership quickly. I owned UX and frontend execution, including information architecture, card-based event browsing, CTA hierarchy, and responsive implementation. The core approach was membership-first navigation with event-first scanning so users could decide and act in the same interaction.",
    visualIdentity:
      "Constraints were straightforward: low attention windows, mobile usage, and repeated return visits during active semesters. I iterated toward stronger hierarchy, larger tap targets, and predictable card patterns so people could parse event information in seconds. The visual system stayed minimal so content and actions stayed legible under real campus conditions.",
  },
  // [STRUCTURE AUDIT] — SOLUTION
  solution: {
    body:
      "The **home** experience leads with **purpose** (**faith** + **community**) and **dual CTAs**: **Become a Member** and **Explore Events**. **Event cards** are **mobile-optimized**: **high contrast**, **short labels**, and **predictable** actions so students can **decide in seconds**. **Membership** flows are **shortened** to **reduce abandonment** on small screens.",
    imagePlaceholders: [
      "Home — hero + dual CTAs",
      "Events listing — card pattern (mobile)",
    ],
    images: [
      {
        src: "/projects/msa-uta/hero-desktop.png",
        alt: "MSA UT Arlington homepage — hero with UTA mascot emblem, 'Welcome to MSA UT Arlington' headline, and dual CTAs: Become a Member and Explore Events",
        variant: "desktop",
      },
      {
        src: "/projects/msa-uta/events-mobile.png",
        alt: "MSA UT Arlington mobile view — Stay Connected section with Upcoming Events and View Calendar CTAs",
        variant: "mobile",
      },
    ],
    fullBleedCaption: "Full site overview — home hero, event cards, and membership flow in context",
    fullBleedImage: {
      src: "/projects/msa-uta/merch-desktop.png",
      alt: "MSA UT Arlington merch drop page — 'Wear the message. Order online.' headline with product photography collage",
    },
  },
  // [STRUCTURE AUDIT] — OUTCOME / IMPACT + LEARNINGS
  outcome: {
    impact:
      "The platform gave students a clearer path from discovery to participation by keeping events and membership actions tightly connected. For the organization, it established a consistent channel to communicate programs and convert interest into attendance and sign-ups.",
    throughLine:
      "This project taught me that student-facing platforms live or die on interaction speed, not feature count. If I continue iterating, I would add lightweight analytics around event CTR and membership completion to identify where mobile users still drop off.",
  },
};
