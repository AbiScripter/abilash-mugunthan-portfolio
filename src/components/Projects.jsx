import ProBox from "./ProBox";
import Clothify from "../media/clothifylong.png";
import Rupee from "../media/rupee.png";
import Times from "../media/times.png";

function Projects() {
  return (
    <>
      <section id="projects" className="project">
        <div className="container">
          <div className="project-content">
            <p>portfolio</p>
            <h3>Each project is a unique piece of development 🧩</h3>
            <div className="projects-grid">
              <ProBox
                title="Clothify"
                img={Clothify}
                // date="(February 2024)"
                techStack={["React", "Redux", "TailWindCSS", "Firebase"]}
                description="A modern online clothing store with a clean design for easy browsing and purchasing fashion items for men, women, and kids. Safe login and order management features make shopping a breeze."
                code="https://github.com/AbiScripter/Clothify"
                demo="https://clothify-topaz.vercel.app"
                scrollY="-60%"
              />

              <ProBox
                title="Rupee Tracker"
                // date="(March 2024)"
                img={Rupee}
                description="A user-friendly app to easily track expenses, visualize spending habits, and analyze financial data through intuitive filtering and charts.Stay on top of your money matters with secure authentication and real-time expense monitoring."
                techStack={[
                  "React",
                  "Redux",
                  "Typescript",
                  "Firebase",
                  "Chart.js",
                ]}
                code="https://github.com/AbiScripter/Rupee-Tracker-TS"
                demo="https://rupee-tracker-ts.vercel.app/"
                scrollY="-40%"
                cName="reversed-proj"
              />

              <ProBox
                title="India Times"
                // date="(April 2024)"
                img={Times}
                description="Developed a news website with category browsing, load more pagination for search results, and an Axios-powered search functionality to retrieve data from an API."
                techStack={["React", "TailWind CSS", "REST API"]}
                code="https://github.com/AbiScripter/India-Times-React"
                demo="https://india-times.vercel.app"
                scrollY="-55%"
                // cName="reversed"
              />
            </div>
          </div>
          {/* <h2 className="new-projects">New projects coming soon.. 🤠</h2> */}
        </div>
      </section>
    </>
  );
}

export default Projects;
