import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Testimonial from "../Testimonials";
import TechStack from "../TechStack";
import Experience from "../Experience";
import Education from "../Education";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TechStack />
      <MySkills />
      <AboutMe />
      <Experience />
      <Education />
      <MyPortfolio />
      <Testimonial />
      <ContactMe />
      <Footer />
    </>
  );
}
