// import ReactWebDev from "../ media/image_processing20210523-23883-z081el.jpg";
import ReactWebDev from "../media/image_processing20210523-23883-z081el.jpg";
function AboutMe() {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="img-side">
              <img src={ReactWebDev} className="img-side__main-img" />
            </div>
            <div className="text-side">
              <h3>🔥 About Me</h3>
              <h4>
                A dedicated Front-end Developer <br /> based in Kerala 📍
              </h4>
              <p>
                I build clean, responsive UIs with React, Tailwind and Redux,
                focusing on smooth user experiences and maintainable code. I
                enjoy turning complex ideas into intuitive interfaces and
                constantly push to improve my skills in state management,
                performance, and modern frontend practices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
