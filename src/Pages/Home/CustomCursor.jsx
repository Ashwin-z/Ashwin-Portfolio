import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const visible = useRef(false);
  const hovering = useRef(false);
  const clicking = useRef(false);

  useEffect(() => {
    // Don't show custom cursor on touch devices
    if ("ontouchstart" in window) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const onMouseMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!visible.current) {
        visible.current = true;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      }
      dot.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
    };

    const onMouseEnterInteractive = () => {
      hovering.current = true;
      ring.classList.add("cursor--ring--hover");
      dot.classList.add("cursor--dot--hover");
    };

    const onMouseLeaveInteractive = () => {
      hovering.current = false;
      ring.classList.remove("cursor--ring--hover");
      dot.classList.remove("cursor--dot--hover");
    };

    const onMouseDown = () => {
      clicking.current = true;
      ring.classList.add("cursor--ring--click");
      dot.classList.add("cursor--dot--click");
    };

    const onMouseUp = () => {
      clicking.current = false;
      ring.classList.remove("cursor--ring--click");
      dot.classList.remove("cursor--dot--click");
    };

    const onMouseLeave = () => {
      visible.current = false;
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    // Smooth ring follow
    let animId;
    const animateRing = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.15;
      ring.style.transform = `translate(${ringPos.current.x - 20}px, ${ringPos.current.y - 20}px)`;
      animId = requestAnimationFrame(animateRing);
    };
    animId = requestAnimationFrame(animateRing);

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);

    // Add hover listeners to interactive elements
    const interactiveSelectors = "a, button, .btn, .portfolio--section--card, .testimonial--section--card, .skills--section--card, .techstack--item, .carousel--btn, .carousel--dot, input, textarea";
    const interactiveElements = document.querySelectorAll(interactiveSelectors);
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterInteractive);
      el.addEventListener("mouseleave", onMouseLeaveInteractive);
    });

    return () => {
      cancelAnimationFrame(animId);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterInteractive);
        el.removeEventListener("mouseleave", onMouseLeaveInteractive);
      });
    };
  }, []);

  // Don't render on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <>
      <div ref={dotRef} className="cursor--dot" />
      <div ref={ringRef} className="cursor--ring" />
    </>
  );
}
