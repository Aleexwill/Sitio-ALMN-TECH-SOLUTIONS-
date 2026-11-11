'use client';
import { useState, type SyntheticEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { contact } from '@/lib/site';

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const enabled = Boolean(contact.email || contact.whatsapp);

  function submit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!enabled) return;
    const data = new FormData(e.currentTarget);
    const field = (key: string) => {
      const value = data.get(key);
      return typeof value === 'string' ? value.trim() : '';
    };
    const name = field('nombre');
    const company = field('empresa');
    const message = field('mensaje');
    const body = `Hola, soy ${name}${company ? ` de ${company}` : ''}.\n\n${message}`;
    const url = contact.email
      ? `mailto:${contact.email}?subject=${encodeURIComponent('Nuevo proyecto')}&body=${encodeURIComponent(body)}`
      : `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(body)}`;
    window.open(url, '_blank', 'noopener');
    setSent(true);
  }

  return (
    <form className="terminal" onSubmit={submit}>
      <div className="terminal-bar">
        <span />
        <span />
        <span />
        <code>almn://nuevo-proyecto</code>
      </div>
      <div className="terminal-body">
        <label>
          <span>&gt; nombre</span>
          <input name="nombre" required autoComplete="name" placeholder="Tu nombre" />
        </label>
        <label>
          <span>&gt; empresa</span>
          <input name="empresa" autoComplete="organization" placeholder="Opcional" />
        </label>
        <label>
          <span>&gt; necesidad</span>
          <textarea name="mensaje" required rows={4} placeholder="¿Qué te gustaría resolver?" />
        </label>
        <button type="submit" className="btn btn-primary" disabled={!enabled}>
          {sent ? 'Señal enviada' : 'Enviar señal'} <ArrowUpRight size={18} />
        </button>
        {!enabled && <p className="terminal-note">Canal de contacto en configuración.</p>}
      </div>
    </form>
  );
}
