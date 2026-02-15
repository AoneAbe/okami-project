import React, { useEffect, useRef, useCallback } from 'react';

const PolygonBackground = ({ className = '' }) => {
  const canvasRef = useRef(null);
  const pointsRef = useRef([]);
  const trianglesRef = useRef([]);
  const animationRef = useRef(null);

  // 光源の位置（左上から）
  const light = { x: -0.4, y: -0.7, z: 0.8 };

  // 青系カラーパレット（多様な色調）
  const colorPalette = [
    // 明るいシアン・水色系
    { r: 120, g: 200, b: 230 },
    { r: 100, g: 180, b: 220 },
    { r: 80, g: 170, b: 215 },
    { r: 140, g: 210, b: 235 },
    // 中間の青
    { r: 60, g: 140, b: 200 },
    { r: 50, g: 130, b: 190 },
    { r: 70, g: 150, b: 205 },
    { r: 45, g: 120, b: 180 },
    // 濃い青・紺系
    { r: 30, g: 90, b: 160 },
    { r: 25, g: 80, b: 150 },
    { r: 20, g: 70, b: 140 },
    { r: 35, g: 100, b: 170 },
    // ダークブルー
    { r: 15, g: 50, b: 110 },
    { r: 10, g: 40, b: 100 },
    { r: 20, g: 60, b: 120 },
    { r: 12, g: 45, b: 95 },
  ];

  // カメラ設定
  const camera = {
    angle: 0.7,
  };

  const init = useCallback((width, height) => {
    const cols = 22;
    const rows = 16;
    const points = [];

    const cellWidth = width / (cols - 1);
    const cellHeight = height / (rows - 1);

    // ポイント生成
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const baseX = col * cellWidth;
        const baseY = row * cellHeight;

        const isEdge = col === 0 || col === cols - 1 || row === 0 || row === rows - 1;
        const offsetX = isEdge ? 0 : (Math.random() - 0.5) * cellWidth * 0.6;
        const offsetY = isEdge ? 0 : (Math.random() - 0.5) * cellHeight * 0.6;

        // 複雑な高さマップ（複数の波を合成）
        const nx = baseX / width;
        const ny = baseY / height;

        let z = 0;
        if (!isEdge) {
          z += Math.sin(nx * 4 + ny * 2) * 30;
          z += Math.cos(nx * 2 - ny * 3) * 25;
          z += Math.sin(nx * 6 + ny * 4) * 15;
          z += (Math.random() - 0.3) * 40;

          const centerDist = Math.sqrt((nx - 0.5) ** 2 + (ny - 0.5) ** 2);
          z += (1 - centerDist) * 30;
        }

        points.push({
          x: baseX + offsetX,
          y: baseY + offsetY,
          z: z,
          baseX: baseX + offsetX,
          baseY: baseY + offsetY,
          baseZ: z,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          phaseX: Math.random() * Math.PI * 2,
          phaseZ: Math.random() * Math.PI * 2,
          isEdge,
        });
      }
    }

    // 三角形生成
    const triangles = [];
    for (let row = 0; row < rows - 1; row++) {
      for (let col = 0; col < cols - 1; col++) {
        const topLeft = row * cols + col;
        const topRight = topLeft + 1;
        const bottomLeft = (row + 1) * cols + col;
        const bottomRight = bottomLeft + 1;

        const positionFactor = (row / rows + col / cols) / 2;

        const colorIndex1 = Math.floor(
          (positionFactor * 0.5 + Math.random() * 0.5) * colorPalette.length
        );
        const colorIndex2 = Math.floor(
          (positionFactor * 0.5 + Math.random() * 0.5) * colorPalette.length
        );

        triangles.push({
          p1: topLeft,
          p2: topRight,
          p3: bottomLeft,
          baseColor: colorPalette[Math.min(colorIndex1, colorPalette.length - 1)],
          colorVariation: Math.random() * 0.3 - 0.15,
        });
        triangles.push({
          p1: topRight,
          p2: bottomRight,
          p3: bottomLeft,
          baseColor: colorPalette[Math.min(colorIndex2, colorPalette.length - 1)],
          colorVariation: Math.random() * 0.3 - 0.15,
        });
      }
    }

    pointsRef.current = points;
    trianglesRef.current = triangles;
  }, []);

  const projectPoint = (point) => {
    return {
      x: point.x,
      y: point.y - point.z * camera.angle,
      z: point.z,
    };
  };

  const calculateNormal = (p1, p2, p3) => {
    const v1 = { x: p2.x - p1.x, y: p2.y - p1.y, z: p2.z - p1.z };
    const v2 = { x: p3.x - p1.x, y: p3.y - p1.y, z: p3.z - p1.z };

    const normal = {
      x: v1.y * v2.z - v1.z * v2.y,
      y: v1.z * v2.x - v1.x * v2.z,
      z: v1.x * v2.y - v1.y * v2.x,
    };

    const length = Math.sqrt(normal.x ** 2 + normal.y ** 2 + normal.z ** 2);
    if (length > 0) {
      normal.x /= length;
      normal.y /= length;
      normal.z /= length;
    }

    return normal;
  };

  const calculateBrightness = (normal) => {
    const lightLength = Math.sqrt(light.x ** 2 + light.y ** 2 + light.z ** 2);
    const normalizedLight = {
      x: light.x / lightLength,
      y: light.y / lightLength,
      z: light.z / lightLength,
    };

    let dot = normal.x * normalizedLight.x +
              normal.y * normalizedLight.y +
              normal.z * normalizedLight.z;

    return Math.max(0.15, Math.min(1, dot * 0.5 + 0.5));
  };

  const updatePoints = useCallback((time) => {
    const points = pointsRef.current;

    points.forEach((point) => {
      if (point.isEdge) return;

      const waveZ = Math.sin(time * 0.0006 + point.phaseZ + point.baseX * 0.0015) * 18;
      const waveZ2 = Math.cos(time * 0.0005 + point.phaseX + point.baseY * 0.002) * 12;

      point.z = point.baseZ + waveZ + waveZ2;

      point.x += point.vx;
      point.y += point.vy;

      const dx = point.x - point.baseX;
      const dy = point.y - point.baseY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > 10) {
        point.vx -= dx * 0.01;
        point.vy -= dy * 0.01;
      }

      point.vx += (Math.random() - 0.5) * 0.02;
      point.vy += (Math.random() - 0.5) * 0.02;

      const maxSpeed = 0.25;
      const speed = Math.sqrt(point.vx * point.vx + point.vy * point.vy);
      if (speed > maxSpeed) {
        point.vx = (point.vx / speed) * maxSpeed;
        point.vy = (point.vy / speed) * maxSpeed;
      }
    });
  }, []);

  const draw = useCallback((ctx, width, height) => {
    const points = pointsRef.current;
    const triangles = trianglesRef.current;

    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#020810');
    gradient.addColorStop(0.5, '#051525');
    gradient.addColorStop(1, '#030a15');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    const projectedPoints = points.map(p => projectPoint(p));

    const sortedTriangles = triangles
      .map((triangle) => {
        const p1 = points[triangle.p1];
        const p2 = points[triangle.p2];
        const p3 = points[triangle.p3];
        const avgZ = (p1.z + p2.z + p3.z) / 3;
        const avgY = (p1.y + p2.y + p3.y) / 3;

        const proj1 = projectedPoints[triangle.p1];
        const proj2 = projectedPoints[triangle.p2];
        const proj3 = projectedPoints[triangle.p3];

        return { ...triangle, avgZ, avgY, p1, p2, p3, proj1, proj2, proj3 };
      })
      .sort((a, b) => {
        return (a.avgY - a.avgZ * 0.5) - (b.avgY - b.avgZ * 0.5);
      });

    sortedTriangles.forEach((triangle) => {
      const { p1, p2, p3, proj1, proj2, proj3, avgZ, baseColor, colorVariation } = triangle;

      const normal = calculateNormal(p1, p2, p3);

      if (normal.z < -0.2) return;

      const brightness = calculateBrightness(normal);
      const zBrightness = Math.max(0.3, Math.min(1.2, (avgZ + 60) / 100));
      const finalBrightness = brightness * zBrightness * (1 + colorVariation);

      const r = Math.max(0, Math.min(255, Math.floor(baseColor.r * finalBrightness)));
      const g = Math.max(0, Math.min(255, Math.floor(baseColor.g * finalBrightness)));
      const b = Math.max(0, Math.min(255, Math.floor(baseColor.b * finalBrightness)));

      ctx.beginPath();
      ctx.moveTo(proj1.x, proj1.y);
      ctx.lineTo(proj2.x, proj2.y);
      ctx.lineTo(proj3.x, proj3.y);
      ctx.closePath();

      ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
      ctx.fill();

      if (finalBrightness > 0.6) {
        ctx.strokeStyle = `rgba(${Math.min(255, r + 40)}, ${Math.min(255, g + 50)}, ${Math.min(255, b + 30)}, 0.4)`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    });

    const blurGradient = ctx.createLinearGradient(0, 0, 0, height * 0.4);
    blurGradient.addColorStop(0, 'rgba(5, 15, 30, 0.7)');
    blurGradient.addColorStop(1, 'rgba(5, 15, 30, 0)');
    ctx.fillStyle = blurGradient;
    ctx.fillRect(0, 0, width, height * 0.4);
  }, []);

  const animate = useCallback((time) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    updatePoints(time);
    draw(ctx, width, height);

    animationRef.current = requestAnimationFrame(animate);
  }, [updatePoints, draw]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init(canvas.width, canvas.height);
    };

    resize();
    window.addEventListener('resize', resize);

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [init, animate]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
    />
  );
};

export default PolygonBackground;
