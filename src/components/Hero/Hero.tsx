import "./Hero.css";
import video from "../../assets/images/gym-video.mp4";

function Hero() {
  return (
    <section className="hero">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="background-video"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay"></div>

      <div className="hero-content">
        <p>WORK HARDER, GET STRONGER</p>
        <h2>
          Welcome to <span>Training Studio</span>
        </h2>

        <a href="/signup" className="hero-link">
          BECOME A MEMBER
        </a>
      </div>
    </section>
  );
}

export default Hero;