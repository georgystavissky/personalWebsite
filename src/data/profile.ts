export interface ExperienceItem {
  period: string;
  company: string;
  location: string;
  title: string;
  description: string;
  points: string[];
  tags: string[];
}

export interface StackGroup {
  id: "backend" | "frontend" | "data" | "quality" | "architecture" | "infra";
  title: string;
  tags: string[];
  /** Технологии, которые сейчас изучаю — подсвечиваются отдельно. */
  learning?: string[];
}

export interface Fact {
  label: string;
  value: string;
  note: string;
}

export interface InfoCard {
  label: string;
  lines: string[];
}

export const profile = {
  name: { first: "Georgii", last: "Stavisskii" },
  role: "Fullstack Developer",
  tagline: "I build backends, interfaces and the infrastructure around them.",

  facts: [
    {
      label: "Experience",
      value: "3 years",
      note: "Commercial product development",
    },
    {
      label: "Built solo",
      value: "2 platforms",
      note: "From scratch to handover",
    },
    {
      label: "Main stack",
      value: ".NET · TypeScript",
      note: "C#, Svelte, PostgreSQL, Docker",
    },
    {
      label: "Working mode",
      value: "Remote",
      note: "GMT +3, open to relocation",
    },
  ] satisfies Fact[],

  about: {
    eyebrow: "About",
    heading: "Backend, frontend, infrastructure.",
    paragraphs: [
      "Full-stack developer (**C# / .NET**, **TypeScript / Svelte**) with **3 years of commercial experience**. I build APIs, databases, interfaces, Docker environments and monitoring.",
      "I started with **.NET/WPF** desktop apps — that's where I learned to think in terms of architecture, not just UI. I've worked in SDD, TDD, EDD and cover my code with unit, integration and contract tests.",
      "I'm also moving towards **AI engineering**: studying RAG systems and how to build AI into real applications.",
    ],
    cards: [
      {
        label: "Current Position",
        lines: ["Fullstack Developer", "Umbrella LLC · Remote"],
      },
      {
        label: "Exploring",
        lines: ["AI engineering", "RAG systems, LLMs inside applications"],
      },
      {
        label: "Education",
        lines: [
          "Business Informatics (IT Systems)",
          "Moscow Univ. of Finance & Law · 2021–2025",
        ],
      },
      {
        label: "Languages",
        lines: [
          "Russian (native) · English B2 (IELTS Academic) · Korean (beginner)",
        ],
      },
    ] satisfies InfoCard[],
  },

  stack: {
    eyebrow: "Stack",
    heading: "What I work with.",
    sub: "Technologies I use in production, and what I'm learning.",
    groups: [
      {
        id: "backend",
        title: "Backend",
        tags: [
          "C#",
          "Python",
          "Go",
          "ASP.NET",
          "FastAPI",
          "Dapper",
          "gRPC",
          "Apache Kafka",
          "RabbitMQ",
        ],
      },
      {
        id: "frontend",
        title: "Frontend",
        tags: [
          "TypeScript",
          "Svelte",
          "Vue",
          "React",
          "Tailwind",
          "SCSS / PostCSS",
          "Chart.js",
          "Figma",
        ],
      },
      {
        id: "data",
        title: "Data",
        tags: [
          "PostgreSQL",
          "MariaDB",
          "ClickHouse",
          "OpenSearch",
          "MongoDB",
          "Redis",
          "S3 (MinIO)",
          "SQL",
        ],
      },
      {
        id: "quality",
        title: "Auth & Testing",
        tags: [
          "Keycloak (OIDC, JWT)",
          "xUnit",
          "TestContainers",
          "NSubstitute",
          "Moq",
          "Contract tests",
          "Unit tests",
          "Integration Tests",
          "E2E tests",
        ],
      },
      {
        id: "architecture",
        title: "Architecture & Practices",
        tags: [
          "Clean Architecture",
          "Feature-Sliced Design",
          "REST API",
          "Specific-driven development",
          "Code review",
          "Event-driven development",
          "Test-driven development",
          "Mentoring",
        ],
      },
      {
        id: "infra",
        title: "Infrastructure & AI",
        tags: [
          "Docker",
          "GitLab CI",
          "Linux",
          "Prometheus",
          "Grafana",
          "Claude Code",
          "Codex",
          "Local LLMs",
        ],
        learning: ["RAG"],
      },
    ] satisfies StackGroup[],
  },

  experience: {
    eyebrow: "Experience",
    heading: "Where I've worked.",
    sub: "Roles, projects and what I was responsible for.",
    items: [
      {
        period: "Feb 2026 — Present",
        company: "Umbrella LLC",
        location: "Remote",
        title: "Fullstack Developer",
        description:
          "Sole developer of two backend platforms, from scratch to handover, and a contributor to a large team SIEM project.",
        points: [
          "Partner, Customer and Downloads Portals: three .NET 10 services on a shared PostgreSQL database — 70+ endpoints, 15 tables, Keycloak auth with roles, MinIO presigned URLs, Prometheus and Grafana.",
          "Wrote 400+ automated tests (NSubstitute, Testcontainers)",
          "SIEM Testing Platform: REST API on .NET 10 (Native AOT) over OpenSearch, with a scheduler sending logs to external SIEMs via syslog (TCP/TLS), 100+ contract tests, and a GitLab CI/CD pipeline.",
          "SIEM API (~1,400 C# files, Clean Architecture): migrating a legacy gRPC core to direct database access, wrote a JSON rules API specification, brought up the multi-service stack in Docker and found the root cause of failed ClickHouse writes.",
        ],
        tags: [
          ".NET 10",
          "C#",
          "PostgreSQL",
          "OpenSearch",
          "ClickHouse",
          "Redis",
          "Keycloak",
          "Docker",
          "Testcontainers",
          "GitLab CI",
        ],
      },
      {
        period: "Jun 2024 — Feb 2026",
        company: "SAVRUS",
        location: "Remote",
        title: "Fullstack Developer · Team Lead",
        description:
          "Led core frontend development of a web platform after the team transition. Owned UI/UX, complex components, architecture and deployment.",
        points: [
          "Delivered a UI redesign from Figma to production; rebuilt the interface on Tailwind, later migrated to SCSS + PostCSS for maintainability.",
          "Implemented 6 major business features (resources) end-to-end — from requirements to production.",
          "Built data visualization tools with Chart.js and an SQL visualization module with automatic field and chart detection.",
          "Adopted Feature-Sliced Design and designed a solution for opening multiple resources on a single page.",
          "Created deployment tooling (Dockerfile, docker-compose, healthchecks, systemd for Ubuntu/CentOS) and deployment manuals.",
          "Code reviews, mentoring and setting development pace; led development of a web product from scratch.",
        ],
        tags: [
          "Svelte",
          "TypeScript",
          "SCSS",
          "FSD",
          "Chart.js",
          "Docker",
          "Team Lead",
        ],
      },
      {
        period: "Oct 2023 — Jun 2024",
        company: "SAVRUS",
        location: "Remote",
        title: ".NET WPF Developer",
        description:
          "Developed and maintained the WPF client of a SIEM system: new features, bug fixes and localization.",
        points: [
          "Covered all service and gRPC methods with xUnit unit, integration and e2e tests and wrote guides.",
          "Proposed and built field sets for business rules — approved and released to production.",
          "Improved database schema and implemented resource version history.",
        ],
        tags: [".NET", "WPF", "C#", "gRPC", "xUnit", "SQL"],
      },
    ] satisfies ExperienceItem[],
  },

  contact: {
    title: "Let's build something",
    accent: "extraordinary.",
    body: "Open to full-time roles, freelance projects, and good conversations.",
    telegram: "https://t.me/gestoff",
    emailUser: "georgystavissky",
    emailDomain: "gmail.com",
    setka: "https://set.ki/QM32oYK",
  },
};
