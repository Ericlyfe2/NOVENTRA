"use client";
import { useEffect, useRef } from "react";

export default function ShaderBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    function syncSize() {
      const w = canvas.clientWidth || 1280;
      const h = canvas.clientHeight || 720;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    }
    if (typeof ResizeObserver !== "undefined") {
      new ResizeObserver(syncSize).observe(canvas);
    }
    syncSize();

    const gl =
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) return;

    const vs = `attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;
    const fs = `precision highp float;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform vec2 u_scroll;
uniform float u_light;
varying vec2 v_texCoord;

#define NODES 20

vec2 hash2(vec2 p) {
  return fract(sin(vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3))))*43758.5453);
}

void main() {
  vec2 uv = v_texCoord;
  vec2 pos = uv * u_resolution;
  vec2 mouse = u_mouse / u_resolution;

  vec3 dark = vec3(0.02, 0.04, 0.08);
  vec3 accent = vec3(0.30, 0.52, 0.98);
  vec3 accentDim = accent * 0.4;

  vec3 col = vec3(0.0);

  float gridSize = 40.0;
  vec2 gridId = floor(pos / gridSize);
  vec2 gridPos = fract(pos / gridSize);

  float lineX = 1.0 - smoothstep(0.0, 1.5, abs(gridPos.x - 0.5));
  float lineY = 1.0 - smoothstep(0.0, 1.5, abs(gridPos.y - 0.5));
  float grid = max(lineX, lineY) * 0.04;
  col += grid;

  float time = u_time * 0.3;
  for (int i = 0; i < NODES; i++) {
    float fi = float(i);
    vec2 nodeId = vec2(
      fract(fi * 0.618033988749895 + time * 0.02),
      fract(fi * 0.381966011250105 + time * 0.015)
    );
    vec2 nodePos = nodeId;

    float seed = fract(sin(fi * 43758.5453) * 12345.6789);
    float pulsePhase = time * (0.5 + seed * 0.5) + fi;
    float pulse = sin(pulsePhase) * 0.5 + 0.5;

    float dist = distance(uv, nodePos);
    float glow = 0.0025 / (dist + 0.0025);
    float nodeBright = glow * (0.3 + pulse * 0.7);
    col += accent * nodeBright * 0.5;

    float coreDist = distance(uv, nodePos);
    float core = 1.0 - smoothstep(0.0, 0.008, coreDist);
    col += accent * core * (0.5 + pulse * 0.5);

    vec2 nodeB = vec2(
      fract(fi * 0.618033988749895 + (time + 1.0) * 0.02),
      fract(fi * 0.381966011250105 + (time + 1.0) * 0.015)
    );
    vec2 pulseStart = mix(nodePos, nodeB, fract(time * 0.1 + fi * 0.05));
    float pulseDist = distance(uv, pulseStart);
    float pulseLine = 0.005 / (pulseDist + 0.005);
    col += accentDim * pulseLine * (0.5 + 0.5 * sin(time * 0.5 + fi));
  }

  float scanLine = sin(uv.y * u_resolution.y * 0.5 - u_time * 3.0) * 0.5 + 0.5;
  scanLine = smoothstep(0.0, 0.3, scanLine) * 0.03;
  col += scanLine;

  float mouseDist = distance(uv, mouse);
  float mouseGlow = 0.03 / (mouseDist + 0.03);
  col += accent * mouseGlow * 0.3;

  float vignette = 1.0 - distance(uv, vec2(0.5)) * 0.6;

  vec3 darkCol = (dark + col) * vignette;
  darkCol = pow(darkCol, vec3(0.9));

  vec3 lightBase = vec3(0.957, 0.968, 0.984);
  float energy = clamp(dot(col, vec3(0.45)), 0.0, 1.0);
  vec3 lightCol = mix(lightBase, vec3(0.16, 0.38, 0.92), energy * 0.55);
  lightCol *= mix(1.0, vignette, 0.12);

  gl_FragColor = vec4(mix(darkCol, lightCol, u_light), 1.0);
}`;

    function cs(type, src) {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    }
    const prog = gl.createProgram();
    gl.attachShader(prog, cs(gl.VERTEX_SHADER, vs));
    gl.attachShader(prog, cs(gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(prog);
    gl.useProgram(prog);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );
    const pos = gl.getAttribLocation(prog, "a_position");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);
    const uTime = gl.getUniformLocation(prog, "u_time");
    const uRes = gl.getUniformLocation(prog, "u_resolution");
    const uMouse = gl.getUniformLocation(prog, "u_mouse");
    const uScroll = gl.getUniformLocation(prog, "u_scroll");
    const uLight = gl.getUniformLocation(prog, "u_light");

    const isLight = () => (document.documentElement.classList.contains("dark") ? 0 : 1);
    let lightTarget = isLight();
    let lightMix = lightTarget;
    const themeObserver = new MutationObserver(() => {
      lightTarget = isLight();
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    let mouse = { x: canvas.width / 2, y: canvas.height / 2 };
    let scrollY = 0;
    function onMouseMove(event) {
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        const nx = (event.clientX - rect.left) / rect.width;
        const ny = 1.0 - (event.clientY - rect.top) / rect.height;
        mouse.x = nx * canvas.width;
        mouse.y = ny * canvas.height;
      }
    }
    function onScroll() {
      scrollY = window.scrollY;
    }
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("scroll", onScroll, { passive: true });

    let animId;
    function render(t) {
      if (typeof ResizeObserver === "undefined") syncSize();
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, t * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y + scrollY * 0.3);
      if (uScroll) gl.uniform2f(uScroll, 0, scrollY);
      lightMix += (lightTarget - lightMix) * 0.08;
      if (uLight) gl.uniform1f(uLight, lightMix);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animId = requestAnimationFrame(render);
    }
    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      themeObserver.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="shader-canvas"
      style={{ display: "block", width: "100%", height: "100%" }}
    />
  );
}
