import { ReactNode } from "react";
import "./stackCard.scss";

interface StackCardProps {
  icon: ReactNode;
  title: string;
  tags: string[];
  learning?: string[];
}

const StackCard = ({ icon, title, tags, learning = [] }: StackCardProps) => {
  return (
    <div className="stack-card reveal">
      <span className="stack-card-icon">{icon}</span>
      <div className="stack-card-name">{title}</div>
      <div className="tag-list">
        {tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
        {learning.map((tag) => (
          <span className="tag learning" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default StackCard;
