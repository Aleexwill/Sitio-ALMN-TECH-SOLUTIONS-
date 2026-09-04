import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'ALMN TECH & SOLUTIONS | Una nueva dimensión',description:'Explora el universo de ALMN TECH & SOLUTIONS. Tecnología, ideas y una mirada hacia el futuro.'};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="es" className="dark"><body>{children}</body></html>}
