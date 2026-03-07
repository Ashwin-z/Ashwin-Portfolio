import { useState, useEffect, useCallback } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import FloatingShapes from "./FloatingShapes";

const roles = [
  "Full Stack Developer",
  "App Developer",
  "UI/UX Enthusiast",
  "Problem Solver",
  "Freelancer",
];

function useTypingAnimation(words, typingSpeed = 100, deletingSpeed = 60, pauseTime = 2000) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            isDeleting
              ? currentWord.substring(0, text.length - 1)
              : currentWord.substring(0, text.length + 1)
          );
        },
        isDeleting ? deletingSpeed : typingSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [text, wordIndex, isDeleting, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}

export default function HeroSection() {
  const typedText = useTypingAnimation(roles);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    setMousePos({ x, y });
  }, []);

  return (
    <section id="heroSection" className="hero--section" onMouseMove={handleMouseMove}>
      <FloatingShapes mousePos={mousePos} />

      {/* Aurora blobs */}
      <div className="aurora--container">
        <div className="aurora--blob aurora--blob--1" />
        <div className="aurora--blob aurora--blob--2" />
        <div className="aurora--blob aurora--blob--3" />
      </div>

      <div className="hero--section--content--box">
        <motion.div
          className="hero--section--content"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="hero--badge">
            <span className="hero--badge--icon">💼</span>
            Web & App Developer @ Starlab Technology
          </div>

          <p className="section--title">Hey, I'm Ashwin</p>

          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>
            <br />
            & App Developer
          </h1>

          <div className="typing--container">
            <span className="typing--label">I'm a </span>
            <span className="typing--text">{typedText}</span>
            <span className="typing--cursor">|</span>
          </div>

          <p className="hero--section-description">
            Full Stack & App Developer at Starlab Technology with 3+ years of
            experience. From freelancing on Fiverr to building production-grade
            web & mobile apps — let's create something amazing together!
          </p>
        </motion.div>

        <motion.div
          className="hero--buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="Contact" smooth={true} duration={500}>
            <button className="btn btn-primary">Get In Touch</button>
          </Link>
          <a
            href="https://github.com/Ashwin-z"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            View GitHub
          </a>
        </motion.div>
      </div>

      <motion.div
        className="hero--section--img"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div
          className="hero--img--wrapper"
          style={{
            transform: `translate(${mousePos.x * -8}px, ${mousePos.y * -8}px)`,
            transition: "transform 0.3s ease-out",
          }}
        >
          <img
            src="./img/rev.png"
            alt="Ashwin - Full Stack & App Developer"
            style={{ transform: "scaleX(-1)" }}
          />
          <div className="hero--img--glow"></div>
        </div>
      </motion.div>
    </section>
  );
}
