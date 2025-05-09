import Waving from "../media/waving.1bae5fcfb51082b5c2b4.png";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconArrowNarrowRight,
} from "@tabler/icons-react";
import pdfFile from "../media/resume.pdf";
import heroImg from "../media/Abi-latest.jpg";

const skillsIcons = [
  {
    img: "https://skillicons.dev/icons?i=react,redux",
    id: 1,
  },

  {
    img: "https://skillicons.dev/icons?i=js,ts",
    id: 2,
  },

  {
    img: "https://skillicons.dev/icons?i=tailwind,sass",
    id: 3,
  },

  {
    img: "https://skillicons.dev/icons?i=css,html",
    id: 4,
  },
  {
    img: "https://skillicons.dev/icons?i=git,github",
    id: 5,
  },
];

function Hero() {
  const handlePdfOpen = () => {
    // Create a new window or tab to open the PDF
    window.open(pdfFile, "_blank");
  };
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="content">
          <div className="hero-main">
            <div className="hero-text">
              <h1>Front-End React Developer</h1>
              <img src={Waving} alt="waving_hand" />
              <p>
                Hi, I'm <strong>Abilash</strong>.<br />A passionate Front-end
                React Developer based in Kerala📍
              </p>
              <span>
                <a
                  aria-label="linkedin"
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/abilashmugunth/"
                >
                  <IconBrandLinkedin width={32} height={32} />
                </a>
                <a
                  aria-label="github"
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/AbiScripter"
                >
                  <IconBrandGithub width={32} height={32} />
                </a>
              </span>
              <p className="resume" onClick={handlePdfOpen}>
                <span className="resume__text"> View My Resume</span>
                <IconArrowNarrowRight
                  width={32}
                  height={32}
                  className="resume__arrow"
                />
              </p>
            </div>

            <div className="hero-img">
              <img src={heroImg} alt="hero-img" />
            </div>
          </div>

          {/*  */}
          <div className="skills">
            <p>Tech Stack</p>
            <div className="logos">
              <ul>
                {skillsIcons.map((icon) => (
                  <li key={icon.id}>
                    <img src={icon.img} alt="skill-icon" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
