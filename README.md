# DERMIS — Prototipo funcional

Asistente inteligente de maquillaje pensado como **espejo digital**: guía paso a paso para recrear un look de referencia (y diseñar cejas) usando la **webcam real** con guías visuales superpuestas sobre el rostro.

> Ver qué hacer → aprender cómo hacerlo → hacerlo mirándote en cámara → recibir feedback → corregir → avanzar.

El diseño visual es el creado en Claude Design (`DERMIS Prototipo.dc.html`), migrado a **React + TypeScript + Vite** conservando layout, paleta, tipografía (Satoshi), imágenes y estilos.

---

## Enviar DERMIS a otra persona (sin instalar nada)

```bash
npm run build:single
```

Genera **`dist-single/DERMIS.html`**: un único archivo (~2,6 MB) con todo adentro (código, estilos e imágenes).
Se envía por mail, WhatsApp o Drive. Quien lo recibe le hace **doble clic** y lo abre en **Google Chrome o Microsoft Edge**.
Funciona con la **cámara real**: el navegador pide permiso al entrar a una pantalla de cámara.

- Requiere Chrome o Edge en la computadora. Safari puede no permitir la cámara en archivos locales.
- Al abrir el archivo desde el disco, Chrome puede volver a pedir el permiso de cámara cada vez que se abre.
- El progreso se guarda en el navegador de esa computadora.
- La tipografía Satoshi se descarga de internet. Sin conexión se usa una fuente del sistema y todo lo demás funciona igual.

## Inicio rápido del proyecto completo (en otro equipo)

1. Instalá **Node.js LTS** desde https://nodejs.org (una sola vez).
2. Descomprimí el ZIP.
3. Doble clic en:
   - **Windows:** `Iniciar DERMIS (Windows).bat`
   - **Mac:** `Iniciar DERMIS (Mac).command`. Si macOS no lo deja abrir: clic derecho → Abrir. Si dice que no tiene permisos, ejecutá una vez `chmod +x "Iniciar DERMIS (Mac).command"` en la Terminal, dentro de la carpeta.
4. La primera vez instala las dependencias (necesita internet, ~1 minuto). Después se abre el navegador en **http://localhost:5173**.
5. Aceptá el permiso de cámara. Dejá abierta la ventana negra mientras usás DERMIS.

> No abras `index.html` con doble clic: así la app y la cámara no funcionan. Usá siempre el lanzador, o `npm run dev`.

## Requisitos

- **Node.js 18 o superior** (probado con Node 24 LTS) y npm.
- Navegador moderno (Chrome, Edge, Safari o Firefox actualizados).
- Una webcam para las pantallas de cámara.

## Instalación y ejecución

```bash
npm install
```

```bash
npm run dev
```

Abrí **http://localhost:5173** en el navegador y aceptá el permiso de cámara cuando lo pida.

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo en `http://localhost:5173` |
| `npm run dev:https` | Servidor con HTTPS (certificado autofirmado) accesible desde la red local, para probar en otro dispositivo |
| `npm run build` | Chequeo de tipos (TypeScript) + build de producción en `dist/` |
| `npm run build:single` | Genera `dist-single/DERMIS.html`, un archivo único para enviar y abrir con doble clic |
| `npm run preview` | Sirve el build de producción localmente |
| `npm run typecheck` | Solo chequeo de tipos |

## Cámara: requisitos importantes

- `getUserMedia()` **solo funciona en contextos seguros: `localhost` o `HTTPS`**. Abrir el `index.html` con doble clic (`file://`) o desde una IP con `http://` **no** habilita la cámara.
- Para presentar desde otro dispositivo de la red usá `npm run dev:https` y aceptá la advertencia del certificado autofirmado.
- Si el permiso fue denegado, DERMIS muestra "No pudimos acceder a tu cámara." con **Intentar nuevamente**. Para reactivarlo, hacé clic en el ícono de cámara de la barra de direcciones y elegí "Permitir".
- La cámara se apaga automáticamente (se detienen los `MediaStream` tracks) al salir de cualquier pantalla de cámara.
- Modo espejo activado por defecto (`transform: scaleX(-1)`); se puede desactivar desde el ícono de ajustes de la cámara o desde "Ver perfil".
- Atajos en la pantalla de feedback: **Espacio** = volver a analizar · **P** = pausar · **C** = comparar · **Enter** = completar (cuando está habilitado).

---

## Qué funciona realmente y qué está simulado

### Funciona realmente
- Navegación con rutas reales (React Router) y sidebar con estado activo.
- **Webcam real** (`navigator.mediaDevices.getUserMedia`, `facingMode: "user"`), modo espejo, estados de permiso (solicitando, concedido, denegado, sin cámara, contexto inseguro, error) y reintento.
- Liberación de la cámara al salir (tracks detenidos).
- **Captura de imagen** desde el video a un `<canvas>` → preview → "Usar foto" / "Repetir".
- **Subida de imágenes** desde la galería (`<input type="file" accept="image/*">`) con preview, cambiar y eliminar. Las imágenes se reducen en el navegador; nada se sube a un servidor.
- Overlays SVG reutilizables (`FaceGuide`) que escalan con el video y muestran **solo** las zonas del paso actual.
- Flujo completo de maquillaje (8 pasos) y de cejas (4 pasos): orientación, tutorial con miniaturas, cámara, completar paso, avanzar y resultado final.
- Progreso, pasos completados, paso actual y cronómetro de la sesión.
- Favoritos (looks, productos, herramientas), filtros de productos, colección (agregar por cámara / galería / manual), búsqueda, looks guardados (ver, comparar, recrear, eliminar), rutina de cuidado post-maquillaje.
- **Persistencia en `localStorage`**: sesión de maquillaje, sesión de cejas, favoritos, colección, looks guardados, rutina, preferencias, captura del escaneo y del resultado. Al recargar, Home muestra "Retomar maquillaje" en el paso correcto.
- "Ver perfil" → "Restablecer datos de la demo" vuelve todo al estado inicial.

