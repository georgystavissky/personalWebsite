import "./facts.scss";
import { profile } from "@/data/profile";

const Facts = () => {
  return (
    <div id="facts">
      <div className="container">
        <div className="facts-grid reveal">
          {profile.facts.map((fact) => (
            <div className="fact" key={fact.label}>
              <div className="fact-label">{fact.label}</div>
              <div className="fact-value">{fact.value}</div>
              <div className="fact-note">{fact.note}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facts;
