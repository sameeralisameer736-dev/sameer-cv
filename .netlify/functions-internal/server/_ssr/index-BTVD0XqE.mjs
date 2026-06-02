import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { C as Canvas, a as useFrame } from "../_libs/react-three__fiber.mjs";
import { C as CodeXml, V as Video, S as Sparkles, G as Github, E as ExternalLink, L as Linkedin, M as Mail, P as Phone, a as Sun, b as Moon } from "../_libs/lucide-react.mjs";
import { F as Float, S as Sphere, T as Torus, O as OrbitControls, M as MeshDistortMaterial } from "../_libs/react-three__drei.mjs";
import "../_libs/three.mjs";
import "../_libs/zustand.mjs";
import "../_libs/use-sync-external-store.mjs";
import "../_libs/scheduler.mjs";
import "../_libs/its-fine.mjs";
import "../_libs/react-use-measure.mjs";
import "../_libs/babel__runtime.mjs";
import "../_libs/three-stdlib.mjs";
function Knot({ color, distort, roughness, metalness }) {
  const ref = reactExports.useRef(null);
  useFrame((_, dt) => {
    if (ref.current) {
      ref.current.rotation.x += dt * 0.2;
      ref.current.rotation.y += dt * 0.3;
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { ref, position: [0, 0, 0], scale: 1.2, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("torusKnotGeometry", { args: [1, 0.32, 220, 32] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MeshDistortMaterial, { color, distort, speed: 1.8, roughness, metalness })
  ] });
}
function useThemeColors() {
  const [dark, setDark] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const update = () => setDark(document.documentElement.classList.contains("dark"));
    update();
    const obs = new MutationObserver(update);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);
  return dark;
}
function HeroScene() {
  const dark = useThemeColors();
  if (!dark) return null;
  const c = {
    knot: "#5b8def",
    sphere: "#7aa2ff",
    torus: "#3b6df0",
    dir1: "#9ec5ff",
    dir2: "#4361ee",
    ambient: 0.4,
    metalness: 0.6,
    roughness: 0.2,
    distort: 0.35
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Canvas, { camera: { position: [0, 0, 5], fov: 50 }, dpr: [1, 2], children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("ambientLight", { intensity: c.ambient }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("directionalLight", { position: [3, 3, 5], intensity: 1.4, color: c.dir1 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("directionalLight", { position: [-4, -2, -3], intensity: 0.6, color: c.dir2 }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Suspense, { fallback: null, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Float, { speed: 2, rotationIntensity: 0.6, floatIntensity: 1.2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Knot, { color: c.knot, distort: c.distort, roughness: c.roughness, metalness: c.metalness }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Float, { speed: 1.2, floatIntensity: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sphere, { args: [0.3, 32, 32], position: [2.2, 1.4, -1], children: /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: c.sphere, metalness: c.metalness, roughness: c.roughness }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Float, { speed: 1.6, floatIntensity: 1.5, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Torus, { args: [0.4, 0.12, 16, 64], position: [-2.3, -1.2, -1], children: /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: c.torus, metalness: c.metalness, roughness: c.roughness }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(OrbitControls, { enableZoom: false, enablePan: false, autoRotate: true, autoRotateSpeed: 0.6 })
  ] });
}
function ThemeToggle() {
  const [dark, setDark] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved ? saved === "dark" : true;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      onClick: toggle,
      "aria-label": "Toggle theme",
      className: "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/60 backdrop-blur transition hover:bg-card hover:scale-105",
      children: dark ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-4 w-4" })
    }
  );
}
const sameerImageUrl = "/assets/sameer-D5QKaLhC.jpeg";
const skills = [{
  name: "HTML",
  icon: CodeXml
}, {
  name: "CSS",
  icon: CodeXml
}, {
  name: "JavaScript",
  icon: CodeXml
}, {
  name: "MS Excel",
  icon: CodeXml
}, {
  name: "Video Editing — Short Form",
  icon: Video
}, {
  name: "Video Editing — Long Form",
  icon: Video
}, {
  name: "AI in Video Production",
  icon: Sparkles
}];
const projects = [{
  title: "Personal Website",
  stack: ["HTML", "CSS", "JavaScript"],
  desc: "Built a multi-page responsive website from scratch using HTML, CSS, and JavaScript — clean layout, interactive components, and structured content."
}, {
  title: "Short & Long Form Video Edits",
  stack: ["Editing", "AI Tools", "Color"],
  desc: "Edited short-form reels and long-form narrative videos. Integrated AI tools for cuts, captions, and enhancement."
}, {
  title: "Data Management with Excel",
  stack: ["Excel", "Formulas", "Sorting"],
  desc: "Organized and analyzed datasets, performed calculations, sorted records, and built clean tabular reports."
}];
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/60 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "mx-auto flex max-w-6xl items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "font-display text-lg font-bold tracking-tight", children: [
        "Sameer",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex items-center gap-8 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#about", className: "hover:text-foreground transition", children: "About" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#skills", className: "hover:text-foreground transition", children: "Skills" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#projects", className: "hover:text-foreground transition", children: "Projects" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "hover:text-foreground transition", children: "Contact" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggle, {})
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "top", className: "relative overflow-hidden bg-hero-grad pt-32 pb-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-0 opacity-70", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeroScene, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-[1.2fr_1fr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary animate-pulse" }),
            "Available for freelance & internships"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl font-bold leading-[1.05] md:text-7xl", children: [
            "Sameer Ali ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Sharief" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-lg text-muted-foreground", children: "BCA student, web developer, and AI-powered video editor. I build clean web experiences and craft short & long-form videos that feel alive." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#projects", className: "rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground glow-ring transition hover:scale-105", children: "View Projects" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-medium backdrop-blur transition hover:bg-card", children: "Get in Touch" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto w-full max-w-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/40 to-accent/30 blur-2xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-hidden rounded-3xl border border-border glow-ring", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: sameerImageUrl, alt: "Portrait of Sameer Ali Sharief", className: "aspect-[3/4] w-full object-cover" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "mx-auto max-w-6xl px-6 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "About" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-2 text-3xl font-bold md:text-4xl", children: [
          "A maker of ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "web & video" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2 space-y-4 text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "I'm a motivated BCA 2nd year student at Abdul Ahad Azad Memorial College with a strong foundation in web development, data handling, and video production." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "I love turning ideas into things you can see, click, and watch — from responsive web pages to polished short-form reels and long-form narratives, often powered by AI." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4 pt-4 text-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold", children: "BCA" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "2nd Year, ongoing" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold", children: "3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Languages spoken" })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "skills", className: "border-y border-border bg-muted/30 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Technical Skills" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-3xl font-bold md:text-4xl", children: "What I work with" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4", children: skills.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex items-center gap-3 rounded-2xl border border-border bg-card p-4 transition hover:-translate-y-1 hover:border-primary/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: s.name })
      ] }, s.name)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid gap-4 md:grid-cols-3", children: [{
        k: "Soft",
        v: "Communication · Teamwork · Problem Solving"
      }, {
        k: "Workflow",
        v: "Time Management · Adaptability"
      }, {
        k: "Languages",
        v: "Hindi · English · Punjabi"
      }].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: b.k }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-sm", children: b.v })
      ] }, b.k)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "projects", className: "mx-auto max-w-6xl px-6 py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Projects" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-3xl font-bold md:text-4xl", children: "Selected work" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-6 md:grid-cols-3", children: projects.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:glow-ring", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 blur-2xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
            "0",
            i + 1
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-xl font-semibold", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: p.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex flex-wrap gap-2", children: p.stack.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border bg-background px-3 py-1 text-xs", children: t }, t)) })
        ] })
      ] }, p.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "relative overflow-hidden border-t border-border bg-hero-grad py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Contact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-4xl font-bold md:text-6xl", children: "Let's build something." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Open to collaborations, freelance projects, and internships." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 grid gap-3 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://github.com/sameeralisameer736-dev", target: "_blank", rel: "noreferrer", className: "group flex items-center justify-between rounded-2xl border border-border bg-card p-5 text-left transition hover:-translate-y-1 hover:border-primary/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-5 w-5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "GitHub" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: "@sameeralisameer736-dev" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-4 w-4 opacity-50 group-hover:opacity-100 transition" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.linkedin.com/in/sameer-sharif-a8a68a294/", target: "_blank", rel: "noreferrer", className: "group flex items-center justify-between rounded-2xl border border-border bg-card p-5 text-left transition hover:-translate-y-1 hover:border-primary/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "h-5 w-5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "LinkedIn" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: "Sameer Sharif" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-4 w-4 opacity-50 group-hover:opacity-100 transition" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:sameeralisameer736@gmail.com", className: "flex items-center gap-3 rounded-2xl border border-border bg-card p-5 text-left transition hover:-translate-y-1 hover:border-primary/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-5 w-5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: "sameeralisameer736@gmail.com" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:6006269599", className: "flex items-center gap-3 rounded-2xl border border-border bg-card p-5 text-left transition hover:-translate-y-1 hover:border-primary/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Phone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: "6006269599" })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "border-t border-border py-8 text-center text-xs text-muted-foreground", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Sameer Ali Sharief — Crafted with React, Three.js & care."
    ] })
  ] });
}
export {
  Index as component
};