### Simulado para el prototipo
- **Análisis facial** (forma del rostro, subtono, tipo de piel): animación de ~3 s con datos de demostración (`src/data/content.ts → MOCK_FACE_ANALYSIS`).
- **Feedback de aplicación** ("Aplicá un poco más en esta zona", "Difuminá suavemente…", "¡Muy bien!…"): máquina de estados guionada (`src/analysis/useFeedbackSimulation.ts`) que avanza con "Volver a analizar". **No analiza la imagen.**
- **Ubicación de las guías**: no hay detección de landmarks; las zonas se ubican de forma proporcional dentro del encuadre y la persona alinea su cara con el óvalo guía.
- Detección de vellos, evaluación de cantidad de producto, simetría y comparación inteligente con la referencia.
- Reconocimiento de productos al fotografiarlos (se propone una sugerencia editable).
- Recomendación por outfit (colores/estilo/ocasión y 3 looks predefinidos).

El código marca estas partes con comentarios `⚠️ SIMULACIÓN`.

### Limitaciones
- Las guías no siguen el movimiento de la cabeza; funcionan mejor con el rostro de frente y centrado en el óvalo.
- Las imágenes se guardan como data URL reducidas en `localStorage` (~5 MB por sitio). Si se excede la cuota, la app sigue funcionando en memoria y esa imagen no persiste tras recargar.
- Los datos viven en el navegador: no hay cuentas, servidor ni sincronización entre dispositivos.
- El prototipo se optimiza para escritorio / espejo inteligente (lienzo 1440×900 que se escala a la ventana); en móvil se ve reducido.

---

## Estructura del proyecto

```
├── index.html                 # entrada de Vite
├── src/assets/img/            # imágenes del diseño (looks, productos, pasos, tutoriales, cejas)
├── design-original/           # referencia: diseño original de Claude Design
├── src/
│   ├── main.tsx / App.tsx     # arranque y rutas
│   ├── analysis/              # simulación del feedback (máquina de estados)
│   ├── camera/                # useCamera (getUserMedia), CameraView, CameraPermissionState, CameraCapture
│   ├── components/            # FaceGuide, StepSidebar, ProgressBar, ProductCard, LookCard, FilterChips,
│   │                          # FeedbackBubble, CameraChrome (barra + ReferencePreview), Modal, ImageUploader, Sidebar, Stage
│   ├── data/                  # datos centralizados: makeupSteps, browSteps, faceGuides, products, looks, content
│   ├── lib/                   # css (estilos del diseño), storage (localStorage), image (captura/redimensionado), routes
│   ├── modals/                # nuevo look, agregar producto, ver look, perfil
│   ├── pages/                 # Home/Maquillaje/Cejas, Scan, Session, Tutorial, Camera, Result, Collection, Looks, Aftercare, Outfit
│   ├── state/                 # AppStore (estado global + persistencia), reloj de sesión
│   └── styles/global.css      # animaciones, hovers y focus del diseño
```

`design-original/` contiene el archivo de Claude Design (`DERMIS Prototipo.dc.html` + `support.js`) solo como referencia; la app no lo usa.

### Rutas

Se usa `HashRouter`: en el navegador las rutas se ven como `http://localhost:5173/#/makeup`. Así la app también funciona abierta como archivo local o desde cualquier hosting estático.

```
/                       Inicio
/makeup                 Maquillaje        /brows                  Diseño de cejas
/makeup/new             Nuevo look        /brows/new              Nuevo diseño (estilos)
/makeup/scan            Escaneo facial    /brows/scan             Escaneo de cejas
/makeup/session         Recreando tu look /brows/session          Diseñando tus cejas
/makeup/tutorial/:step  Paso a paso       /brows/tutorial/:step   Paso a paso
/makeup/camera/:step    Cámara/feedback   /brows/camera/:step     Cámara/feedback
/makeup/result          Resultado         /brows/result           Resultado
/makeup/outfit          Recomendación por outfit
/collection  /looks  /aftercare
```

IDs de paso: `prep, foundation, concealer, contour, blush, highlighter, eyes, lips` y `tweeze, shape, fill, set`.

### Cambiar contenido

- Textos, zonas, mensajes de feedback y tutoriales de cada paso: `src/data/makeupSteps.ts` y `src/data/browSteps.ts`.
- Forma y posición de las guías: `src/data/faceGuides.ts` (espacio de rostro 1440×770, centro x = 745).
- Productos, looks, estilos de cejas y cuidado: `src/data/products.ts`, `src/data/looks.ts`, `src/data/content.ts`.
