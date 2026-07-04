import "./About.css";
import featureAbout from "../../assets/images/features-first-icon.png";
function About() {
  return (
    <div>
      <div className="about-content">
        <h2>Choose Program</h2>
        <p>
          Training Studio is free CSS template for gyms and fitness centers. You
          are allowed to use this layout for your business website.
        </p>
        <div className="lists-about">
          <div className="list">
            <img src={featureAbout} alt="Feature" />
            <div className="info-list">
              <h3>Basic Fitness</h3>
              <p>
                Please do not re-distribute this template ZIP file on any
                template collection website. This is not allowed.
              </p>
              <a href="#">Discover More</a>
            </div>
          </div>
          <div className="list">
            <img src={featureAbout} alt="Feature" />
            <div className="info-list">
              <h3> 
Advanced Muscle Course</h3>
              <p>
        You may want to browse through Digital Marketing or Corporate HTML CSS templates on our website.
              </p>
              <a href="#">Discover More</a>
            </div>
          </div>
          <div className="list">
            <img src={featureAbout} alt="Feature" />
            <div className="info-list">
              <h3> 

New Gym Training</h3>
              <p>
              If you wish to support TemplateMo website via PayPal, please feel free to contact us. We appreciate it a lot.
              </p>
              <a href="#">Discover More</a>
            </div>
          </div>
          <div className="list">
            <img src={featureAbout} alt="Feature" />
            <div className="info-list">
              <h3>Yoga Training</h3>
              <p>
        This template is built on Bootstrap v4.3.1 framework. It is easy to adapt the columns and sections.
              </p>
              <a href="#">Discover More</a>
            </div>
          </div>
          <div className="list">
            <img src={featureAbout} alt="Feature" />
            <div className="info-list">
              <h3> 

Basic Muscle Course</h3>
              <p>
             Credit goes to Pexels website for images and video background used in this HTML template.
              </p>
              <a href="#">Discover More</a>
            </div>
          </div>
          <div className="list">
            <img src={featureAbout} alt="Feature" />
            <div className="info-list">
              <h3>Body Building Course</h3>
              <p>
              Suspendisse fringilla et nisi et mattis. Curabitur sed finibus nisi. Integer nibh sapien, vehicula et auctor.
              </p>
              <a href="#">Discover More</a>
            </div>
          </div>
       
        </div>
      </div>
    </div>
  );
}

export default About;
