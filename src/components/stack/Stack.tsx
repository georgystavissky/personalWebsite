import { useRef } from "react";
import "./stack.scss";
import { Playfair_Display } from "next/font/google";
import { IoCodeSlash, IoServer } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { GiPaintBrush } from "react-icons/gi";
import { BiNetworkChart } from "react-icons/bi";
import { SiDocker } from "react-icons/si";
import StackCard from "./Stackcard";

const playfair = Playfair_Display({
  variable: "--playfair-font",
  subsets: ["latin"],
});

const Stack = () => {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section id="stack" ref={containerRef}>
      <div className="stack-inner">
        <div className="section-eyebrow reveal">Stack</div>
        <h2 className={`${playfair.className} section-heading reveal`}>
          Built with the
          <br />
          right tools.
        </h2>
        <p className="section-sub reveal">Technologies I use in production.</p>

        <div className="stack-grid">
          <StackCard
            icon={<IoCodeSlash />}
            title="Backend"
            tags={[
              "C#",
              ".NET 10",
              "ASP.NET Core",
              "FastEndpoints",
              "Dapper",
              "gRPC",
              "Quartz.NET",
              "Native AOT",
              "FluentValidation",
            ]}
          />
          <StackCard
            icon={<FaReact />}
            title="Frontend"
            tags={[
              "TypeScript",
              "Svelte",
              "React",
              "Tailwind",
              "SCSS / PostCSS",
              "Chart.js",
              "Figma",
            ]}
          />
          <StackCard
            icon={<IoServer />}
            title="Data"
            tags={[
              "PostgreSQL",
              "MariaDB",
              "ClickHouse",
              "OpenSearch",
              "Redis",
              "MinIO (S3)",
              "SQL",
              "DbUp",
            ]}
          />
          <StackCard
            icon={<GiPaintBrush />}
            title="Auth & Testing"
            tags={[
              "Keycloak (OIDC, JWT)",
              "xUnit",
              "Testcontainers",
              "NSubstitute",
              "Moq",
              "Contract tests",
              "E2E tests",
            ]}
          />

          <StackCard
            icon={<BiNetworkChart />}
            title="Architecture & Design"
            tags={[
              "Clean Architecture",
              "Feature-Sliced Design",
              "REST API",
              "Specification-driven work",
              "Code review",
              "Mentoring",
            ]}
          />
          <StackCard
            icon={<SiDocker />}
            title="Infrastructure & AI"
            tags={[
              "Docker",
              "Docker Compose",
              "GitLab CI",
              "Linux",
              "systemd",
              "Prometheus",
              "Grafana",
              "OpenTelemetry",
              "Claude Code",
              "Codex",
              "Local LLMs",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Stack;
