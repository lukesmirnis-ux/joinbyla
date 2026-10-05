import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Briefcase,
  CalendarClock,
  FileText,
  Handshake,
  Megaphone,
  ShieldCheck,
  Sparkles,
  Timer,
  Trophy,
  Users,
} from "lucide-react";
import logoAsset from "@/assets/byla-logo.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BYLA — Business Youth Leadership Association" },
      {
        name: "description",
        content:
          "BYLA connects ambitious high school students with real-world business challenges — case competitions, mentorship, and seed funding.",
      },
      {
        property: "og:title",
        content: "BYLA — Business Youth Leadership Association",
      },
      {
        property: "og:description",
        content:
          "Real case competitions, mentorship, and seed funding for ambitious high school students.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "What we do", href: "#about" },
  { label: "How it works", href: "#format" },
  { label: "Scoring", href: "#scoring" },
  { label: "Rules", href: "#rules" },
  { label: "Partners", href: "#partners" },
];

const STAGES = [
  {
    title: "Case Drop & Client Q&A",
    body: "The brief goes live through the BYLA portal with a livestream from the client. Teams get open-floor time to question the company before building.",
  },
  {
    title: "Strategy Sprint & Mentorship",
    body: "Teams of 2–4 research, build financial models, and construct pitch decks over a 48-hour sprint — with 1-on-1 mentor office hours along the way.",
  },
  {
    title: "Preliminary Screening",
    body: "Judges evaluate 10-slide decks blind against the 100-point rubric. Top teams advance to the live finals.",
  },
  {
    title: 'Live Finals & "Shark Tank" Pitch',
    body: "Finalists pitch to executive judges and a live audience — 8 minutes to present, 5 minutes of rapid-fire Q&A. Winners and seed grants announced live.",
  },
];

const RUBRIC = [
  {
    name: "Strategic Innovation",
    points: 25,
    focus: "Creativity, modern tactics & solution fit",
  },
  {
    name: "Delivery & Q&A",
    points: 25,
    focus: "Professionalism, slide quality & live pitch",
  },
  {
    name: "Financials & Feasibility",
    points: 20,
    focus: "Budget, ROI & realistic timeline",
  },
  {
    name: "Problem Analysis",
    points: 15,
    focus: "Data accuracy & root-cause identification",
  },
  {
    name: "Risk Mitigation",
    points: 15,
    focus: "Contingency planning & risk awareness",
  },
];

const RULES = [
  {
    icon: Users,
    label: "Eligibility",
    value: "High school students, grades 9–12 · teams of 2–4",
  },
  {
    icon: Handshake,
    label: "Open enrollment",
    value: "No school chapter required — independent teams from any school are eligible",
  },
  {
    icon: Trophy,
    label: "Team captain",
    value: "Every team designates one captain for submissions and official communications",
  },
  {
    icon: FileText,
    label: "Deliverables",
    value: "Written executive summary (PDF) + pitch deck (PDF or .pptx)",
  },
  {
    icon: ShieldCheck,
    label: "Blind judging",
    value: "No names, schools, or logos on submissions — only your assigned Team ID",
  },
  {
    icon: Sparkles,
    label: "AI policy",
    value: "Allowed for brainstorming and proofreading — never for the core strategy, and always disclosed",
  },
  {
    icon: Timer,
    label: "Pitch timing",
    value: "8-minute presentation + 5-minute judge Q&A, strictly enforced",
  },
  {
    icon: BookOpen,
    label: "Original work",
    value: "No outside coaching from parents, teachers, or industry experts once the brief drops",
  },
  {
    icon: CalendarClock,
    label: "Key dates",
    value: "Registration close, case release, and finals — announced at launch",
  },
];

const LEADERSHIP = [
  {
    role: "Executive Director",
    body: "Sets overall strategy, manages key partnerships, and oversees department heads.",
  },
  {
    role: "Director of Operations",
    body: "Handles event logistics, registration portals, community moderation, and timekeeping during pitches.",
  },
  {
    role: "Director of Marketing",
    body: "Runs social media channels, designs media kits, and recruits student participants.",
  },
  {
    role: "Director of Sponsorships",
    body: "Leads partner outreach to local businesses, secures case sponsors, and manages mentor recruitment.",
  },
  {
    role: "Director of Curriculum",
    body: "Drafts case prompts, updates competition rulebooks, coordinates judge briefing sheets, and manages scoring.",
  },
];

