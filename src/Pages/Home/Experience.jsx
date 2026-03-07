import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "Web & App Developer",
    company: "Starlab Technology",
    type: "Full-Time",
    period: "Jan 2026 — Present",
    description:
      "Working as a full-time Web & App Developer, building production-grade web and mobile applications. Developing scalable frontends with React and React Native, designing RESTful APIs with Node.js and Python, and managing databases with MongoDB and SQL. Collaborating with cross-functional teams to deliver high-quality digital products.",
    skills: ["React", "React Native", "Node.js", "Python", "MongoDB", "SQL"],
    current: true,
  },
  {
    id: 2,
    role: "Web Developer Intern",
    company: "Starlabs Technologies",
    type: "Internship",
    period: "Oct 2025 — Dec 2025",
    description:
      "Completed a 3-month internship focused on full-stack web development. Built responsive UIs, integrated APIs, and contributed to live client projects. Gained hands-on experience with agile workflows, code reviews, and deployment pipelines in a professional team environment.",
    skills: ["React", "Node.js", "Express", "MongoDB", "Git", "Tailwind CSS"],
    current: false,
  },
  {
    id: 3,
    role: "Freelance Web Developer",
    company: "Fiverr",
    type: "Freelance",
    period: "2022 — 2025",
    description:
      "Delivered 15+ web development projects for clients worldwide on Fiverr. Specialized in building custom websites, landing pages, e-commerce platforms, and web applications. Maintained a 5-star rating with consistent client satisfaction and repeat business.",
    skills: ["HTML/CSS", "JavaScript", "React", "Node.js", "WordPress", "MongoDB"],
    current: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Experience() {
  return (
    <section className="experience--section" id="experience">
      <motion.div
        className="portfolio--container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="section--label">Career</p>
        <h2 className="section--heading">Work Experience</h2>
        <p className="section--subtext">
          My professional journey from freelancing to full-time development
        </p>
      </motion.div>

      <motion.div
        className="experience--timeline"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {experiences.map((exp) => (
          <motion.div
            key={exp.id}
            className={`experience--card ${exp.current ? "experience--card--current" : ""}`}
            variants={cardVariants}
            whileHover={{ x: 8, transition: { duration: 0.3 } }}
          >
            <div className="experience--timeline--dot">
              <div className={`timeline--dot ${exp.current ? "timeline--dot--active" : ""}`}></div>
              {exp.id < experiences.length && <div className="timeline--line"></div>}
            </div>

            <div className="experience--card--content">
              <div className="experience--card--header">
                <div>
                  <h3 className="experience--role">{exp.role}</h3>
                  <p className="experience--company">
                    {exp.company}
                    <span className="experience--type">{exp.type}</span>
                  </p>
                </div>
                <span className={`experience--period ${exp.current ? "experience--period--current" : ""}`}>
                  {exp.period}
                </span>
              </div>

              <p className="experience--description">{exp.description}</p>

              <div className="experience--skills">
                {exp.skills.map((skill, index) => (
                  <span key={index} className="experience--skill--tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
