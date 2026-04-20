"use client";
import { useGSAP } from "@gsap/react";
import "./experience.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { Playfair_Display } from "next/font/google";
gsap.registerPlugin(ScrollTrigger);

const playfair = Playfair_Display({
  variable: "--playfair-font",
  subsets: ["latin"],
});

const Experience = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const points = gsap.utils.toArray<HTMLElement>(".exp-point");

      points.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 90%" },
            delay: (i % 5) * 0.09,
          },
        );
      });
    },
    { scope: containerRef },
  );

  return (
    <section id="experience" ref={containerRef}>
      <div className="exp-inner">
        <div className="section-eyebrow reveal">Experience</div>
        <h2 className={`${playfair.className} section-heading reveal`}>
          Where I&apos;ve
          <br />
          made an impact.
        </h2>
        <p className="section-sub reveal">
          What I&apos;ve worked on and shipped.
        </p>

        <div className="exp-timeline">
          <div className="exp-item">
            <div className="exp-left reveal">
              <div className="exp-period">Feb 2026 — Present</div>
              <div className={`${playfair.className} exp-co`}>UMBRELLA</div>
              <div className="exp-loc">Moscow, Russia</div>
            </div>
            <div className="exp-right">
              <div className="exp-title reveal">
                Fullstack Developer · Greenfield Project
              </div>
              <p className="exp-desc reveal">
                Solo developer of a new SIEM testing platform - built from
                scratch.
                <br />
                Currently in active development.
              </p>
              <div className="exp-chips">
                <span className="chip">ASP .NET</span>
                <span className="chip">C#</span>
                <span className="chip">OpenSearch</span>
                <span className="chip">Keycloak</span>
                <span className="chip">REST API</span>
                <span className="chip">Docker</span>
                <span className="chip">System Design</span>
                <span className="chip">Greenfield</span>
              </div>
            </div>
          </div>

          <div className="exp-item">
            <div className="exp-left reveal">
              <div className="exp-period">Jun 2024 - Feb 2026</div>
              <div className={`${playfair.className} exp-co`}>SAVRUS</div>
              <div className="exp-loc">Moscow, Russia</div>
            </div>
            <div className="exp-right">
              <div className="exp-title reveal">
                Frontend Developer · Team Lead
              </div>
              <p className="exp-desc reveal">
                Led core frontend development after a full team transition.
                Complete ownership - UI/UX, architecture, deployment, mentoring,
                and building a new product from scratch.
              </p>
              <div className="exp-list-items">
                <div className="exp-point">
                  <div className="exp-point-dot"></div>
                  <span>
                    Delivered full UI redesign from Figma to production;
                    migrated from Tailwind to SCSS + PostCSS for long-term
                    maintainability.
                  </span>
                </div>
                <div className="exp-point">
                  <div className="exp-point-dot"></div>
                  <span>
                    Implemented 6 major resources end-to-end - from requirements
                    to production.
                  </span>
                </div>
                <div className="exp-point">
                  <div className="exp-point-dot"></div>
                  <span>
                    Built data visualization tools with Chart.js and an SQL
                    visualization module with automatic chart detection.
                  </span>
                </div>
                <div className="exp-point">
                  <div className="exp-point-dot"></div>
                  <span>
                    Adopted Feature-Sliced Design; created full Docker
                    deployment tooling and authored deployment manuals.
                  </span>
                </div>
                <div className="exp-point">
                  <div className="exp-point-dot"></div>
                  <span>
                    Leading code reviews, mentoring, and currently building a
                    new web product from zero.
                  </span>
                </div>
              </div>
              <div className="exp-chips">
                <span className="chip">Svelte</span>
                <span className="chip">TypeScript</span>
                <span className="chip">SCSS</span>
                <span className="chip">FSD</span>
                <span className="chip">Chart.js</span>
                <span className="chip">Docker</span>
                <span className="chip">Team Lead</span>
              </div>
            </div>
          </div>

          <div className="exp-item">
            <div className="exp-left reveal">
              <div className="exp-period">Oct 2023 — Jun 2024</div>
              <div className={`${playfair.className} exp-co`}>SAVRUS</div>
              <div className="exp-loc">Moscow, Russia</div>
            </div>
            <div className="exp-right">
              <div className="exp-title reveal">.NET WPF Developer</div>
              <p className="exp-desc reveal">
                Worked on a hybrid desktop + backend system. Improved
                reliability, introduced versioning, and independently proposed
                features that shipped to production.
              </p>
              <div className="exp-list-items">
                <div className="exp-point">
                  <div className="exp-point-dot"></div>
                  <span>
                    Implemented full unit-test coverage for all gRPC methods —
                    significantly reduced regression risks.
                  </span>
                </div>
                <div className="exp-point">
                  <div className="exp-point-dot"></div>
                  <span>
                    Proposed and delivered field set functionality: create,
                    save, load, embed into business rules.
                  </span>
                </div>
                <div className="exp-point">
                  <div className="exp-point-dot"></div>
                  <span>
                    Designed a new DB table and implemented complete resource
                    version history with historical state viewing.
                  </span>
                </div>
              </div>
              <div className="exp-chips">
                <span className="chip">.NET</span>
                <span className="chip">WPF</span>
                <span className="chip">C#</span>
                <span className="chip">gRPC</span>
                <span className="chip">Unit Testing</span>
                <span className="chip">SQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
