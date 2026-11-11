'use client';
import { useEffect, useRef } from 'react';

/**
 * Pista vertical que une los nodos de la página ([data-node]).
 * Se va "energizando" con el scroll y enciende cada nodo al alcanzarlo.
 */
export function CircuitRail() {
  const rail = useRef<HTMLDivElement>(null);
  const fill = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rail.current;
    const bar = fill.current;
    const host = el?.parentElement;
    if (!el || !bar || !host) return;

    let start = 0;
    let length = 0;
    let nodes: { el: HTMLElement; y: number }[] = [];
    let frame = 0;

    const centerY = (n: HTMLElement) => {
      const r = n.getBoundingClientRect();
      return r.top + r.height / 2 - host.getBoundingClientRect().top;
    };

    const measure = () => {
      const all = Array.from(host.querySelectorAll<HTMLElement>('[data-node]'));
      if (all.length < 2) return;
      nodes = all.map((n) => ({ el: n, y: centerY(n) }));
      start = nodes[0].y;
      length = nodes[nodes.length - 1].y - start;
      el.style.top = `${start}px`;
      el.style.height = `${length}px`;
      update();
    };

    const update = () => {
      frame = 0;
      const hostTop = host.getBoundingClientRect().top;
      const probe = window.innerHeight * 0.6 - hostTop - start;
      const progress = Math.max(0, Math.min(length, probe));
      bar.style.height = `${progress}px`;
      for (const n of nodes) n.el.classList.toggle('is-live', n.y - start <= progress + 1);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(host);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', measure);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="rail" ref={rail} aria-hidden="true">
      <div className="rail-fill" ref={fill}>
        <span className="rail-packet" />
      </div>
    </div>
  );
}
