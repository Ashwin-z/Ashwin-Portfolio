import { motion } from "framer-motion";

const educationData = [
  {
    id: 1,
    degree: "BS - Autonomous Systems & Artificial Intelligence (BSASAI)",
    institution: "University",
    period: "2025 — 2029",
    current: true,
    type: "Bachelor's Degree",
    description:
      "Pursuing a Bachelor's in Autonomous Systems & Artificial Intelligence, focusing on machine learning, robotics, computer vision, and intelligent system design. Building a strong foundation in AI-driven development alongside full stack engineering skills.",
    highlights: ["Artificial Intelligence", "Machine Learning", "Autonomous Systems", "Robotics", "Computer Vision"],
  },
  {
    id: 2,
    degree: "Higher Secondary Education (HSSC)",
    institution: "Govt. Campus Higher Secondary School Siranwari, Sanghar",
    period: "2023 — 2025",
    current: false,
    type: "Intermediate",
    description:
      "Completed Higher Secondary education with a focus on science subjects. Developed a strong interest in computer science and technology during this time, which paved the way for my career in development.",
    highlights: ["Pre-Engineering", "Computer Science", "Mathematics"],
  },
  {
    id: 3,
    degree: "Secondary School Education (SSC)",
    institution: "Govt. Campus Higher Secondary School Siranwari, Sanghar",
    period: "2021 — 2023",
    current: false,
    type: "Matriculation",
    description:
      "Completed secondary school education and discovered my passion for coding and web development. Started self-learning programming languages and built my first projects during this period.",
    highlights: ["Science", "Mathematics", "Computer Basics"],
  },
];

export default function Education() {
  return (
    <section className="education--section" id="education">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{ textAlign: "center" }}
      >
        <p className="sub--title">Academic Background</p>
        <h2 className="section--heading">Education</h2>
      </motion.div>

      <div className="education--timeline">
        {educationData.map((item, index) => (
          <motion.div
            key={item.id}
            className={`education--card${item.current ? " education--card--current" : ""}`}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="education--timeline--dot">
              <div className={`timeline--dot${item.current ? " timeline--dot--active" : ""}`} />
              <div className="timeline--line" />
            </div>
            <div className="education--card--content">
              <div className="education--card--header">
                <span className="education--type">{item.type}</span>
                <h3 className="education--degree">{item.degree}</h3>
                <p className="education--institution">
                  🏫 {item.institution}
                </p>
                <p className={`education--period${item.current ? " education--period--current" : ""}`}>
                  📅 {item.period}
                  {item.current && <span className="current--badge">Currently Pursuing</span>}
                </p>
              </div>
              <p className="education--description">{item.description}</p>
              <div className="education--highlights">
                {item.highlights.map((highlight, i) => (
                  <span key={i} className="education--highlight--tag">
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
