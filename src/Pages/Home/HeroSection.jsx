import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Ashwin</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            A passionate Web developer with over 2 years of experience in building efficient and dynamic web applications.
            <br /> Let's create something amazing together!
          </p>
        </div>
        
        {/* Wrap the button with Link for smooth scrolling */}
        <Link to="Contact" smooth={true} duration={500}>
          <button className="btn btn-primary">Get In Touch</button>
        </Link>
      </div>

      <div className="hero--section--img">
        <img src="./img/rev.png" alt="Hero Section" />
      </div>
    </section>
  );
}
