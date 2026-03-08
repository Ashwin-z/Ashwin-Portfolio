import { motion } from "framer-motion";
import {
  FaReact,
  FaPython,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaBootstrap,
  FaGitAlt,
  FaAws,
} from "react-icons/fa";
import {
  SiFlask,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiMysql,
  SiExpress,
  SiPostgresql,
  SiDjango,
  SiDocker,
  SiEjs,
  SiJquery,
  SiTypescript,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const techStack = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "React Native", icon: TbBrandReactNative, color: "#61DAFB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#ffffff" },
  { name: "Flask", icon: SiFlask, color: "#ffffff" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "SQL", icon: SiMysql, color: "#4479A1" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Django", icon: SiDjango, color: "#44B78B" },
  { name: "DevOps", icon: SiDocker, color: "#2496ED" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "EJS", icon: SiEjs, color: "#B4CA65" },
  { name: "jQuery", icon: SiJquery, color: "#0769AD" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 200, damping: 15 },
  },
};

export default function TechStack() {
  return (
    <section className="techstack--section" id="techStack">
      <motion.div
        className="techstack--header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="section--label">Technologies</p>
        <h2 className="section--heading">My Tech Stack</h2>
        <p className="section--subtext">
          Technologies and tools I use to bring ideas to life
        </p>
      </motion.div>

      <motion.div
        className="techstack--grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            className="techstack--card"
            variants={itemVariants}
            whileHover={{
              scale: 1.1,
              rotateY: 10,
              rotateX: -5,
              boxShadow: `0 0 30px ${tech.color}33`,
            }}
            style={{ "--tech-color": tech.color }}
          >
            <tech.icon className="techstack--icon" style={{ color: tech.color }} />
            <span className="techstack--name">{tech.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