const TIERS = [
  {
    name: "Gold",
    price: "$1,000",
    perks: "Title naming rights for a competition track, keynote speaking slot, and prominent branding across all materials.",
    token: "text-gold ring-gold/30",
  },
  {
    name: "Silver",
    price: "$500",
    perks: 'Named award category (e.g. "Best Financial Strategy Award"), judging panel seat, and digital branding.',
    token: "text-silver ring-silver/30",
  },
  {
    name: "Bronze",
    price: "$250",
    perks: "Logo placement on all event collateral and a social media feature.",
    token: "text-bronze ring-bronze/30",
  },
];

function SectionLabel({ children }: { children: string }) {
  return (
    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
      {children}
    </span>
  );
}

function SectionHeading({ children }: { children: string }) {
  return (
    <h2 className="mt-3 font-display text-3xl font-medium leading-tight tracking-tight text-balance sm:text-4xl">
      {children}
    </h2>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 sm:flex sm:justify-between sm:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <img
            src={logoAsset.url}
            alt="BYLA logo"
            className="size-9 shrink-0 rounded-full ring-1 ring-border"
          />
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-display text-lg font-semibold tracking-tight">
              BYLA
            </span>
            <span className="hidden text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground sm:block">
              Business Youth Leadership
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-6 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <a
            href="#partners"
            className="hidden rounded-full px-4 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground sm:block lg:hidden"
          >
            Partners
          </a>
          <a
            href="#join"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Join
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pt-14 pb-16 sm:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-16 lg:pt-24 lg:pb-24">
        <div className="min-w-0 rise">
          <img
            src={logoAsset.url}
            alt="Business Youth Leadership Association logo"
            className="size-20 rounded-full ring-1 ring-border shadow-2xl sm:size-24"
          />
          <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
            Student-led · High school business league
          </p>
          <h1 className="mt-4 font-display text-[2.75rem] font-medium leading-[1.02] tracking-tight text-balance sm:text-6xl lg:text-[4.25rem]">
            The Future of Business Isn't Hypothetical.
          </h1>
          <p className="mt-6 max-w-[46ch] text-base leading-relaxed text-pretty text-foreground/70 sm:text-lg">
            The Business Youth Leadership Association (BYLA) connects ambitious
            high school students with real-world business challenges. Solve real
            case studies, earn industry mentorship, and launch your strategy
            career.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#join"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground ring-1 ring-primary/40 transition-transform hover:-translate-y-0.5"
            >
              Join Next Competition <ArrowRight className="size-4" />
            </a>
            <a
              href="#partners"
              className="inline-flex items-center justify-center rounded-xl glass px-6 py-3.5 text-sm font-semibold text-accent-foreground ring-1 ring-border transition-transform hover:-translate-y-0.5"
            >
              Partner As A Business
            </a>
          </div>
        </div>

        <div className="dossier rise rounded-2xl ring-1 ring-border p-5 sm:p-6 [animation-delay:120ms]">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent-foreground">
              Live Client Brief
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
              Sample dossier
            </span>
          </div>
          <h3 className="mt-3 font-display text-2xl font-medium tracking-tight">
            Apex Logistics
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-pretty text-foreground/70">
            A Series B supply-chain startup grew 200% year-over-year — but loses
            45% of its small-business customers within 90 days.
          </p>
          <p className="mt-3 border-l-2 border-primary/40 pl-3 text-sm leading-relaxed text-foreground/80">
            <span className="font-semibold">Your mandate:</span> design an
            automated onboarding & retention strategy to cut churn below 20%
            within 6 months.
          </p>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-lg bg-white/5 ring-1 ring-border px-3 py-2.5">
              <span className="block text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                Sprint length
              </span>
              <span className="text-sm font-semibold">48 hours</span>
            </div>
            <div className="rounded-lg bg-white/5 ring-1 ring-border px-3 py-2.5">
              <span className="block text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                Deck limit
              </span>
              <span className="text-sm font-semibold">10 content slides</span>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
            <span>Grades 9–12</span>
            <span>Open enrollment</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div className="min-w-0">
          <SectionLabel>What we do</SectionLabel>
          <SectionHeading>
            A launchpad, not a classroom.
          </SectionHeading>
          <p className="mt-5 text-base leading-relaxed text-pretty text-foreground/70">
            BYLA is a student-led organization that gives high school students
            real-world opportunities to explore business, entrepreneurship, and
            leadership. Your solutions get presented to actual executives — not
            stored in a binder.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Marketing",
              "Finance",
              "Management",
              "Strategy",
              "Entrepreneurship",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full glass px-3.5 py-1.5 text-sm font-medium ring-1 ring-border"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              icon: BookOpen,
              title: "Free workshops",
              body: "Hands-on sessions that build real business skills.",
            },
            {
              icon: Trophy,
              title: "Case competitions",
              body: "Team strategy challenges scored on a professional rubric.",
            },
            {
              icon: Sparkles,
              title: "Entrepreneurship programs",
              body: "From idea to pitch — build something that exists.",
            },
            {
              icon: Megaphone,
              title: "Guest speakers",
              body: "Founders, investors, and operators who do the work.",
            },
            {
              icon: Briefcase,
              title: "Real business challenges",
              body: "Live problems from actual local businesses and startups.",
            },
            {
              icon: Users,
              title: "A growing network",
              body: "Starting at one school, expanding through chapters everywhere.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl glass p-4 ring-1 ring-border"
            >
              <item.icon className="size-5 text-primary" />
              <h3 className="mt-3 font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-foreground/65">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Format() {
  return (
    <section id="format" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <SectionLabel>The format</SectionLabel>
        <SectionHeading>Four stages. One sprint.</SectionHeading>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STAGES.map((stage, i) => (
            <div
              key={stage.title}
              className="relative rounded-xl glass p-5 ring-1 ring-border"
            >
              <span className="font-display text-3xl font-medium text-primary/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-semibold leading-snug">{stage.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-pretty text-foreground/65">
                {stage.body}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-4 rounded-xl dossier p-5 ring-1 ring-border sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <h3 className="font-semibold">The judging panel</h3>
            <p className="mt-1 text-sm text-pretty text-foreground/65">
              1 executive from the partner company · 1 venture capitalist or
              angel investor · 1 senior university business student. Direct,
              constructive, realistic — no textbook questions.
            </p>
          </div>
          <BarChart3 className="size-6 shrink-0 text-primary sm:size-8" />
        </div>
      </div>
    </section>
  );
}

function Scoring() {
  return (
    <section id="scoring" className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16 lg:py-24">
        <div className="min-w-0">
          <SectionLabel>Scoring</SectionLabel>
          <SectionHeading>100 points, weighted.</SectionHeading>
          <p className="mt-5 max-w-[44ch] text-base leading-relaxed text-pretty text-foreground/70">
            Judges score with the same lens investors use — pushing on unit
            economics, operational risks, and implementation feasibility rather
            than textbook definitions. Every deck must include a system diagram,
            a 3-year financial model, and a go-to-market timeline.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {RUBRIC.map((item, i) => (
            <div key={item.name}>
              <div className="mb-1.5 flex items-baseline justify-between gap-4">
                <span className="text-sm font-semibold">{item.name}</span>
                <span className="font-display text-sm text-foreground/50">
                  {item.points}%
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-foreground/10">
                <div
                  className="bar-grow h-2 rounded-full bg-primary"
                  style={{ width: `${item.points}%`, animationDelay: `${i * 90}ms` }}
                />
              </div>
              <p className="mt-1 text-xs text-muted-foreground">{item.focus}</p>
            </div>
          ))}
          <p className="text-xs text-muted-foreground">
            Judging decisions are final. Plagiarism or copied strategies result
            in immediate disqualification.
          </p>
        </div>
      </div>
    </section>
  );
}

function Rules() {
  return (
    <section id="rules" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <SectionLabel>Rules at a glance</SectionLabel>
        <SectionHeading>What every team must know.</SectionHeading>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {RULES.map((rule) => (
            <div
              key={rule.label}
              className="rounded-xl glass p-5 ring-1 ring-border"
            >
              <rule.icon className="size-5 text-primary" />
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                {rule.label}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-pretty font-medium">
                {rule.value}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Dress code: smart casual / startup professional. All judge decisions
          follow the official 100-point BYLA Scoring Rubric.
        </p>
      </div>
    </section>
  );
}

function Leadership() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <SectionLabel>Leadership</SectionLabel>
        <SectionHeading>Run by students, for students.</SectionHeading>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {LEADERSHIP.map((person) => (
            <div
              key={person.role}
              className="rounded-xl glass p-5 ring-1 ring-border"
            >
              <h3 className="font-semibold leading-snug">{person.role}</h3>
              <p className="mt-2 text-sm leading-relaxed text-pretty text-foreground/65">
                {person.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section id="partners" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <SectionLabel>For businesses</SectionLabel>
        <SectionHeading>Put your brief on the table.</SectionHeading>
        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-3">
            <div className="rounded-xl glass p-5 ring-1 ring-border">
              <h3 className="font-semibold">Fresh insights</h3>
              <p className="mt-1 text-sm leading-relaxed text-pretty text-foreground/65">
                Get dozens of actionable strategy proposals solving a real
                challenge your business faces — market expansion, digital
                marketing, user acquisition.
              </p>
            </div>
            <div className="rounded-xl glass p-5 ring-1 ring-border">
              <h3 className="font-semibold">Community impact</h3>
              <p className="mt-1 text-sm leading-relaxed text-pretty text-foreground/65">
                Support the next generation of business leaders and gain brand
                visibility among high-achieving students and educators.
              </p>
            </div>
            <div className="rounded-xl glass p-5 ring-1 ring-border">
              <h3 className="font-semibold">Zero cost</h3>
              <p className="mt-1 text-sm leading-relaxed text-pretty text-foreground/65">
                Case partnership requires no monetary fee — only a real-world
                prompt and 1–2 team members on our final judging panel.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Sponsorship tiers
            </p>
            {TIERS.map((tier) => (
              <div
                key={tier.name}
                className="flex items-start justify-between gap-4 rounded-xl glass p-5 ring-1 ring-border"
              >
                <div className="min-w-0">
                  <span
                    className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] ring-1 ${tier.token}`}
                  >
                    {tier.name}
                  </span>
                  <p className="mt-2 text-sm leading-relaxed text-pretty text-foreground/70">
                    {tier.perks}
                  </p>
                </div>
                <span className="shrink-0 font-display text-2xl font-medium">
                  {tier.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaFooter() {
  return (
    <footer id="join" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="dossier rounded-2xl ring-1 ring-border p-6 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="min-w-0">
              <h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-balance sm:text-4xl">
                Bring a real problem. Get a real pitch.
              </h2>
              <p className="mt-4 max-w-[42ch] text-base leading-relaxed text-pretty text-foreground/70">
                Ready to cross the bridge from theory to practice? Register your
                team or partner as a business — key dates post as the season
                opens.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#top"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground ring-1 ring-primary/40 transition-transform hover:-translate-y-0.5"
                >
                  Join Next Competition <ArrowRight className="size-4" />
                </a>
                <a
                  href="#partners"
                  className="inline-flex items-center justify-center rounded-xl bg-white/5 px-6 py-3.5 text-sm font-semibold text-accent-foreground ring-1 ring-border transition-transform hover:-translate-y-0.5"
                >
                  Partner As A Business
                </a>
              </div>
            </div>
            <div className="rounded-xl glass divide-y divide-border ring-1 ring-border">
              {[
                { label: "Applications open", date: "TBD" },
                { label: "Registration closes", date: "TBD" },
                { label: "Case prompt released", date: "TBD" },
                { label: "Final pitch day", date: "TBD" },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between gap-4 px-5 py-4"
                >
                  <span className="min-w-0 truncate text-sm font-medium">
                    {row.label}
                  </span>
                  <span className="shrink-0 font-display text-sm text-muted-foreground">
                    {row.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-sm text-foreground/60">
            Questions, briefs, or partnerships — reach the team at{" "}
            <a
              href="mailto:hello@byla.org"
              className="font-medium text-accent-foreground underline underline-offset-2"
            >
              hello@byla.org
            </a>
          </p>
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
            BYLA · Student-led
          </p>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Format />
        <Scoring />
        <Rules />
        <Leadership />
        <Partners />
        <CtaFooter />
      </main>
    </div>
  );
}
