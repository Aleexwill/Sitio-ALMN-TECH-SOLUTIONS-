import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ALMN PROJECTS | Soluciones tecnológicas',
  description:
    'Desarrollo de software, automatización, cloud, datos, IA y ciberseguridad. Conectamos cada parte de tu negocio en un solo circuito.',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'ALMN PROJECTS | Soluciones tecnológicas',
    description: 'Conectamos cada parte de tu negocio en un solo circuito.',
    images: ['/almn-projects-logo.png'],
    locale: 'es',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@400;500;600&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
