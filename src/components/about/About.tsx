import "./about.scss";

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  variable: "--playfair-font",
  subsets: ["latin"],
});

const About = () => {
  return (
    <section id="about">
      <div className="section-eyebrow reveal">About</div>
      <h2 className={`${playfair.className} section-heading reveal`}>
        Code with
        <br />a purpose.
      </h2>

      <div className="about-layout">
        <div className="about-body reveal">
          <p>
            Frontend developer with
            <strong> 2 years of commercial experience</strong>, focused on
            building interfaces that are fast, scalable, and genuinely pleasant
            to use.
          </p>
          <p>
            My path started in <strong>.NET/WPF desktop development</strong>,
            which gave me a deep appreciation for application architecture
            before I moved into the web. I don&apos;t just wire up components —
            I think in systems.
          </p>
          <p>
            I&apos;ve owned entire features from requirements to production:
            designed the architecture, built the UI, wrote the Dockerfile, and
            shipped it. Currently leading frontend on a new product at SAVRUS —
            and learning <strong>Go</strong> on the side because good engineers
            don&apos;t stop.
          </p>
        </div>

        <div className="about-cards reveal">
          <div className="about-card">
            <div className="card-label">Current Position</div>
            <div className="card-value">
              Frontend Developer · Team Lead
              <br />
              SAVRUS, Moscow
            </div>
          </div>
          <div className="about-card">
            <div className="card-label">Education</div>
            <div className="card-value">
              Business Informatics (IT Systems)
              <br />
              Moscow Univ. of Finance & Law · 2021–2025
            </div>
          </div>
          <div className="about-card">
            <div className="card-label">Languages</div>
            <div className="card-value">
              Russian (native) · English B2 · Korean (beginner)
            </div>
          </div>
          <div className="about-card">
            <div className="card-label">Status</div>
            <div className="card-value green">✦ Open to new opportunities</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
