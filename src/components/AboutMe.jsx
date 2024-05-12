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
              <h3>About me</h3>
              <h4>
                A dedicated Front-end Developer <br /> based in Kerala 📍
              </h4>
              <p>
                I completed my Bachelor of Engineering in Civil from Dhirajlal
                Gandhi College Of Technology.
              </p>
              <br />

              <p>
                My engineering background equips me with problem-solving,
                attention to detail, and project management skills, all valuable
                in web development, where precise user experience and project
                management are crucial.
              </p>
              <br />

              <p>
                My goal is to combine my engineering background with my newfound
                interest in web development to make websites that are
                user-friendly. It's a bit of a change from what I was doing
                before, but I'm excited to see where this journey takes me.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
