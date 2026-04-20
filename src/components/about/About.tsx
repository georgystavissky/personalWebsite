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
            Frontend developer with
            <strong> 2+ years of commercial experience</strong>. <br />I build
            fast interfaces with predictable behavior and clean structure.
          </p>
          <p>
            I started with <strong>.NET/WPF</strong> desktop apps — that&apos;s
            where I learned to think in terms of architecture, not just UI.
            <br /> I don&apos;t just assemble components — I design systems.
          </p>
          <p>
            I handle features end-to-end — from requirements and architecture to
            production. Currently building backend for a new product at UMBRELLA
            and picking up <strong>Go</strong> along the way.
          </p>
        </div>

        <div className="about-cards reveal">
          <div className="about-card">
            <div className="card-label">Current Position</div>
            <div className="card-value">
              Fullstack Developer
              <br />
              UMBRELLA, Moscow
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
