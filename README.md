# DERMIS · Smart Mirror

Prototipo de espejo inteligente con cámara, guías de maquillaje y cejas, tutoriales, colección de productos y referencias.

Sitio publicado: https://dermis-one.vercel.app

## Desarrollo local

El proyecto es una aplicación estática: no requiere compilación ni instalación de paquetes.

Desde esta carpeta, ejecutar `python -m http.server 8000` y abrir http://localhost:8000.

La cámara necesita HTTPS o localhost y el permiso del usuario en el navegador. El seguimiento facial y las fuentes cargan dependencias públicas desde Internet. El progreso se guarda en el navegador.

## Archivos

- `index.html`: entrada al proyecto.
- `DERMIS 2.0 Smart Mirror.dc.html`: interfaz y lógica de interacción.
- `dermis-core.js`: datos, tutoriales y guías.
- `support.js`: runtime del documento.
- `responsive.css`: adaptación a escritorio, tablet y celular.
- `assets/`: imágenes y videos.

La interfaz sigue el tamaño del navegador. En pantallas pequeñas los controles se reorganizan; en ventanas de poca altura se puede desplazar el espejo para acceder a toda la interfaz. Los paneles y tutoriales tienen desplazamiento propio.

## Publicación

Vercel sirve los archivos estáticos de la raíz, sin comando de compilación. No se necesitan variables de entorno para las funciones locales del prototipo.
