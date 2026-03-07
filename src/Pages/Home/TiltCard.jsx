import { useRef, useState } from "react";

export default function TiltCard({ children, className = "", ...props }) {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setStyle({
      transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`,
      transition: "transform 0.1s ease",
      boxShadow: `${-rotateY * 2}px ${rotateX * 2}px 40px rgba(0,0,0,0.3), 0 0 30px rgba(108, 99, 255, 0.1)`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)",
      transition: "transform 0.5s ease, box-shadow 0.5s ease",
      boxShadow: "none",
    });
  };

  return (
    <div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ ...style, transformStyle: "preserve-3d" }}
      {...props}
    >
      {children}
    </div>
  );
}
