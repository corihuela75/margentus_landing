# Margentus — Landing pública

Sitio estático de presentación de **Margentus** (inteligencia de rentabilidad para gastronomía).

Esta landing es la cara pública de **Capa 0**: describe el proyecto y su etapa real
—prototipo visual y MVP en desarrollo— sin promesas comerciales, sin precios, sin
contratación y sin métricas de tracción inventadas. La demo es un entorno de
demostración, no el producto comercial terminado.

- Producción: https://margentus.com/ · https://margentus.com/proyecto.html
- Demo (repo aparte): https://margentus-demo.onrender.com/dashboard

## Estructura

```
index.html                     Página principal
proyecto.html                  Registro público del proyecto (origen, modelo, método, estado)
css/
  margentus.css                Tokens de diseño (DGL v3.0) y base
  margentus-components.css     Componentes (secciones, cards, convocatorias, demo)
  margentus-responsive.css     Breakpoints: desktop ≥1200 · tablet 768–1199 · mobile ≤767
js/
  convocatorias.js             Fuente única de convocatorias + renderer (index resumen / proyecto detalle)
img/
  logos/                       Marca (SVG)
  prototipo/                   Capturas del prototipo
  og/                          Imagen para compartir (Open Graph 1200×630)
```

Sin build ni dependencias: HTML + CSS + JS plano.

## Servir en local

Cualquier servidor estático desde la raíz del repo:

```bash
python -m http.server 8000
# o
npx serve .
```

Luego abrir http://localhost:8000/.

## Deploy

Sitio estático sin paso de build: se publica la **raíz** del repositorio en el hosting
conectado a este repo. No hay archivo de configuración de deploy versionado
(`netlify.toml`/`vercel.json`/`CNAME`) en el repositorio; si se define uno, conviene
registrarlo también acá.

## Reglas del repositorio

- **La demo puede cambiar a diario. La landing solo cambia con una decisión explícita de Capa 0.**
- Sin CTA comercial: no hay "contratar", "comprar", "gratis" ni "piloto".
- La etapa se expresa siempre como **prototipo visual · MVP en desarrollo**.
- No publicar métricas, resultados de convocatorias ni claims que no estén confirmados.
- Las convocatorias se editan **solo** en `js/convocatorias.js` (fuente única para ambas páginas).
- La demo vive en otro repositorio (`margentus-demo`); este repo no la modifica.
  Si el demo está dormido (Render), avisarlo en el microcopy del CTA, sin ocultar el enlace.
