import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <motion.div
        className="about--section--img"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <img src="./img/abo.png" alt="About Ashwin" />
      </motion.div>

      <motion.div
        className="hero--section--content--box about--section--box"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            Hey! I'm Ashwin, a Full Stack & App Developer with 3+ years of
            hands-on experience. I started freelancing on Fiverr in 2022,
            completed an internship at Starlabs Technologies, and now work
            full-time as a Web & App Developer at Starlab Technology.
          </p>
          <p className="hero--section-description">
            My skill set spans the entire development spectrum — from crafting
            beautiful frontends with React, Tailwind CSS, and Bootstrap, to
            building robust backends with Node.js, Python, Flask, and databases
            like MongoDB and SQL. I also build cross-platform mobile apps with
            React Native.
          </p>
          <p className="hero--section-description">
            When I'm not coding, I'm diving into new technologies, experimenting
            with personal projects, or staying up-to-date with the latest tech
            trends. Let's connect and bring your ideas to life!
          </p>
        </div>

        <motion.div
          className="about--stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="stat--card">
            <div className="stat--number">3+</div>
            <div className="stat--label">Years Experience</div>
          </div>
          <div className="stat--card">
            <div className="stat--number">20+</div>
            <div className="stat--label">Projects Completed</div>
          </div>
          <div className="stat--card">
            <div className="stat--number">15+</div>
            <div className="stat--label">Happy Clients</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
