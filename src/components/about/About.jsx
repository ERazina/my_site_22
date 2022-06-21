import me from "../../resourses/img/me.jpeg";
import "./About.scss";

function About() {
  const menuItems = ["about", "skills", "resume", "contacts"];

  return (
    <article className="about">
      <div className="about-wrapper">
        <div className="about-title">
          <div className="about-title__content">HI, I'M ELINA.</div>
          <div className="about-title__content">A DEVELOPER</div>
          <div className="about-title__content">
            BASED IN <br />
            SAINT-PETERSBURG
          </div>

          <div>
            <span className="about-skills">DEVELOPMENT</span>
            <span className="about-skills">REACT.JS</span>
            <span className="about-skills">FIGMA</span>
          </div>
        </div>
        <div>
          <div className="about-image"></div>
        </div>
      </div>
    </article>
  );
}

export default About;
