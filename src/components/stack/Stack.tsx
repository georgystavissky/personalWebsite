import { useRef } from "react";
import "./stack.scss";
import { Playfair_Display } from "next/font/google";
import { IoCodeSlash, IoServer } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { GiPaintBrush } from "react-icons/gi";
import { BiNetworkChart } from "react-icons/bi";
import { SiDocker } from "react-icons/si";

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
        <p className="section-sub reveal">
          Technologies I reach for — chosen for a reason, not just resume
          padding.
        </p>

        <div className="stack-grid">
          <div className="stack-card reveal">
            <span className="stack-card-icon">
              <IoCodeSlash />
            </span>
            <div className="stack-card-name">Languages</div>
            <div className="tag-list">
              <span className="tag">TypeScript</span>
              <span className="tag">JavaScript ES6+</span>
              <span className="tag">C#</span>
              <span className="tag">Go</span>
              <span className="tag">SQL</span>
              <span className="tag">HTML5</span>
              <span className="tag">CSS3</span>
            </div>
          </div>

          <div className="stack-card reveal">
            <span className="stack-card-icon">
              <FaReact />
            </span>
            <div className="stack-card-name">Frontend Frameworks</div>
            <div className="tag-list">
              <span className="tag">Svelte</span>
              <span className="tag">Next.js</span>
              <span className="tag">React</span>
            </div>
          </div>

          <div className="stack-card reveal">
            <span className="stack-card-icon">
              <IoServer />
            </span>
            <div className="stack-card-name">Backend & Databases</div>
            <div className="tag-list">
              <span className="tag">.NET</span>
              <span className="tag">Node.js</span>
              <span className="tag">Bun</span>
              <span className="tag">PostgreSQL</span>
              <span className="tag">MongoDB</span>
              <span className="tag">Gorm</span>
              <span className="tag">gRPC</span>
              <span className="tag">REST API</span>
            </div>
          </div>

          <div className="stack-card reveal">
            <span className="stack-card-icon">
              <GiPaintBrush />
            </span>
            <div className="stack-card-name">Styling & Animation</div>
            <div className="tag-list">
              <span className="tag">SCSS/SASS</span>
              <span className="tag">Tailwind CSS</span>
              <span className="tag">PostCSS</span>
              <span className="tag">GSAP</span>
            </div>
          </div>

          <div className="stack-card reveal">
            <span className="stack-card-icon">
              <BiNetworkChart />
            </span>
            <div className="stack-card-name">Architecture & Design</div>
            <div className="tag-list">
              <span className="tag">Feature-Sliced Design</span>
              <span className="tag">Vertical-Slice Design</span>
              <span className="tag">WebSockets</span>
              <span className="tag">System Design</span>
            </div>
          </div>

          <div className="stack-card reveal">
            <span className="stack-card-icon">
              <SiDocker />
            </span>
            <div className="stack-card-name">DevOps & Tools</div>
            <div className="tag-list">
              <span className="tag">Docker</span>
              <span className="tag">docker-compose</span>
              <span className="tag">Linux</span>
              <span className="tag">systemd</span>
              <span className="tag">Bash</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stack;
