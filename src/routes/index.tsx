import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Mail, Phone, Code2, Video, Sparkles, ExternalLink } from "lucide-react";
import { HeroScene } from "@/components/HeroScene";
import { ThemeToggle } from "@/components/ThemeToggle";
import sameerImageUrl from "@/assets/sameer.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sameer Ali Sharief — Web Developer & Video Editor" },
      { name: "description", content: "Portfolio of Sameer Ali Sharief — BCA student, web developer, JavaScript, video editor (short & long form) with AI workflows." },
      { property: "og:title", content: "Sameer Ali Sharief — Portfolio" },
      { property: "og:description", content: "Web developer & AI-powered video editor." },
    ],
  }),
  component: Index,
});

const skills = [
  { name: "HTML", icon: Code2 },
  { name: "CSS", icon: Code2 },
  { name: "JavaScript", icon: Code2 },
  { name: "MS Excel", icon: Code2 },
  { name: "Video Editing — Short Form", icon: Video },
  { name: "Video Editing — Long Form", icon: Video },
  { name: "AI in Video Production", icon: Sparkles },
];

const projects = [
  {
    title: "Personal Website",
    stack: ["HTML", "CSS", "JavaScript"],
    desc: "Built a multi-page responsive website from scratch using HTML, CSS, and JavaScript — clean layout, interactive components, and structured content.",
  },
  {
    title: "Short & Long Form Video Edits",
    stack: ["Editing", "AI Tools", "Color"],
    desc: "Edited short-form reels and long-form narrative videos. Integrated AI tools for cuts, captions, and enhancement.",
  },
  {
    title: "Data Management with Excel",
    stack: ["Excel", "Formulas", "Sorting"],
    desc: "Organized and analyzed datasets, performed calculations, sorted records, and built clean tabular reports.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/60 border-b border-border">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-lg font-bold tracking-tight">
            Sameer<span className="text-gradient">.</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition">About</a>
            <a href="#skills" className="hover:text-foreground transition">Skills</a>
            <a href="#projects" className="hover:text-foreground transition">Projects</a>
            <a href="#contact" className="hover:text-foreground transition">Contact</a>
          </div>
          <ThemeToggle />
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden bg-hero-grad pt-32 pb-24">
        <div className="absolute inset-0 -z-0 opacity-70">
          <HeroScene />
        </div>
        <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Available for freelance & internships
            </p>
            <h1 className="font-display text-5xl font-bold leading-[1.05] md:text-7xl">
              Sameer
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              BCA student, web developer, and AI-powered video editor. I build clean web experiences and craft short & long-form videos that feel alive.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground glow-ring transition hover:scale-105">
                View Projects
              </a>
              <a href="#contact" className="rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-medium backdrop-blur transition hover:bg-card">
                Get in Touch
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/40 to-accent/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-border glow-ring">
              <img
                src={sameerImageUrl}
                alt="Portrait of Sameer Ali Sharief"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-1">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">About</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">A maker of <span className="text-gradient">web & video</span></h2>
          </div>
          <div className="md:col-span-2 space-y-4 text-muted-foreground">
            <p>I'm a motivated BCA 2nd year student at Abdul Ahad Azad Memorial College with a strong foundation in web development, data handling, and video production.</p>
            <p>I love turning ideas into things you can see, click, and watch — from responsive web pages to polished short-form reels and long-form narratives, often powered by AI.</p>
            <div className="grid grid-cols-2 gap-4 pt-4 text-foreground">
              <div className="rounded-2xl border border-border bg-card p-4">
                <div className="text-2xl font-bold">BCA</div>
                <div className="text-xs text-muted-foreground">2nd Year, ongoing</div>
              </div>
              <div className="rounded-2xl border border-border bg-card p-4">
                <div className="text-2xl font-bold">3</div>
                <div className="text-xs text-muted-foreground">Languages spoken</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="border-y border-border bg-muted/30 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Technical Skills</p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">What I work with</h2>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {skills.map((s) => (
              <div key={s.name} className="group flex items-center gap-3 rounded-2xl border border-border bg-card p-4 transition hover:-translate-y-1 hover:border-primary/50">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                  <s.icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium">{s.name}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { k: "Soft", v: "Communication · Teamwork · Problem Solving" },
              { k: "Workflow", v: "Time Management · Adaptability" },
              { k: "Languages", v: "Hindi · English · Punjabi" },
            ].map((b) => (
              <div key={b.k} className="rounded-2xl border border-border bg-card p-5">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{b.k}</div>
                <div className="mt-2 text-sm">{b.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Projects</p>
        <h2 className="mt-2 text-3xl font-bold md:text-4xl">Selected work</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <article key={p.title} className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:glow-ring">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 blur-2xl" />
              <div className="relative">
                <div className="text-xs text-muted-foreground">0{i + 1}</div>
                <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span key={t} className="rounded-full border border-border bg-background px-3 py-1 text-xs">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative overflow-hidden border-t border-border bg-hero-grad py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Contact</p>
          <h2 className="mt-2 text-4xl font-bold md:text-6xl">Let's build something.</h2>
          <p className="mt-4 text-muted-foreground">Open to collaborations, freelance projects, and internships.</p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            <a href="https://github.com/sameeralisameer736-dev" target="_blank" rel="noreferrer"
               className="group flex items-center justify-between rounded-2xl border border-border bg-card p-5 text-left transition hover:-translate-y-1 hover:border-primary/50">
              <span className="flex items-center gap-3">
                <Github className="h-5 w-5" />
                <span>
                  <div className="text-xs text-muted-foreground">GitHub</div>
                  <div className="text-sm font-medium">@sameeralisameer736-dev</div>
                </span>
              </span>
              <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100 transition" />
            </a>
            <a href="https://www.linkedin.com/in/sameer-sharif-a8a68a294/" target="_blank" rel="noreferrer"
               className="group flex items-center justify-between rounded-2xl border border-border bg-card p-5 text-left transition hover:-translate-y-1 hover:border-primary/50">
              <span className="flex items-center gap-3">
                <Linkedin className="h-5 w-5" />
                <span>
                  <div className="text-xs text-muted-foreground">LinkedIn</div>
                  <div className="text-sm font-medium">Sameer Sharif</div>
                </span>
              </span>
              <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100 transition" />
            </a>
            <a href="mailto:sameeralisameer736@gmail.com"
               className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 text-left transition hover:-translate-y-1 hover:border-primary/50">
              <Mail className="h-5 w-5" />
              <span>
                <div className="text-xs text-muted-foreground">Email</div>
                <div className="text-sm font-medium">sameeralisameer736@gmail.com</div>
              </span>
            </a>
            <a href="tel:6006269599"
               className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 text-left transition hover:-translate-y-1 hover:border-primary/50">
              <Phone className="h-5 w-5" />
              <span>
                <div className="text-xs text-muted-foreground">Phone</div>
                <div className="text-sm font-medium">6006269599</div>
              </span>
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Sameer Ali Sharief — Crafted with React, Three.js & care.
      </footer>
    </div>
  );
}
