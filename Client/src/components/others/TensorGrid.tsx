import React from 'react';
import { mathSymbols } from '../../data/constants';

export const TensorGrid = () => {
   const canvasRef = React.useRef<HTMLCanvasElement>(null);

   React.useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      let width = 0, height = 0;
      const resize = () => {
         width = canvas.width = canvas.parentElement?.clientWidth || 400;
         height = canvas.height = canvas.parentElement?.clientHeight || 300;
      };
      resize();
      window.addEventListener('resize', resize);

      const gridSize = 40;

      const nodes = [];
      for (let x = 0; x < width; x += gridSize) {
         for (let y = 0; y < height; y += gridSize) {
            nodes.push({
               x, y,
               symbol: mathSymbols[Math.floor(Math.random() * mathSymbols.length)],
               opacity: 0.1,
               targetOpacity: Math.random() * 0.3,
               pulse: Math.random() * Math.PI
            });
         }
      }

      const draw = () => {
         ctx.clearRect(0, 0, width, height);
         const time = Date.now() * 0.001;

         // Draw connections (Neural Style)
         ctx.beginPath();
         ctx.strokeStyle = 'rgba(255, 204, 0, 0.03)';
         ctx.lineWidth = 0.5;
         nodes.forEach((node, i) => {
            if (i % 7 === 0 && nodes[i + 1]) {
               ctx.moveTo(node.x, node.y);
               ctx.lineTo(nodes[i + 1].x, nodes[i + 1].y);
            }
         });
         ctx.stroke();

         // Draw nodes
         ctx.font = '8px monospace';
         nodes.forEach(node => {
            const glow = (Math.sin(time + node.pulse) + 1) / 2;
            const currentOpacity = (node.targetOpacity * glow) + 0.05;

            ctx.fillStyle = `rgba(255, 204, 0, ${currentOpacity})`;
            ctx.fillText(node.symbol, node.x, node.y);

            // Subtle tensor box
            if (Math.random() > 0.99) {
               ctx.strokeStyle = `rgba(255, 204, 0, 0.1)`;
               ctx.strokeRect(node.x - 5, node.y - 10, 15, 15);
            }
         });

         // Scanline effect
         const scanY = (time * 50) % height;
         ctx.fillStyle = 'rgba(255, 204, 0, 0.02)';
         ctx.fillRect(0, scanY, width, 2);

         requestAnimationFrame(draw);
      };

      const animId = requestAnimationFrame(draw);
      return () => {
         cancelAnimationFrame(animId);
         window.removeEventListener('resize', resize);
      };
   }, []);

   return (
      <canvas
         ref={canvasRef}
         className="absolute inset-0 pointer-events-none"
      />
   );
};