import "./about.scss";
import { profile } from "@/data/profile";
import { renderBold } from "@/lib/renderBold";

const About = () => {
  const { about } = profile;

  return (
    <section id="about">
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow reveal">{about.eyebrow}</div>
          <h2 className="section-heading reveal">{about.heading}</h2>
        </div>

        <div className="about-layout">
          <div className="about-body reveal">
            {about.paragraphs.map((p) => (
              <p key={p}>{renderBold(p)}</p>
            ))}
          </div>

          <div className="about-cards reveal">
            {about.cards.map((card) => (
              <div className="about-card" key={card.label}>
                <div className="card-label">{card.label}</div>
                <div className="card-value">
                  {card.lines.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
