// [HARD CONSISTENCY FIX] — root cause: project pages used different component-specific typography/spacing systems, tokens applied: yes, cross-checked: yes
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteFooter } from "@/components/layout/SiteFooter";

// [CONSISTENCY AUDIT] — normalized GigATax docs to the same container, heading hierarchy, metadata grid, and spacing/type tokens as the other project documentation pages.
const HL =
  "[font-family:var(--font-stitch-headline,var(--font-kanso-heading),ui-sans-serif,sans-serif)]";
const BODY =
  "[font-family:var(--font-stitch-body,var(--font-inter),ui-sans-serif,sans-serif)]";
const LABEL =
  `text-xs font-bold uppercase tracking-widest text-[color:var(--accent-red)]/80 ${HL}`;
const PROSE =
  `max-w-4xl text-base leading-relaxed text-[#1e1c0b]/92 md:text-lg ${BODY}`;
const H1 =
  `text-5xl font-black uppercase leading-[0.95] tracking-tight text-[color:var(--accent-red)] md:text-6xl ${HL}`;
const SECTION_HEADING =
  `text-2xl font-semibold leading-tight tracking-tight text-[#1e1c0b] md:text-3xl ${HL}`;
const SECTION =
  "mx-auto mb-16 max-w-4xl border-b border-[rgba(30,28,11,0.1)] pb-16 md:mb-24 md:pb-24";
const META_CARD =
  "rounded-[2px] border border-[#1e1c0b]/15 bg-[#fff9e8] p-5 shadow-[0_6px_20px_rgba(30,28,11,0.05)]";
const META_LABEL = `text-xs font-bold uppercase tracking-wider text-[#1e1c0b]/70 ${HL}`;
const META_VALUE = "mt-1 text-sm font-medium leading-relaxed text-[#1e1c0b]/88";
const TAG =
  `rounded-[2px] border border-[color:var(--accent-red)] bg-[color:var(--accent-red)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#fff9e8] shadow-[0_4px_12px_rgba(30,28,11,0.08)] ${HL}`;
const CALLOUT =
  "rounded-[2px] border border-[#1e1c0b]/12 border-l-2 border-l-[color:var(--accent-red)] bg-[#fff9e8]/75 px-6 py-6 shadow-[0_10px_26px_rgba(30,28,11,0.05)] sm:px-8";

