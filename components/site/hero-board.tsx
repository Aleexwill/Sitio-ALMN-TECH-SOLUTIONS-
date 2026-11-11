// Placa de circuito del hero: las señales viajan desde los bordes hacia el chip central.

const traces = [
  { d: 'M20 90 H120 L160 130 V210 H230', label: 'DATOS', lx: 20, ly: 78, dur: 3.4, delay: 0 },
  { d: 'M20 240 H230', label: 'PROCESOS', lx: 20, ly: 228, dur: 2.8, delay: 0.9 },
  { d: 'M20 400 H110 L150 360 V270 H230', label: 'EQUIPOS', lx: 20, ly: 418, dur: 3.8, delay: 1.6 },
  { d: 'M580 70 H470 L430 110 V210 H370', label: 'CLOUD', lx: 580, ly: 58, dur: 3.2, delay: 0.4 },
  { d: 'M580 240 H370', label: 'APPS', lx: 580, ly: 228, dur: 2.6, delay: 1.3 },
  { d: 'M580 410 H490 L440 360 V270 H370', label: 'SEGURIDAD', lx: 580, ly: 428, dur: 3.6, delay: 2.1 },
  { d: 'M300 20 V190', dur: 2.4, delay: 0.6 },
  { d: 'M180 20 V60 L260 140 V190', dur: 3, delay: 1.9 },
  { d: 'M420 20 V50 L340 130 V190', dur: 3.1, delay: 2.6 },
  { d: 'M300 460 V290', dur: 2.5, delay: 1.1 },
  { d: 'M200 460 V420 L260 360 V290', dur: 3.3, delay: 0.2 },
  { d: 'M400 460 V420 L340 360 V290', label: 'IA', lx: 390, ly: 464, dur: 2.9, delay: 2.3 },
];

function start(d: string) {
  const [x, y] = d.slice(1).split(/[ A-Z]/).filter(Boolean).map(Number);
  return { x, y };
}

export function HeroBoard() {
  return (
    <div className="board">
      <span className="board-corner tl" />
      <span className="board-corner tr" />
      <span className="board-corner bl" />
      <span className="board-corner br" />
      <svg viewBox="0 0 600 480" aria-hidden="true">
        <defs>
          <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="currentColor" opacity="0.12" />
          </pattern>
          <radialGradient id="chip-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1a8cff" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#1a8cff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="600" height="480" fill="url(#dots)" />
        <circle cx="300" cy="240" r="170" fill="url(#chip-glow)" />

        {traces.map((t, i) => {
          const s = start(t.d);
          return (
            <g key={i}>
              <path className="trace" d={t.d} />
              <path
                className="pulse"
                d={t.d}
                pathLength={100}
                style={{ animationDuration: `${t.dur}s`, animationDelay: `${t.delay}s` }}
              />
              <circle className="via" cx={s.x} cy={s.y} r="4.5" />
              {t.label && (
                <text className="trace-label" x={t.lx} y={t.ly} textAnchor={t.lx > 300 ? 'end' : 'start'}>
                  {t.label}
                </text>
              )}
            </g>
          );
        })}

        {/* Chip central */}
        <g className="chip">
          {[210, 240, 270].map((y) => (
            <g key={y}>
              <rect x="222" y={y - 3} width="10" height="6" />
              <rect x="368" y={y - 3} width="10" height="6" />
            </g>
          ))}
          {[260, 300, 340].map((x) => (
            <g key={x}>
              <rect x={x - 3} y="182" width="6" height="10" />
              <rect x={x - 3} y="288" width="6" height="10" />
            </g>
          ))}
          <rect className="chip-body" x="230" y="190" width="140" height="100" rx="6" />
          <rect className="chip-inner" x="240" y="200" width="120" height="80" rx="3" />
          <image href="/almn-projects-logo.png" x="250" y="222" width="100" height="36" />
        </g>
      </svg>
    </div>
  );
}
