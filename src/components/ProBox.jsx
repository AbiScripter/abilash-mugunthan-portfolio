import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import { useState } from "react";

function ProBox({
  title,
  img,
  description,
  techStack,
  code,
  demo,
  scrollY,
  cName,
  date,
}) {
  const [scroll, setScroll] = useState(false);
  return (
    <>
      <div key={title} className={`pro pro__1 ${cName}`}>
        <div className="pro__img">
          <a target="_blank" href={demo} rel="noreferrer">
            <img
              src={img}
              alt="website"
              style={{
                transform: scroll ? `translateY(${scrollY})` : "translateY(0%)",
                transition: "transform 3s ease-in-out",
              }}
              onMouseEnter={() => setScroll(true)}
              onMouseLeave={() => setScroll(false)}
            />
          </a>
        </div>
        <div className="pro__text">
          <h3>
            {title} <span className="date-class">{date}</span>
          </h3>
          <p>{description}</p>
          <div className="stack">
            {techStack.map((tech) => (
              <p key={tech}>{tech}</p>
            ))}
          </div>

          <div className="links">
            <a target="_blank" href={code} rel="noreferrer">
              Code
              <IconBrandGithub />
            </a>
            <a target="_blank" href={demo} rel="noreferrer">
              Live Demo
              <IconExternalLink />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProBox;
