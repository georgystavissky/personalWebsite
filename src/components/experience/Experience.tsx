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
              <div className={`${playfair.className} exp-co`}>Umbrella LLC</div>
              <div className="exp-loc">Remote</div>
            </div>
            <div className="exp-right">
              <div className="exp-title reveal">Fullstack Developer</div>
              <p className="exp-desc reveal">
                Sole developer of two backend platforms, from scratch to
                handover, plus a contributor to a large team SIEM project.
              </p>
              <div className="exp-list-items">
                <div className="exp-point">
                  <div className="exp-point-dot"></div>
                  <span>
                    Partner, Customer and Downloads Portals: three .NET 10
                    services on a shared PostgreSQL database — 70+ endpoints, 15
                    tables, Keycloak auth with 5 roles, MinIO presigned URLs,
                    Prometheus and Grafana.
                  </span>
                </div>
                <div className="exp-point">
                  <div className="exp-point-dot"></div>
                  <span>
                    Wrote 200+ automated tests (NSubstitute, Testcontainers);
                    after a month of QA testing no new bugs were reported.
                    Agreed the specification with a systems analyst.
                  </span>
                </div>
                <div className="exp-point">
                  <div className="exp-point-dot"></div>
                  <span>
                    SIEM Testing Platform: REST API on .NET 10 (Native AOT) over
                    OpenSearch, with a scheduler sending logs to external SIEMs
                    via syslog (TCP/TLS), 82 contract tests and a GitLab CI/CD
                    pipeline.
                  </span>
                </div>
                <div className="exp-point">
                  <div className="exp-point-dot"></div>
                  <span>
                    SIEM API (~1,400 C# files, Clean Architecture): migrating a
                    legacy gRPC core to direct database access, wrote a JSON
                    rules API specification, brought up the multi-service stack
                    in Docker and found the root cause of failed ClickHouse
                    writes.
                  </span>
                </div>
                <div className="exp-point">
                  <div className="exp-point-dot"></div>
                  <span>
                    Handed over web client expertise during the team split
                    (Feb–May 2026).
                  </span>
                </div>
              </div>
              <div className="exp-chips">
                <span className="chip">.NET 10</span>
                <span className="chip">C#</span>
                <span className="chip">PostgreSQL</span>
                <span className="chip">OpenSearch</span>
                <span className="chip">ClickHouse</span>
                <span className="chip">Redis</span>
                <span className="chip">Keycloak</span>
                <span className="chip">Docker</span>
                <span className="chip">Testcontainers</span>
                <span className="chip">GitLab CI</span>
              </div>
            </div>
          </div>

          <div className="exp-item">
            <div className="exp-left reveal">
              <div className="exp-period">Jun 2024 — Feb 2026</div>
              <div className={`${playfair.className} exp-co`}>SAVRUS</div>
              <div className="exp-loc">Remote</div>
            </div>
            <div className="exp-right">
              <div className="exp-title reveal">
                Fullstack Developer · Team Lead
              </div>
              <p className="exp-desc reveal">
                Led core frontend development of a web platform after the team
                transition. Owned UI/UX, complex components, architecture and
                deployment.
              </p>
              <div className="exp-list-items">
                <div className="exp-point">
                  <div className="exp-point-dot"></div>
                  <span>
                    Delivered a UI redesign from Figma to production; rebuilt
                    the interface on Tailwind, later migrated to SCSS + PostCSS
                    for maintainability.
                  </span>
                </div>
                <div className="exp-point">
                  <div className="exp-point-dot"></div>
                  <span>
                    Implemented 6 major resources end-to-end — from requirements
                    to production.
                  </span>
                </div>
                <div className="exp-point">
                  <div className="exp-point-dot"></div>
                  <span>
                    Built data visualization tools with Chart.js and an SQL
                    visualization module with automatic field and chart
                    detection.
                  </span>
                </div>
                <div className="exp-point">
                  <div className="exp-point-dot"></div>
                  <span>
                    Adopted Feature-Sliced Design and designed a solution for
                    opening multiple resources on a single page.
                  </span>
                </div>
                <div className="exp-point">
                  <div className="exp-point-dot"></div>
                  <span>
                    Created deployment tooling (Dockerfile, docker-compose,
                    healthchecks, systemd for Ubuntu/CentOS) and deployment
                    manuals.
                  </span>
                </div>
                <div className="exp-point">
                  <div className="exp-point-dot"></div>
                  <span>
                    Code reviews, mentoring and setting development pace; led
                    development of a new web product from scratch.
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
              <div className="exp-loc">Remote</div>
            </div>
            <div className="exp-right">
              <div className="exp-title reveal">.NET WPF Developer</div>
              <p className="exp-desc reveal">
                Developed and maintained the WPF client of a SIEM system: new
                features, bug fixes and localization.
              </p>
              <div className="exp-list-items">
                <div className="exp-point">
                  <div className="exp-point-dot"></div>
                  <span>
                    Covered all gRPC methods with xUnit unit and e2e tests and
                    wrote guides.
                  </span>
                </div>
                <div className="exp-point">
                  <div className="exp-point-dot"></div>
                  <span>
                    Proposed and built field sets for business rules — approved
                    and released to production.
                  </span>
                </div>
                <div className="exp-point">
                  <div className="exp-point-dot"></div>
                  <span>
                    Designed the table and implemented resource version history.
                  </span>
                </div>
              </div>
              <div className="exp-chips">
                <span className="chip">.NET</span>
                <span className="chip">WPF</span>
                <span className="chip">C#</span>
                <span className="chip">gRPC</span>
                <span className="chip">xUnit</span>
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
