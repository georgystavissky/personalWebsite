import { ReactNode } from "react";
import "./stackCard.scss";

interface StackCardProps {
  icon: ReactNode;
  title: string;
  tags: string[];
}

const StackCard = ({ icon, title, tags }: StackCardProps) => {
  const tagList = tags.map((tag) => (
    <span className="tag" key={tag}>
      {tag}
    </span>
  ));

  return (
    <div className="stack-card reveal">
      <span className="stack-card-icon">{icon}</span>
      <div className="stack-card-name">{title}</div>
      <div className="tag-list">{tagList}</div>
    </div>
  );
};

export default StackCard;
