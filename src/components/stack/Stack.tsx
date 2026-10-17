import "./stack.scss";
import { ReactNode } from "react";
import { IoCodeSlash, IoServer } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { BiNetworkChart } from "react-icons/bi";
import { SiDocker } from "react-icons/si";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { profile, StackGroup } from "@/data/profile";
import StackCard from "./Stackcard";

const icons: Record<StackGroup["id"], ReactNode> = {
  backend: <IoCodeSlash />,
  frontend: <FaReact />,
  data: <IoServer />,
  quality: <MdOutlineVerifiedUser />,
  architecture: <BiNetworkChart />,
  infra: <SiDocker />,
};

const Stack = () => {
  const { stack } = profile;

  return (
    <section id="stack">
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow reveal">{stack.eyebrow}</div>
          <h2 className="section-heading reveal">{stack.heading}</h2>
          <p className="section-sub reveal">{stack.sub}</p>
        </div>

        <div className="stack-grid">
          {stack.groups.map((group) => (
            <StackCard
              key={group.id}
              icon={icons[group.id]}
              title={group.title}
              tags={group.tags}
              learning={group.learning}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