export function GigATaxCaseStudyDocs() {
  return (
    <div className={`min-h-dvh bg-[#fdf9ea] text-[#1e1c0b] ${BODY}`}>
      <section className="border-b border-[rgba(30,28,11,0.10)] px-6 pb-16 pt-8 md:px-12 md:pb-24">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/projects"
            className={`mb-12 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[color:var(--accent-red)] transition-colors duration-200 hover:text-[#1e1c0b] ${HL}`}
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
            Projects
          </Link>

          <p className={`mb-5 ${LABEL}`}>Hackathon Project — hack.msa 2026</p>

          <h1 className={H1}>
            GigATax
          </h1>

          <p className={`mt-6 max-w-4xl text-lg leading-relaxed text-[#1e1c0b]/88 md:text-xl ${BODY}`}>
            Taxes built for creators, streamers, and everyone else the IRS forgot.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div className={META_CARD}>
              <p className={META_LABEL}>Role</p>
              <p className={META_VALUE}>UI/UX Designer &amp; Frontend Developer</p>
            </div>
            <div className={META_CARD}>
              <p className={META_LABEL}>Team</p>
              <p className={META_VALUE}>Zubair Rashaad, Yousuf Riaz, Omar Ali, Rayden Siarot</p>
            </div>
            <div className={META_CARD}>
              <p className={META_LABEL}>Hackathon</p>
              <p className={META_VALUE}>hack.msa 2026</p>
            </div>
          </div>

          <div className="mt-6">
            <p className={`mb-3 text-xs font-bold uppercase tracking-widest text-[#1e1c0b]/62 ${HL}`}>
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              <span className={TAG}>React</span>
              <span className={TAG}>Tailwind CSS</span>
              <span className={TAG}>Vite</span>
              <span className={TAG}>FastAPI</span>
              <span className={TAG}>Python</span>
              <span className={TAG}>Supabase</span>
              <span className={TAG}>Plaid</span>
              <span className={TAG}>Claude Sonnet (Anthropic)</span>
              <span className={TAG}>Google OAuth</span>
            </div>
          </div>
        </div>
      </section>

      <div className="px-6 md:px-12">
        <main className="mx-auto max-w-6xl py-16 pb-24 md:py-24 md:pb-32">
          {/* [STRUCTURE AUDIT] — OVERVIEW */}
          <section className={SECTION}>
            <p className={`mb-8 ${LABEL}`}>Overview</p>
            <h2 className={`mb-3 ${SECTION_HEADING}`}>Project overview</h2>
            <p className={PROSE}>
              GigATax is a hackathon-built tax workflow designed for creators, freelancers, and other independent workers who do not fit W2 assumptions. We built it to help users understand what they owe in real time and identify deductions before tax season pressure hits. The product serves people who need fast clarity, not accountant-level setup friction.
            </p>
          </section>

          {/* [STRUCTURE AUDIT] — THE PROBLEM */}
          <section className={SECTION}>
            <p className={`mb-8 ${LABEL}`}>The problem</p>
            <h2 className={`mb-3 ${SECTION_HEADING}`}>The problem</h2>
            <p className={PROSE}>
              Independent workers track income across multiple platforms, pay estimated taxes themselves, and manage expenses that vary by profession. Most tools treat them like traditional employees, which leads to missed write-offs and surprise tax bills. What was at stake was financial confidence: users needed to see tax impact early enough to act.
            </p>
          </section>

          {/* [STRUCTURE AUDIT] — ROLE & CONTRIBUTIONS */}
          <section className={SECTION}>
            <p className={`mb-8 ${LABEL}`}>Role &amp; contributions</p>
            <h2 className={`mb-3 ${SECTION_HEADING}`}>What I owned</h2>
            <ul className="space-y-6">
              <li className={CALLOUT}>
                <p className={PROSE}>Defined the product IA and end-to-end UX flow from transaction ingestion to deduction resolution.</p>
              </li>
              <li className={CALLOUT}>
                <p className={PROSE}>Designed the dashboard and review states to make tax status and next actions clear at a glance.</p>
              </li>
              <li className={CALLOUT}>
                <p className={PROSE}>Built frontend interfaces and collaborated with teammates on backend and AI-assisted categorization behavior.</p>
              </li>
            </ul>
          </section>

          {/* [STRUCTURE AUDIT] — APPROACH / DESIGN PROCESS */}
          <section className={SECTION}>
            <p className={`mb-8 ${LABEL}`}>Approach</p>
            <h2 className={`mb-3 ${SECTION_HEADING}`}>Approach / design process</h2>
            <p className={`${PROSE} mb-8`}>
              This was a constrained hackathon sprint, so we optimized for a usable core loop instead of full tax-platform breadth. I focused on decisions that reduced uncertainty quickly: show transaction status early, surface confidence, and route ambiguous items into a guided review queue. We iterated around speed, clarity, and demo reliability rather than long-term product polish.
            </p>
            <ul className="space-y-6">
              <li className={CALLOUT}>
                <p className={PROSE}>Bank connections via Plaid sync transactions automatically</p>
              </li>
              <li className={CALLOUT}>
                <p className={PROSE}>Claude Sonnet (Anthropic) reads merchant, amount, and gig type together to categorize each transaction, score its confidence, and determine deductibility in a single pass</p>
              </li>
              <li className={CALLOUT}>
                <p className={PROSE}>A receipt scanner uses Claude&apos;s vision API to extract data from images and PDFs automatically</p>
              </li>
              <li className={CALLOUT}>
                <p className={PROSE}>A deduction discovery layer runs across a user&apos;s full transaction history to surface write-offs they would have otherwise missed</p>
              </li>
              <li className={CALLOUT}>
                <p className={PROSE}>A real-time dashboard shows the live tax impact of every transaction the moment it happens</p>
              </li>
            </ul>
          </section>

          {/* [STRUCTURE AUDIT] — SOLUTION */}
          <section className={SECTION}>
            <p className={`mb-8 ${LABEL}`}>Solution</p>
            <h2 className={`mb-3 ${SECTION_HEADING}`}>What was built</h2>
            <p className={PROSE}>
              We shipped a working product flow where users can connect accounts, view categorized transactions, and understand how each transaction affects tax exposure. The system combines automated classification with human-in-the-loop review so unclear items do not silently fail. The interface is structured around one clear loop: detect, explain, resolve, and update the live dashboard.
            </p>
          </section>

          {/* [STRUCTURE AUDIT] — OUTCOME / IMPACT */}
          <section className={SECTION}>
            <p className={`mb-8 ${LABEL}`}>Outcome</p>
            <h2 className={`mb-3 ${SECTION_HEADING}`}>Outcome / impact</h2>
            <ul className="space-y-6">
              <li className={CALLOUT}>
                <p className={PROSE}>We delivered a functional demo that proved real-time tax feedback is feasible for gig-worker transaction patterns.</p>
              </li>
              <li className={CALLOUT}>
                <p className={PROSE}>The review queue demonstrated a clear trust model: users can inspect flagged transactions and immediately see updated tax impact after confirmation.</p>
              </li>
            </ul>
          </section>

          {/* [STRUCTURE AUDIT] — LEARNINGS */}
          <section className="mx-auto max-w-4xl">
            <p className={`mb-8 ${LABEL}`}>Learnings</p>
            <h2 className={`mb-3 ${SECTION_HEADING}`}>What I learned</h2>
            <ul className="space-y-6">
              <li className={CALLOUT}>
                <p className={PROSE}>Speed constraints force prioritization clarity: one reliable decision loop creates more value than a broad but shallow feature list.</p>
              </li>
              <li className={CALLOUT}>
                <p className={PROSE}>Context is the hard part of tax UX; categorization quality depends on user profile and work type, not merchant name alone.</p>
              </li>
              <li className={CALLOUT}>
                <p className={PROSE}>If this moved beyond hackathon scope, I would prioritize production validation for categorization accuracy before adding filing features.</p>
              </li>
            </ul>
          </section>
        </main>
      </div>

      <SiteFooter />
    </div>
  );
}
