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

export const TANZEEL_NARRATIVE: NarrativeCaseStudy = {
  displayTitle: "The Tanzeel Initiative",
  kicker: "The Disciplined Canvas · Case study",
  roleLine: "UI Designer.",
  tagline: "A nonprofit web presence that converts support while communicating mission.",
  bentoSummary: {
    coreProblem:
      "Two competing user journeys — donate now vs. learn more — risked undermining each other without clear hierarchy.",
    myRole:
      "UI Designer. Responsible for the full visual system and information architecture.",
    strategicDecision:
      "Deliberately separate the Donate and Explore hierarchies so giving is immediate and unambiguous, while discovery remains rewarding.",
    userBenefit:
      "Donors complete their gift without friction; community members find programs and story without hunting.",
  },
  overview: {
    summary:
      "**The Tanzeel Initiative** is a nonprofit web presence that must **convert support** while **communicating mission**.",
    challenge:
      "The organization had to **balance two journeys**: **drive immediate, frictionless donations** and **educate** visitors on **mission** and **impact**—without letting one path **cannibalize** the other.",
    audience:
      "**Prospective donors** seeking a **credible, low-friction** giving path, and **community members** who need to **discover** programs, **events**, and **story** without hunting.",
  },
  strategicLogic: {
    designStrategy:
      "I **separated** the **Donate** and **Explore** hierarchies **on purpose**: **giving** stays **immediate** and **unambiguous**; **learning** stays **scannable** and **optional**. That **prevents friction** in the **gift moment** while still **rewarding** curiosity with **clear** next steps.",
    visualIdentity:
      "A **dark field** with **gold** accents signals **reverence** and **institutional trust** without clutter. **Typography** pairs **modern clarity** for navigation with **ceremonial weight** around the **emblem** and **hero**—**Kanso** here means **few elements**, **high contrast**, and **no decorative noise** competing with **mission** or **money**.",
  },
  solution: {
    body:
      "The **hero** lands **purpose** and **credibility** in one view: **wordmark**, **primary CTAs**, and **social proof** hooks. **Navigation** mirrors real user intent. The **final UI** keeps **donation** **visibly primary** while **education** and **community** remain **one click** away—**confident**, **calm**, and **legible** on **mobile**.",
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
  outcome: {
    impact:
      "The intended experience is **dual success**: **donors** move through a **seamless**, **confidence-inspiring** path to **contribute**, and **community members** can **effortlessly** **discover** **educational** and **programmatic** value.",
    throughLine:
      "**Separation of hierarchies** is the **strategic lever**—it protects **conversion** and **comprehension** at the same time. **Trust** is **designed**, not **claimed**: **gold** and **dark** establish **tone**; **hierarchy** establishes **behavior**.",
  },
};

export const MSA_UTA_NARRATIVE: NarrativeCaseStudy = {
  displayTitle: "MSA UT Arlington",
  kicker: "The Disciplined Canvas · Case study",
  roleLine: "UI Designer.",
  tagline: "A membership-first campus hub for events, community, and connection.",
  bentoSummary: {
    coreProblem:
      "Scattered campus information weakened event discovery, membership sign-ups, and the sense of a connected community.",
    myRole:
      "UI Designer. Responsible for information architecture and mobile-optimized UI patterns.",
    strategicDecision:
      "Membership-first IA: joining is obvious early, events are scannable objects, and RSVP stays coupled to discovery.",
    userBenefit:
      "Students can discover upcoming events and secure membership in a few taps — less searching, clearer next steps.",
  },
  overview: {
    summary:
      "**MSA UT Arlington** needed a **single public hub** for **membership** and **events** on campus.",
    challenge:
      "**Campus information** was **scattered**, which weakened **event discovery**, **membership sign-ups**, and the sense of a **connected** community. The site had to **orient** students **fast** and **convert** intent into **action** on **mobile**.",
    audience:
      "**UTA students** (and allies) who need **upcoming events**, **membership**, and **community** access **between classes**—often **on the phone**, **in motion**.",
  },
  strategicLogic: {
    designStrategy:
      "I implemented **membership-first IA**: **join** is **obvious** early, not buried under **news** or **static pages**. **Events** are **surfaced** as **scannable objects**, not long paragraphs—so **discovery** and **RSVP** stay **coupled** for **busy** users.",
    visualIdentity:
      "**Kanso** translates to **clarity over decoration**: **strong** typographic hierarchy, **ample** spacing, and **card-based** patterns that **read** at a glance. **Legibility** and **tap targets** are **primary assets**—the brand should feel **welcoming** and **organized**, not **busy**.",
  },
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
  outcome: {
    impact:
      "The design targets **behavioral** outcomes: **instant** **event discovery** and **low-friction** **membership** in **few taps**. The **primary benefit** is **operational** for students—**less searching**, **clearer** **next steps**, and a **more connected** **campus** experience.",
    throughLine:
      "**Membership-first** is **community-first**: when **joining** is **easy**, **everything else** (events, culture, retention) gets **lighter**.",
  },
};
