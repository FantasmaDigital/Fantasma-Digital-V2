import React from 'react';

export const GrowthGrid = () => {
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

      const draw = () => {
         ctx.clearRect(0, 0, width, height);
         const time = Date.now() * 0.001;

         // Draw animated line graphs
         ctx.beginPath();
         ctx.strokeStyle = 'rgba(255, 204, 0, 0.1)';
         ctx.lineWidth = 1;

         ctx.moveTo(0, height / 2);
         for (let i = 0; i < width; i += 2) {
            const y = (height / 2) + Math.sin(i * 0.02 + time * 2) * 20 + Math.sin(i * 0.05 + time) * 10;
            ctx.lineTo(i, y);
         }
         ctx.stroke();

         // Draw pulsing data points
         ctx.fillStyle = 'rgba(255, 204, 0, 0.3)';
         for (let i = 0; i < 5; i++) {
            const x = (width / 4) * i;
            const y = (height / 2) + Math.sin(x * 0.02 + time * 2) * 20 + Math.sin(x * 0.05 + time) * 10;
            const size = 2 + Math.sin(time * 5 + i) * 1;
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();
         }

         requestAnimationFrame(draw);
      };

      const animId = requestAnimationFrame(draw);
      return () => {
         cancelAnimationFrame(animId);
         window.removeEventListener('resize', resize);
      };
   }, []);

   return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-40" />;
};