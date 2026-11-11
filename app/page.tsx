import { ArrowDown, ArrowUpRight, Mail, MessageCircle } from 'lucide-react';
import { CircuitRail } from '@/components/site/circuit-rail';
import { ContactForm } from '@/components/site/contact-form';
import { HeroBoard } from '@/components/site/hero-board';
import { contact, outputs, signals, solutions, steps } from '@/lib/site';

function Node({ index, label }: { index: string; label: string }) {
  return (
    <p className="eyebrow">
      <span className="node" data-node aria-hidden="true" />
      <span className="node-index">NODO {index}</span>
      <span className="node-sep" aria-hidden="true">/</span>
      {label}
    </p>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Ir al contenido
      </a>

      <header className="header">
        <a href="#inicio" className="logo" aria-label="ALMN Projects, inicio">
          <img src="/almn-projects-logo.png" alt="" width="397" height="143" />
        </a>
        <nav aria-label="Navegación principal">
          <a href="#soluciones">Soluciones</a>
          <a href="#metodo">Método</a>
          <a href="#resultados">Resultados</a>
          <a href="#contacto" className="btn btn-ghost">
            Hablemos <ArrowUpRight size={16} />
          </a>
        </nav>
      </header>

      <main id="contenido" className="circuit">
        <CircuitRail />

        {/* 00 · ENTRADA */}
        <section id="inicio" className="hero">
          <div className="hero-copy">
            <Node index="00" label="ENTRADA" />
            <h1>
              Conectamos cada parte de tu negocio en <em>un solo circuito.</em>
            </h1>
            <p className="lead">
              Soluciones tecnológicas que hacen fluir la información: de la idea al sistema, del dato a la
              decisión.
            </p>
            <div className="actions">
              <a href="#senal" className="btn btn-primary">
                Iniciar el recorrido <ArrowDown size={18} />
              </a>
              <a href="#soluciones" className="btn btn-ghost">
                Ver soluciones
              </a>
            </div>
            <p className="status">
              <span className="status-led" /> SISTEMA EN LÍNEA · 6 NODOS · 6 MÓDULOS
            </p>
          </div>
          <HeroBoard />
        </section>

        {/* 01 · SEÑAL */}
        <section id="senal" className="block">
          <Node index="01" label="SEÑAL" />
          <div className="split">
            <div>
              <h2>Todo empieza con una señal.</h2>
              <p className="lead">
                Cada proyecto nace de algo que hoy no fluye como debería. Lo detectamos antes de escribir una
                sola línea de código.
              </p>
            </div>
            <ul className="signals">
              {signals.map((s) => (
                <li key={s.id}>
                  <code>{s.id}</code>
                  <span>{s.text}</span>
                  <i aria-hidden="true" />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 02 · PROCESAMIENTO */}
        <section id="soluciones" className="block">
          <Node index="02" label="PROCESAMIENTO" />
          <div className="block-head">
            <h2>
              Soluciones que procesan
              <br />
              <span className="dim">cada necesidad.</span>
            </h2>
            <p className="lead">
              Módulos que se combinan según tu proyecto. Cada uno resuelve una parte; juntos forman el sistema.
            </p>
          </div>
          <div className="modules">
            {solutions.map((m) => (
              <article key={m.id} className="module">
                <div className="module-top">
                  <code>{m.id}</code>
                  <span className="module-led" aria-hidden="true" />
                </div>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
                <ul className="tags">
                  {m.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* 03 · FLUJO */}
        <section id="metodo" className="block">
          <Node index="03" label="FLUJO" />
          <div className="block-head">
            <h2>
              Un flujo claro,
              <br />
              <span className="dim">de la idea a la operación.</span>
            </h2>
          </div>
          <ol className="flow">
            {steps.map((s, i) => (
              <li key={s.title}>
                <span className="flow-pad">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* 04 · SALIDA */}
        <section id="resultados" className="block">
          <Node index="04" label="SALIDA" />
          <div className="block-head">
            <h2>
              Lo que sale
              <br />
              <span className="dim">del circuito.</span>
            </h2>
            <p className="lead">El resultado no es solo un sistema: es una operación que funciona mejor.</p>
          </div>
          <div className="outputs">
            {outputs.map((o) => (
              <article key={o.id}>
                <code>{o.id} →</code>
                <h3>{o.title}</h3>
                <p>{o.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* 05 · CONEXIÓN */}
        <section id="contacto" className="block contact">
          <Node index="05" label="CONEXIÓN" />
          <div className="split">
            <div>
              <h2>
                Conectemos tu
                <br />
                <em>próximo proyecto.</em>
              </h2>
              <p className="lead">Cuéntanos qué necesitas resolver y diseñamos el circuito contigo.</p>
              <div className="channels">
                {contact.email && (
                  <a href={`mailto:${contact.email}`}>
                    <Mail size={18} /> {contact.email}
                  </a>
                )}
                {contact.whatsapp && (
                  <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={18} /> WhatsApp
                  </a>
                )}
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="footer">
        <img src="/almn-projects-logo.png" alt="ALMN Projects" width="397" height="143" loading="lazy" />
        <p>Soluciones tecnológicas</p>
        <a href="#inicio">↺ Volver al inicio del circuito</a>
        <span>© {new Date().getFullYear()} ALMN PROJECTS</span>
      </footer>
    </>
  );
}
