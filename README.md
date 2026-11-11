# ALMN PROJECTS

Sitio de soluciones tecnológicas en español. El recorrido de la página es un circuito de información: entrada → señal → procesamiento → flujo → salida → conexión, con una pista que se energiza al hacer scroll.

## Desarrollo

npm install
npm run dev

## Compilación

npm run build

## Contenido

Textos, servicios y datos de contacto se editan en `lib/site.ts`. El formulario de contacto se activa al completar `contact.email` o `contact.whatsapp`.

## Vercel

Vercel usa vercel.json y npm run build:vercel para exportar la página a dist/client. Usar Node.js 22. El comando npm run build conserva la salida de Sites.

