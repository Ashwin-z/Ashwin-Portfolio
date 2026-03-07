export default function FloatingShapes({ mousePos = { x: 0, y: 0 } }) {
  const p = (factor) => ({
    transform: `translate(${mousePos.x * factor}px, ${mousePos.y * factor}px)`,
    transition: "transform 0.4s ease-out",
  });

  return (
    <div className="floating-shapes" aria-hidden="true">
      {/* 3D Rotating Cube */}
      <div className="shape shape--1" style={p(20)}>
        <div className="cube-3d">
          <div className="cube-face front"></div>
          <div className="cube-face back"></div>
          <div className="cube-face right"></div>
          <div className="cube-face left"></div>
          <div className="cube-face top"></div>
          <div className="cube-face bottom"></div>
        </div>
      </div>

      {/* Glowing Sphere */}
      <div className="shape shape--2" style={p(-15)}>
        <div className="sphere-3d"></div>
      </div>

      {/* Rotating Ring */}
      <div className="shape shape--3" style={p(12)}>
        <div className="ring-3d"></div>
      </div>

      {/* Small Cube */}
      <div className="shape shape--4" style={p(-18)}>
        <div className="cube-3d cube-small">
          <div className="cube-face front"></div>
          <div className="cube-face back"></div>
          <div className="cube-face right"></div>
          <div className="cube-face left"></div>
          <div className="cube-face top"></div>
          <div className="cube-face bottom"></div>
        </div>
      </div>

      {/* Second Sphere */}
      <div className="shape shape--5" style={p(10)}>
        <div className="sphere-3d sphere-small"></div>
      </div>

      {/* Second Ring */}
      <div className="shape shape--6" style={p(-8)}>
        <div className="ring-3d ring-small"></div>
      </div>

      {/* Floating dots */}
      <div className="shape shape--dot shape--dot-1" style={p(25)}></div>
      <div className="shape shape--dot shape--dot-2" style={p(-20)}></div>
      <div className="shape shape--dot shape--dot-3" style={p(15)}></div>
      <div className="shape shape--dot shape--dot-4" style={p(-12)}></div>
      <div className="shape shape--dot shape--dot-5" style={p(22)}></div>
      <div className="shape shape--dot shape--dot-6" style={p(-18)}></div>
    </div>
  );
}
