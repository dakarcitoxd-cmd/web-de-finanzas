# Finance+

Blog de finanzas personales en inglés, construido con Astro 7 + Bun + Decap CMS + Tailwind CSS v4.

## Stack

| Componente | Tecnología |
|---|---|
| Framework | Astro 7 |
| Runtime | Bun |
| CMS | Decap CMS |
| Estilos | Tailwind CSS v4 |
| Anuncios | Google AdSense |
| SEO | Sitemap automático + RSS |
| Hosting | Cloudflare Pages |

## ¿Cómo funciona?

- Los artículos se escriben en Markdown dentro de `src/content/blog/`
- Se pueden crear/editan desde `/admin/` vía Decap CMS
- En cada build, Astro genera HTML estático en `dist/`
- Cloudflare Pages deploya automáticamente con cada `git push`
- Los anuncios de AdSense se controlan con la variable `PUBLIC_ADSENSE_CLIENT_ID`

## Estructura

```
├── src/
│   ├── content.config.ts        → Schema de la colección blog
│   ├── content/blog/            → Artículos en .md
│   ├── layouts/                 → BaseLayout + BlogLayout
│   ├── pages/                   → index, blog/index, blog/[...slug], rss.xml
│   ├── components/              → Header, Footer, AdSense
│   └── styles/global.css        → Tailwind v4 + theme
├── public/admin/                → Decap CMS (index.html + config.yml)
├── functions/api/               → Proxy OAuth para login con GitHub (Cloudflare Pages Functions)
└── .env.example                 → Template para AdSense
```

## Comandos

| Comando | Acción |
|---|---|
| `bun run dev` | Dev server en localhost:4321 |
| `bun run build` | Build a dist/ |
| `bun run preview` | Previsualizar build |

## Estrategia de contenido

### Frecuencia
Mínimo 3-4 artículos por semana. Ideal: 5-10 diarios.

### SEO
- Títulos que sean búsquedas exactas del usuario
- URLs cortas con keyword
- Meta description con gancho
- Contenido evergreen + noticias del día

### Redes recomendadas
1. X (Twitter) — noticias financieras, hilos educativos
2. LinkedIn — artículos profesionales
3. YouTube — reviews de productos financieros
4. Newsletter (Buttondown o ConvertKit)

### Autoridad
No se necesitan títulos. Se construye citando fuentes reales (datos del gobierno, estudios, casos concretos) y siendo consistente.

### Formatos que funcionan
- Artículos largos (1500-2500 palabras)
- Listicles ("5 investment mistakes that cost you money")
- Casos reales ("I saved $50k in 2 years on a $40k salary")
- Guías paso a paso
- Noticias con opinión
- Videos cortos resumiendo el artículo

### Títulos estilo El Blog Salmón
Usar nombres, edades, oficios y cifras exactas. Ejemplo: `"Marta (23), pastelera: 'Empiezo a trabajar a las 3 de la madrugada y salgo a las 11'"`. La gente hace clic porque se identifica.

## Deploy

Conectado a Cloudflare Pages. Push a `main` → build automático.
