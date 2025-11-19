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

        // Larger buffer zone for smoother edge wrapping (especially on mobile)
        const buffer = shape.size + 150;

        // Wrap around edges with larger buffer
        if (shape.x < -buffer) shape.x = canvas.width + buffer;
        if (shape.x > canvas.width + buffer) shape.x = -buffer;
        if (shape.y < -buffer) shape.y = canvas.height + buffer;
        if (shape.y > canvas.height + buffer) shape.y = -buffer;

        // Calculate edge fade effect for smoother transitions
        const edgeFadeDistance = 200;
        let edgeFadeOpacity = 1;

        const distanceFromLeft = shape.x;
        const distanceFromRight = canvas.width - shape.x;
        const distanceFromTop = shape.y;
        const distanceFromBottom = canvas.height - shape.y;

        const minDistance = Math.min(
          distanceFromLeft,
          distanceFromRight,
          distanceFromTop,
          distanceFromBottom
        );

        if (minDistance < edgeFadeDistance) {
          edgeFadeOpacity = Math.max(0, minDistance / edgeFadeDistance);
        }

        ctx.save();
        ctx.translate(shape.x, shape.y);
        ctx.rotate(shape.rotation);

        // Apply edge fade to opacity
        const finalOpacity = shape.opacity * edgeFadeOpacity;

        // Draw shape based on type
        if (shape.type === "circle") {
          ctx.beginPath();
          ctx.arc(0, 0, shape.size / 2, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(59, 130, 246, ${finalOpacity})`;
          ctx.lineWidth = 2;
          ctx.stroke();
        } else if (shape.type === "square") {
          ctx.strokeStyle = `rgba(59, 130, 246, ${finalOpacity})`;
          ctx.lineWidth = 2;
          ctx.strokeRect(-shape.size / 2, -shape.size / 2, shape.size, shape.size);
        } else if (shape.type === "line") {
          ctx.beginPath();
          ctx.moveTo(-shape.size / 2, 0);
          ctx.lineTo(shape.size / 2, 0);
          ctx.strokeStyle = `rgba(59, 130, 246, ${finalOpacity})`;
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
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ opacity: 0.5 }}
    />
  );
};

export default AnimatedBackground;
