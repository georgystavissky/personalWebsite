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
            title="Languages"
            tags={[
              "TypeScript",
              "JavaScript ES6+",
              "C#",
              "Go",
              "SQL",
              "HTML5",
              "CSS3",
            ]}
          />
          <StackCard
            icon={<FaReact />}
            title="Frontend Frameworks"
            tags={["Svelte", "Next.js", "React", "Vue.js"]}
          />
          <StackCard
            icon={<IoServer />}
            title="Backend & Databases"
            tags={[
              ".NET",
              "Node.js",
              "Bun",
              "Gorm",
              "PostgreSQL",
              "MongoDB",
              "OpenSearch",
            ]}
          />
          <StackCard
            icon={<GiPaintBrush />}
            title="Styling & Animation"
            tags={["SCSS/SASS", "Tailwind CSS", "PostCSS", "GSAP"]}
          />

          <StackCard
            icon={<BiNetworkChart />}
            title="Architecture & Design"
            tags={[
              "Feature-Sliced Design",
              "Vertical-Slice Design",
              "REST API",
              "WebSockets",
              "System Design",
            ]}
          />
          <StackCard
            icon={<SiDocker />}
            title="DevOps & Tools"
            tags={[
              "Docker",
              "Redis",
              "docker-compose",
              "Linux",
              "systemd",
              "Bash",
              "gRPC",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Stack;
