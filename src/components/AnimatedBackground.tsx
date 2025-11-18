import { useEffect, useRef } from "react";

interface Shape {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  type: "circle" | "square" | "line";
  opacity: number;
}

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let shapes: Shape[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initShapes();
    };

    const initShapes = () => {
      shapes = [];
      const shapeCount = Math.floor((canvas.width * canvas.height) / 40000);

      for (let i = 0; i < shapeCount; i++) {
        const types: ("circle" | "square" | "line")[] = ["circle", "square", "line"];
        shapes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 40 + 20,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.01,
          type: types[Math.floor(Math.random() * types.length)],
          opacity: Math.random() * 0.15 + 0.05,
        });
      }
    };

    const drawShapes = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      shapes.forEach((shape) => {
        // Update position
        shape.x += shape.vx;
        shape.y += shape.vy;
        shape.rotation += shape.rotationSpeed;

        // Wrap around edges
        if (shape.x < -100) shape.x = canvas.width + 100;
        if (shape.x > canvas.width + 100) shape.x = -100;
        if (shape.y < -100) shape.y = canvas.height + 100;
        if (shape.y > canvas.height + 100) shape.y = -100;

        ctx.save();
        ctx.translate(shape.x, shape.y);
        ctx.rotate(shape.rotation);

        // Draw shape based on type
        if (shape.type === "circle") {
          ctx.beginPath();
          ctx.arc(0, 0, shape.size / 2, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(59, 130, 246, ${shape.opacity})`;
          ctx.lineWidth = 2;
          ctx.stroke();
        } else if (shape.type === "square") {
          ctx.strokeStyle = `rgba(59, 130, 246, ${shape.opacity})`;
          ctx.lineWidth = 2;
          ctx.strokeRect(-shape.size / 2, -shape.size / 2, shape.size, shape.size);
        } else if (shape.type === "line") {
          ctx.beginPath();
          ctx.moveTo(-shape.size / 2, 0);
          ctx.lineTo(shape.size / 2, 0);
          ctx.strokeStyle = `rgba(59, 130, 246, ${shape.opacity})`;
          ctx.lineWidth = 2;
          ctx.stroke();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(drawShapes);
    };

    resize();
    window.addEventListener("resize", resize);
    drawShapes();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.5 }}
    />
  );
};

export default AnimatedBackground;
