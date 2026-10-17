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
        Practical engineering
        <br />
        over buzzwords.
      </h2>

      <div className="about-layout">
        <div className="about-body reveal">
          <p>
            Full-stack developer (<strong>C# / .NET</strong>,{" "}
            <strong>TypeScript / Svelte</strong>) with{" "}
            <strong>3 years of commercial experience</strong>. <br />I build
            backends, interfaces and the supporting infrastructure — from APIs
            and databases to Docker environments and monitoring.
          </p>
          <p>
            I started with <strong>.NET/WPF</strong> desktop apps — that&apos;s
            where I learned to think in terms of architecture, not just UI.
            <br /> I work specification-first and cover my code with unit,
            integration and contract tests.
          </p>
          <p>
            I handle features end-to-end — from requirements and architecture to
            production. Currently building backend services at Umbrella and
            expanding into <strong>AI engineering</strong>, studying RAG
            systems.
          </p>
        </div>

        <div className="about-cards reveal">
          <div className="about-card">
            <div className="card-label">Current Position</div>
            <div className="card-value">
              Fullstack Developer
              <br />
              Umbrella LLC · Remote
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
              Russian (native) · English B2 (IELTS Academic) · Korean (beginner)
            </div>
          </div>
          {/* <div className="about-card">
            <div className="card-label">Status</div>
            <div className="card-value green">✦ Open to new opportunities</div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
