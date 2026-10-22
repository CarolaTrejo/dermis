// DERMIS 2.0 — datos y dibujo de guías (contenido del proyecto original "Functional Prototype Dermis")
(function () {
const h = (...a) => window.React.createElement(...a);
const A = 'assets/', N = A + 'new/', V = A + 'video/';
const FACE = A + 'camface.jpg';
const NS = 'non-scaling-stroke';
const FP = 'M745,42 C905,42 992,150 996,318 C1000,470 952,600 872,664 C822,702 782,714 745,714 C708,714 668,702 618,664 C538,600 490,470 494,318 C498,150 585,42 745,42Z';
const BROW_D = 'M700,190 C688,172 655,160 612,158 C575,158 548,172 527,193 C552,190 585,186 614,187 C650,188 682,196 701,209Z';
const UNDER_D = 'M578,290 Q625,314 684,290 Q668,346 622,350 Q586,346 578,290Z';
const LID_D = 'M566,266 C582,230 642,222 690,257 C660,246 612,245 566,266Z';
const UL = 'M655,543 C690,520 715,500 735,505 C742,508 748,508 755,505 C775,500 800,520 835,543 C790,549 700,549 655,543Z';
const LL = 'M655,546 C700,552 790,552 835,546 C810,580 780,593 745,593 C710,593 680,580 655,546Z';
const pair = z => [z, Object.assign({}, z, { mir: true })];
const m = (k, t, z, s, l) => ({ k, t, z, s, l });

const MK = [
  { name: 'Preparación', sub: 'Hidrata y prepara tu piel', cat: 'Preparación', tools: [], img: 'step1', applies: false, decor: 'prep', mo: 'circle',
    orient: 'Hidratá y prepará tu piel.', areas: ['Frente', 'Mejillas', 'Mentón'], vb: '470 50 560 344',
    tt: 'Crema hidratante', tx: 'Aplicá una pequeña cantidad de crema sobre el rostro y distribuila suavemente con movimientos circulares. Masajeá hasta que se absorba y la piel quede hidratada, suave y uniforme.',
    tip: 'Como tu piel tiende a resecarse, aplicá una capa fina de hidratante y dejá que se absorba antes de maquillarte. Así la piel quedará más suave y el maquillaje se verá más uniforme.',
    ph: ['Aplicá', 'Distribuí', 'Masajeá', 'Resultado'],
    sty: { stroke: '#FFFFFF', fill: '#FFFFFF', fo: .10, dot: '#FFFFFF', blend: 'screen' },
    zones: [{ e: [745, 100, 112, 34, 0] }, ...pair({ e: [596, 425, 48, 80, -22] }), { e: [745, 652, 56, 26, 0] }],
    m: [[m('add', 'Aplicá un poco más de crema en la frente.', 0, 'r')], [m('blend', 'Distribuí con movimientos circulares.', 1, 'l'), m('ok', 'Esta zona ya está lista.', 2, 'r')], [m('ok', 'Tu piel está hidratada y lista.', 2, 'r')]] },
  { name: 'Base', sub: 'Unifica el tono de tu piel', cat: 'Base', tools: [13, 14], img: 'step2', applies: true, decor: 'base', mo: 'out',
    orient: 'Aplicá la base en todo el rostro, desde el centro hacia afuera.', areas: ['Todo el rostro', 'Centro hacia afuera'], vb: '470 50 560 344',
    tt: 'Base', tx: 'Colocá pequeñas cantidades de base en el centro del rostro y extendela hacia afuera con la brocha o la esponja húmeda. Construí la cobertura en capas finas hasta unificar el tono.',
    tip: 'Como tu piel tiende a resecarse, elegí una base de acabado jugoso y aplicala sobre la hidratante ya absorbida. Evitá el exceso de polvo sobre las mejillas.',
    ph: ['Aplicá', 'Extendé', 'Integrá', 'Resultado'],
    photos: [['Preparación', null, 0], ['Aplicación con brocha', N + 'base-2-brocha.png'], ['Distribución', null, 1], ['Acabado uniforme', N + 'base-4-acabado.png']],
    video: { src: V + 'video-a.mp4', title: 'Base en stick: aplicación, difuminado con brocha y acabado' },
    sty: { stroke: '#F6A55B', fill: '#E8B48C', fo: .14, dot: '#E3AE86' },
    zones: [{ e: [745, 105, 140, 46, 0] }, ...pair({ e: [590, 430, 62, 100, -12] }), { e: [745, 655, 64, 30, 0] }],
    m: [[m('add', 'Falta base en el mentón.', 3, 'r')], [m('blend', 'Integrá un poco más este borde.', 1, 'l'), m('ok', 'Esta zona ya está lista.', 0, 'r')], [m('ok', 'El tono quedó unificado.', 2, 'r')]] },
  { name: 'Corrector', sub: 'Corrige e ilumina', cat: 'Corrector', tools: [14], img: 'step3', applies: true, mo: 'tap',
    orient: 'Aplicá el corrector a toques en la ojera y en las pequeñas zonas a corregir.', areas: ['Ojeras', 'Mentón'], vb: '540 220 410 254',
    tt: 'Corrector', tx: 'Aplicá el corrector debajo del ojo, desde el lagrimal hacia afuera, y en las pequeñas zonas que quieras disimular. Difuminá a toques con la yema del dedo o la esponja, sin arrastrar.',
    tip: 'La piel de la ojera es más fina y se reseca con facilidad. Hidratá la zona antes y usá una capa fina de corrector cremoso para que no marque líneas.',
    ph: ['Aplicá', 'Difuminá', 'Integrá', 'Resultado'],
    photos: [['Aplicación', N + 'corrector-1-aplicacion.png'], ['Distribución', null, 1], ['Difuminado', N + 'corrector-3-difuminado.png'], ['Resultado', null, 3]],
    sty: { stroke: '#F7C46A', fill: '#F6D6A8', fo: .30, dot: '#F2D1A0' },
    zones: [...pair({ d: UNDER_D, c: [630, 320], ax: 0, len: 46 }), { e: [782, 628, 11, 10, 0] }],
    m: [[m('add', 'Aplicá un poco más debajo de este ojo.', 1, 'r')], [m('blend', 'Difuminá a toques hacia afuera.', 0, 'l'), m('ok', 'Esta zona ya está lista.', 1, 'r')], [m('ok', 'No hace falta agregar más producto.', 1, 'r')]] },
  { name: 'Contorno', sub: 'Define tu rostro', cat: 'Contorno', tools: [13, 14], img: 'step4', applies: true, mo: 'dir', dir: [-0.8, -0.6],
    orient: 'Aplicá el contorno en las zonas marcadas para definir suavemente el rostro.', areas: ['Laterales de la frente', 'Debajo de los pómulos', 'Mandíbula'], vb: '470 250 520 322',
    tt: 'Contorno', tx: 'Aplicá pequeñas cantidades de contorno debajo de los pómulos, en los laterales de la frente y sobre las zonas que quieras definir. Difuminá suavemente hasta lograr un acabado natural.',
    tip: 'Como tu piel tiende a resecarse, elegí un contorno en crema y aplicalo en pequeñas cantidades. Así será más fácil de difuminar y el acabado se verá más suave y uniforme.',
    ph: ['Aplicá', 'Difuminá', 'Integrá', 'Resultado'],
    sty: { stroke: '#FFFFFF', fill: '#9A5F3F', fo: .55, dot: '#8A5236', blend: 'multiply' },
    zones: [...pair({ e: [579, 108, 58, 16, -52] }), ...pair({ e: [566, 388, 70, 18, 42] }), ...pair({ e: [592, 612, 60, 14, 46] })],
    m: [[m('add', 'Aplicá un poco más en esta zona.', 2, 'l')], [m('blend', 'Difuminá suavemente hacia afuera.', 3, 'r'), m('ok', 'Esta zona ya está lista.', 0, 'l')], [m('ok', 'No hace falta agregar más producto.', 5, 'r')]] },
  { name: 'Rubor', sub: 'Aporta color al rostro', cat: 'Rubor', tools: [14], img: 'step5', applies: true, mo: 'dir', dir: [-0.86, -0.5],
    orient: 'Aplicá el rubor en la parte alta de las mejillas.', areas: ['Parte alta de las mejillas'], vb: '480 250 500 310',
    tt: 'Rubor', tx: 'Sonreí suavemente y aplicá el rubor sobre la parte alta del pómulo, llevándolo en diagonal hacia la sien. Empezá con poco producto y sumá de a capas.',
    tip: 'Un rubor líquido o en crema se funde mejor sobre la piel seca y aporta un acabado fresco. Aplicalo antes de cualquier polvo.',
    ph: ['Aplicá', 'Difuminá', 'Integrá', 'Resultado'],
    photos: [['Antes', null, 0], ['Aplicación en crema', N + 'rubor-2-crema.png'], ['Difuminado con brocha', N + 'rubor-3-brocha.png'], ['Difuminado con dedos', N + 'rubor-4-dedos.png'], ['Resultado', N + 'rubor-5-resultado.png']],
    video: { src: V + 'video-c.mp4', title: 'Rubor en crema: stick, brocha y difuminado con dedos' },
    sty: { stroke: '#FFD1DC', fill: '#E86F8C', fo: .38, dot: '#E06A86', blend: 'multiply' },
    zones: pair({ e: [598, 372, 56, 32, -18] }),
    m: [[m('add', 'Aplicá un toque en la parte alta del pómulo.', 1, 'r')], [m('blend', 'Integrá un poco más este borde.', 0, 'l'), m('ok', 'Esta zona ya está lista.', 1, 'r')], [m('ok', 'El color quedó parejo en ambas mejillas.', 1, 'r')]] },
  { name: 'Iluminador', sub: 'Dale luz', cat: 'Iluminador', tools: [], img: 'step6', applies: true, mo: 'out',
    orient: 'Iluminá la parte alta de los pómulos y el puente de la nariz.', areas: ['Pómulos', 'Puente y punta de la nariz', 'Arco de cupido'], vb: '520 220 450 280',
    tt: 'Iluminador', tx: 'Aplicá el iluminador donde la luz cae naturalmente: parte alta del pómulo, puente y punta de la nariz y arco de cupido. Difuminá los bordes con un pincel suave.',
    tip: 'Elegí un iluminador satinado: en piel seca los brillos muy metalizados pueden marcar textura. Aplicalo con toques ligeros.',
    ph: ['Aplicá', 'Difuminá', 'Integrá', 'Resultado'],
    sty: { stroke: '#FFF4D6', fill: '#FFF1CF', fo: .45, dot: '#FFF1CF', blend: 'screen' },
    zones: [...pair({ e: [574, 326, 46, 12, -24] }), { e: [745, 330, 8, 58, 0] }, { e: [745, 414, 10, 9, 0] }, { e: [745, 496, 13, 5, 0] }],
    m: [[m('add', 'Sumá un toque en el puente de la nariz.', 2, 'r')], [m('blend', 'Difuminá el borde del pómulo.', 0, 'l'), m('ok', 'Esta zona ya está lista.', 1, 'r')], [m('ok', 'El brillo quedó equilibrado.', 1, 'r')]] },
  { name: 'Ojos', sub: 'Sombras y definición', cat: 'Ojos', tools: [15], img: 'step7', applies: true, mo: 'dir', dir: [-1, -0.25],
    orient: 'Aplicá la sombra en el párpado móvil y difuminá hacia la cola del ojo.', areas: ['Párpado móvil', 'Cola del ojo'], vb: '530 170 430 266',
    tt: 'Ojos', tx: 'Colocá la sombra lavanda en el párpado móvil y difuminá hacia el pliegue con movimientos de limpiaparabrisas. Intensificá la cola del ojo para alargar la mirada, como en tu referencia.',
    tip: 'Prepará el párpado con un poco de corrector para que la sombra se adhiera mejor y no se acumule en los pliegues.',
    ph: ['Aplicá', 'Difuminá', 'Intensificá', 'Resultado'],
    video: { src: V + 'video-b.mp4', title: 'Sombra ahumada: aplicación con pincel y difuminado hacia la cola' },
    sty: { stroke: '#E3D9FF', fill: '#A48BE8', fo: .5, dot: '#9C82E6', blend: 'multiply' },
    zones: pair({ d: LID_D, c: [626, 248], ax: -8, len: 50 }),
    m: [[m('add', 'Aplicá más sombra en el pliegue.', 0, 'l')], [m('blend', 'Difuminá hacia la cola del ojo.', 1, 'r'), m('ok', 'Este párpado ya está listo.', 0, 'l')], [m('ok', 'Ambos ojos quedaron simétricos.', 1, 'r')]] },
  { name: 'Labios', sub: 'Finaliza tu look', cat: 'Labios', tools: [], img: 'step8', applies: true, mo: 'trace',
    orient: 'Delineá el contorno y completá la superficie de los labios.', areas: ['Contorno', 'Superficie'], vb: '600 450 290 180',
    tt: 'Labios', tx: 'Delineá primero el contorno siguiendo tu forma natural y después completá el interior con el labial. Terminá con un toque de gloss en el centro del labio inferior.',
    tip: 'Exfoliá e hidratá los labios antes de empezar. Así el color se desliza mejor y el acabado no marca pielcitas.',
    ph: ['Delineá', 'Completá', 'Unificá', 'Resultado'],
    sty: { stroke: '#FFD6DD', fill: '#D9607A', fo: .42, dot: '#C8506A', blend: 'multiply' },
    zones: [{ d: UL, c: [745, 526], ax: 0, len: 70 }, { d: LL, c: [745, 572], ax: 0, len: 70 }],
    m: [[m('add', 'Completá el contorno del labio superior.', 0, 'r')], [m('blend', 'Unificá el color en el centro.', 1, 'l'), m('ok', 'Esta zona ya está lista.', 0, 'r')], [m('ok', 'Labios completos.', 1, 'r')]] },
];

const TUT = A + 'tutorial/';
const MEDIA = {
  'Preparación': ['crema', ['Aplicá la crema', 'Distribuí en el rostro', 'Masajeá hasta absorber', 'Piel hidratada'], 'Hidratante: aplicación, distribución y masaje'],
  'Base': ['base', ['Aplicá la base en stick', 'Extendé con los dedos', 'Integrá con brocha', 'Tono unificado'], 'Base: stick, dedos y brocha'],
  'Corrector': ['corrector', ['Debajo del ojo', 'Costados de la nariz', 'Difuminá a toques', 'Zonas puntuales'], 'Corrector: ojeras y zonas puntuales'],
  'Contorno': ['contorno', ['Trazá debajo del pómulo', 'Difuminá con brocha', 'Integrá con los dedos', 'Resultado'], 'Contorno: trazo, brocha y difuminado'],
  'Rubor': ['rubor', ['Aplicá en el pómulo', 'Difuminá con brocha', 'Integrá con los dedos', 'Resultado'], 'Rubor: aplicación y difuminado'],
  'Iluminador': ['iluminador', ['Aplicá en la parte alta', 'Difuminá con brocha', 'Integrá con los dedos', 'Resultado'], 'Iluminador: puntos de luz'],
  'Ojos': ['sombras', ['Aplicá en el párpado', 'Difuminá el pliegue', 'Definí la línea', 'Resultado'], 'Sombras: párpado, pliegue y línea'],
  'Labios': ['labios', ['Labios preparados', 'Aplicá el labial', 'Sumá gloss', 'Resultado'], 'Labios: labial y gloss'],
};
MK.forEach(s => { const m = MEDIA[s.name]; if (!m) return; s.photos = m[1].map((l, j) => [l, TUT + m[0] + (j + 1) + '.png']); s.video = { src: TUT + 'video' + m[0] + '.mp4', title: m[2] }; });
// Zonas de análisis (índices de MediaPipe Face Landmarker; "derecho/izquierdo" = lado de la persona)
const ANALYSIS = {
  'Base': { ctrl: 'bg', even: true, sym: [1, 2], zones: [{ n: 'la frente', p: 151, r: .085 }, { n: 'la mejilla derecha', p: 50, r: .07 }, { n: 'la mejilla izquierda', p: 280, r: .07 }, { n: 'el mentón', p: 199, r: .05 }] },
  'Corrector': { sym: [0, 1], zones: [{ n: 'la ojera derecha', p: 230, r: .04 }, { n: 'la ojera izquierda', p: 450, r: .04 }] },
  'Contorno': { sym: [0, 1], ring: true, even: true, dir: 'hacia afuera', zones: [{ n: 'debajo del pómulo derecho', p: 147, r: .045 }, { n: 'debajo del pómulo izquierdo', p: 376, r: .045 }] },
  'Rubor': { sym: [0, 1], ring: true, even: true, dir: 'hacia la sien', zones: [{ n: 'el pómulo derecho', p: 50, r: .06 }, { n: 'el pómulo izquierdo', p: 280, r: .06 }] },
  'Iluminador': { sym: [0, 1], zones: [{ n: 'el pómulo alto derecho', p: 117, r: .035 }, { n: 'el pómulo alto izquierdo', p: 346, r: .035 }, { n: 'el puente de la nariz', p: 197, r: .022 }] },
  'Ojos': { sym: [0, 1], zones: [{ n: 'el párpado derecho', p: [159, 52, .4], r: .028 }, { n: 'el párpado izquierdo', p: [386, 282, .4], r: .028 }] },
  'Labios': { zones: [{ n: 'el labio superior', p: [0, 13, .5], r: .02 }, { n: 'el labio inferior', p: [14, 17, .5], r: .022 }] },
  'Relleno': { sym: [0, 1], zones: [{ n: 'la ceja derecha', p: 105, r: .024 }, { n: 'la ceja izquierda', p: 334, r: .024 }] },
};

// Indicaciones de guía (no son detecciones): z = índice de zona del paso
const g = (z, k, l, t) => ({ z, k, l, t });
const GUIDE = {
  'Preparación': [g(0, 'add', 'Aplicá aquí', 'Colocá un poco de crema en la frente, las mejillas y el mentón.'), g(2, 'blend', 'Distribuí', 'Masajeá con movimientos circulares hasta que se absorba.')],
  'Base': [g(1, 'add', 'Aplicá aquí', 'Colocá pequeñas cantidades en el centro del rostro.'), g(2, 'blend', 'Difuminá', 'Extendé desde el centro hacia afuera, en capas finas.')],
  'Corrector': [g(1, 'add', 'Aplicá aquí', 'Aplicá debajo del ojo, desde el lagrimal hacia afuera.'), g(0, 'blend', 'Difuminá', 'Difuminá a toques hacia afuera, sin arrastrar.')],
  'Contorno': [g(2, 'add', 'Aplicá aquí', 'Marcá una línea suave debajo del pómulo.'), g(3, 'blend', 'Difuminá', 'Difuminá hacia arriba y hacia afuera.')],
  'Rubor': [g(0, 'add', 'Aplicá aquí', 'Aplicá en la parte alta del pómulo.'), g(1, 'blend', 'Difuminá', 'Difuminá en diagonal hacia la sien.')],
  'Iluminador': [g(1, 'add', 'Aplicá aquí', 'Tocá la parte alta del pómulo.'), g(0, 'blend', 'Difuminá', 'Difuminá los bordes con un pincel suave.')],
  'Ojos': [g(0, 'add', 'Aplicá aquí', 'Colocá la sombra en el párpado móvil.'), g(1, 'blend', 'Difuminá', 'Difuminá hacia el pliegue y la cola del ojo.')],
  'Labios': [g(0, 'add', 'Delineá', 'Seguí el contorno natural del labio.'), g(1, 'blend', 'Completá', 'Rellená el interior y unificá el color.')],
  'Depilación': [g(2, 'add', 'Retirá aquí', 'Retirá los vellos que quedan fuera de la forma.'), g(4, 'blend', 'Entrecejo', 'Revisá el espacio entre las cejas.')],
  'Forma': [g(0, 'add', 'Marcá', 'Marcá el inicio, el arco y el final con lápiz.'), g(1, 'blend', 'Uní los puntos', 'Uní los puntos con trazos suaves.')],
  'Relleno': [g(2, 'add', 'Completá', 'Rellená los huecos de la cola con trazos cortos.'), g(5, 'blend', 'Difuminá', 'Suavizá el inicio con el cepillo.')],
  'Fijación': [g(0, 'add', 'Peiná', 'Peiná el vello hacia arriba.'), g(1, 'blend', 'Fijá', 'Fijá la cola hacia afuera.')],
};

const BROW_OUT = { d: BROW_D, c: [614, 182], ax: -5, len: 80, line: true };
const BR = [
  { name: 'Depilación', sub: 'Define la forma de tus cejas', img: 'tool1', applies: false, real: true, mo: 'tap',
    orient: 'Retirá los vellos que estén fuera de la forma de tus cejas para definir su contorno y lograr un acabado limpio y natural.', areas: ['Debajo del arco', 'Entrecejo', 'Extremos'], vb: '490 110 510 316',
    how: 'Cómo hacerlo', tipTitle: 'Tip', success: 'Depilación completada',
    tt: 'Depilación', tx: 'Retirá suavemente los vellos que estén fuera de la forma de tus cejas con una pinza. Hacelo de a poco, siguiendo el crecimiento del vello, hasta conseguir un contorno limpio y natural.',
    tip: 'Depilá un vello a la vez y revisá la forma de tus cejas mientras avanzás. Evitá retirar demasiados pelos de una misma zona para mantener su forma natural.',
    ph: ['Identificá los vellos', 'Depilá con pinza', 'Revisá la forma', 'Resultado'], tcat: 'Depilación',
    sty: { stroke: '#FFFFFF', fill: '#FFFFFF', fo: .9, dot: '#FFFFFF' },
    zones: [...pair(Object.assign({ keep: true }, BROW_OUT)), ...pair({ e: [612, 198, 32, 5, -2], rm: true }), { e: [745, 200, 16, 12, 0], rm: true }, ...pair({ e: [548, 176, 12, 5, -35], rm: true })],
    m: [[m('add', 'Retirá algunos vellos debajo del arco.', 2, 'l', 'Retirá vello')], [m('ok', 'Esta zona ya está lista.', 2, 'l'), m('blend', 'Revisá el extremo de la ceja.', 6, 'r', 'Revisá')], [m('ok', 'Ambas cejas están equilibradas.', 1, 'r')]] },
  { name: 'Forma', sub: 'Marca la forma ideal', img: 'tool4', applies: false, decor: 'forma', mo: 'trace',
    orient: 'Marcá el inicio, el arco y el final de tus cejas según la forma objetivo.', areas: ['Inicio', 'Arco', 'Final'], vb: '490 110 510 316',
    how: 'Cómo hacerlo', tipTitle: 'Tip', success: '¡Listo! Forma definida.',
    tt: 'Forma', tx: 'Con un lápiz, marcá tres puntos: el inicio alineado con la aleta de la nariz, el arco a la altura del iris y el final en la diagonal hacia el ojo. Uní los puntos con trazos suaves.',
    tip: 'Usá un lápiz un tono más claro que tu vello para marcar la guía. Así podés corregir fácilmente antes de rellenar.',
    ph: ['Marcá el inicio', 'Ubicá el arco', 'Definí el final', 'Resultado'], tcat: 'Relleno',
    sty: { stroke: '#FFFFFF', fill: '#FFFFFF', fo: 0, dot: '#FFFFFF' },
    zones: pair(BROW_OUT),
    m: [[m('add', 'Alineá el inicio con la aleta de la nariz.', 0, 'l', 'Marcá')], [m('blend', 'Elevá apenas el arco de esta ceja.', 1, 'r', 'Ajustá'), m('ok', 'Esta ceja ya está lista.', 0, 'l')], [m('ok', 'Ambas cejas están equilibradas.', 1, 'r')]] },
  { name: 'Relleno', sub: 'Unifica y da volumen', img: 'prod10', applies: true, mo: 'dir', dir: [-1, 0.15],
    orient: 'Completá los espacios dentro de la forma para dar volumen.', areas: ['Cola', 'Inicio'], vb: '490 110 510 316',
    how: 'Cómo hacerlo', tipTitle: 'Tip', success: '¡Listo! Relleno completo.',
    tt: 'Relleno', tx: 'Rellená con trazos cortos que imiten el vello, siguiendo su dirección. Concentrá el producto en la cola y dejá el inicio más suave.',
    tip: 'Peiná el vello antes de rellenar para ver dónde hay huecos reales. Trabajá con poco producto y sumá de a poco.',
    ph: ['Peiná', 'Trazá', 'Difuminá', 'Resultado'], tcat: 'Relleno',
    sty: { stroke: '#FFFFFF', fill: '#4A2E22', fo: .45, dot: '#4A2E22', blend: 'multiply' },
    zones: [...pair(Object.assign({ keep: true }, BROW_OUT)), ...pair({ e: [555, 186, 26, 7, -25] }), ...pair({ e: [688, 198, 14, 9, 15] })],
    m: [[m('add', 'Rellená los huecos de la cola.', 3, 'r', 'Completá')], [m('blend', 'Difuminá el inicio con el cepillo.', 4, 'l'), m('ok', 'Esta zona ya está lista.', 3, 'r')], [m('ok', 'Relleno uniforme en ambas cejas.', 1, 'r')]] },
  { name: 'Fijación', sub: 'Mantiene la forma', img: 'tool5', applies: false, decor: 'fij', mo: 'dir', dir: [0.25, -1],
    orient: 'Peiná y fijá el vello hacia arriba para mantener la forma.', areas: ['Todo el largo de la ceja'], vb: '490 110 510 316',
    how: 'Cómo hacerlo', tipTitle: 'Tip', success: '¡Listo! Tus cejas están fijadas.',
    tt: 'Fijación', tx: 'Pasá el gel fijador desde el inicio hacia la cola, peinando el vello hacia arriba y después hacia afuera. Dejá secar unos segundos sin tocar.',
    tip: 'Retirá el exceso de producto del cepillo antes de aplicar para que el gel no deje restos blancos.',
    ph: ['Peiná hacia arriba', 'Fijá', 'Definí la cola', 'Resultado'], tcat: 'Fijación',
    sty: { stroke: '#FFFFFF', fill: '#FFFFFF', fo: .06, dot: '#FFFFFF' },
    zones: pair({ e: [614, 180, 88, 18, -4] }),
    m: [[m('add', 'Peiná los vellos hacia arriba.', 0, 'l', 'Peiná')], [m('blend', 'Fijá el extremo hacia afuera.', 1, 'r', 'Fijá'), m('ok', 'Esta ceja ya está lista.', 0, 'l')], [m('ok', 'Tus cejas quedaron fijadas.', 1, 'r')]] },
];

const PRODS = [
  [1, 'Flawless Filter Foundation', 'Charlotte Tilbury', 'Base', 'Jugoso', '$58.000'],
  [2, 'Radiant Creamy Concealer', 'NARS', 'Corrector', 'Satinado', '$42.000'],
  [3, 'Studio Fix Powder', 'MAC', 'Base', 'Mate', '$39.000'],
  [4, 'Soft Pinch Blush', 'Rare Beauty', 'Rubor', 'Jugoso', '$36.000'],
  [5, 'Hoola Bronzer', 'Benefit', 'Contorno', 'Mate', '$44.000'],
  [6, 'Extra Dimension Skinfinish', 'MAC', 'Iluminador', 'Satinado', '$41.000'],
  [7, 'Nude Obsessions Palette', 'Huda Beauty', 'Ojos', 'Mate', '$52.000'],
  [8, 'Epic Ink Liner', 'MAC', 'Ojos', 'Mate', '$25.000'],
  [9, 'Lash Sensational Mascara', 'Maybelline', 'Ojos', null, '$17.000'],
  [10, 'Gimme Brow+', 'Benefit', 'Cejas', 'Satinado', '$34.000'],
  [11, 'Matte Lipstick Mehr', 'MAC', 'Labios', 'Mate', '$32.000'],
  [12, 'Gloss Bomb Fenty Glow', 'Fenty Beauty', 'Labios', 'Jugoso', '$30.000'],
  [13, 'Brocha para Base', 'Real Techniques', 'Herramientas', null, '$14.000'],
  [14, 'Beauty Blender Original', 'Beauty Blender', 'Herramientas', null, '$28.000'],
  [15, 'Rizador de Pestañas', 'Tweezerman', 'Herramientas', null, '$22.000'],
  [16, 'All Nighter Setting Spray', 'Urban Decay', 'Preparación', 'Mate', '$40.000'],
  [17, 'Agua Micelar', 'Garnier', 'Preparación', null, '$9.000'],
  [18, 'Hydro Boost Gel Cream', 'Neutrogena', 'Preparación', 'Jugoso', '$21.000'],
].map(p => ({ id: p[0], img: A + 'prod' + p[0] + '.jpg', name: p[1], brand: p[2], cat: p[3], fin: p[4], price: p[5], fav: [2, 10, 13].includes(p[0]) }));

const BTOOLS = [
  ['tool1', 'Tweezerman', 'Pinza de cejas clásica', 'Depilación', '$32.000'],
  ['tool2', 'Schick', 'Rastrillo facial', 'Depilación', '$18.000'],
  ['tool3', 'Beter', 'Tijera para cejas', 'Depilación', '$24.000'],
  ['tool4', 'Anastasia Beverly Hills', 'Brow Wiz', 'Relleno', '$45.000'],
  ['tool5', 'Benefit', '24-HR Brow Setter', 'Fijación', '$38.000'],
];
const COLL_CATS = ['Todos', 'Preparación', 'Base', 'Corrector', 'Contorno', 'Rubor', 'Iluminador', 'Ojos', 'Labios', 'Cejas', 'Herramientas'];
const KIND = { add: ['Aplicá una pequeña cantidad', '#FFC78A'], blend: ['Difuminá un poco más', '#CFC6FF'], ok: ['Aplicación uniforme', '#9FF0CB'] };
const LOOKS = [
  { id: 0, img: A + 'look2.jpg', ref: A + 'look2.jpg', date: 'Hoy', name: 'Lavanda glow', incomplete: true, fav: false },
  { id: 1, img: A + 'look1.jpg', ref: A + 'look3.jpg', date: '12 May', name: 'Dorado cálido', fav: true },
  { id: 2, img: A + 'look2.jpg', ref: A + 'look4.jpg', date: '8 May', name: 'Lavanda glow', fav: false },
  { id: 3, img: A + 'look3.jpg', ref: A + 'look1.jpg', date: '3 May', name: 'Glam clásico', fav: false },
  { id: 4, img: A + 'look4.jpg', ref: A + 'look2.jpg', date: '28 Abr', name: 'Rosado fresco', fav: true },
];
const FEATURED = [[A + 'look2.jpg', 'Lavanda glow'], [A + 'look1.jpg', 'Dorado cálido'], [A + 'look3.jpg', 'Glam clásico'], [A + 'look4.jpg', 'Rosado fresco']];
const OUT_LOOKS = [
  { key: 'lav', img: A + 'look2.jpg', name: 'Lavanda glow', why: 'Repite los tonos lilas y fríos en los ojos y suma brillo.' },
  { key: 'pink', img: A + 'look4.jpg', name: 'Rosado fresco', why: 'Rubor rosado y labios jugosos que suavizan los tonos del conjunto.' },
  { key: 'warm', img: A + 'look1.jpg', name: 'Dorado cálido', why: 'Acompaña colores cálidos y resalta tu subtono cálido.' },
];
const BROW_NAMES = [['12 May', 'Cejas tupidas'], ['22 Abr', 'Cejas rectas'], ['9 Mar', 'Cejas arqueadas'], ['17 Ene', 'Cejas ascendentes']];
const BROW_STYLES = [['Cejas rectas', 'Un acabado sutil y equilibrado'], ['Cejas redondeadas', 'Una curva continua'], ['Cejas pobladas', 'Un acabado desestructurado'], ['Cejas laminadas', 'Un look natural y delicado']];
const BROW_TONES = [['#6B4A36', 'Castaño medio'], ['#8C6649', 'Castaño claro'], ['#3E2B22', 'Castaño oscuro']];
const ROUTINE = [['Desmaquillar', 'Retirá el maquillaje con agua micelar, apoyando el disco unos segundos antes de deslizarlo.', 'prod17', 'Agua Micelar · Garnier'],
  ['Limpiar', 'Lavá el rostro con un limpiador suave y agua tibia para retirar los restos de producto.', 'prod14', 'Limpiador suave en gel'],
  ['Hidratar', 'Aplicá una capa generosa de hidratante para recuperar la piel después del maquillaje.', 'prod18', 'Hydro Boost Gel Cream · Neutrogena']];

/* ---------- ilustraciones originales (tutorial) ---------- */
function shape(z, p, ...kids) { return z.e ? h('ellipse', Object.assign({ cx: z.e[0], cy: z.e[1], rx: z.e[2], ry: z.e[3], transform: 'rotate(' + z.e[4] + ' ' + z.e[0] + ' ' + z.e[1] + ')' }, p), ...kids) : h('path', Object.assign({ d: z.d }, p), ...kids); }
function wrapM(z, key, kids) { return h('g', { key, transform: z.mir ? 'matrix(-1 0 0 1 1490 0)' : undefined }, kids); }
function ctr(z) { const c = z.e ? [z.e[0], z.e[1]] : z.c; return z.mir ? [1490 - c[0], c[1]] : c; }
function zoneTut(z, i, sty, ph) {
  const c = z.e ? [z.e[0], z.e[1]] : z.c;
  const a = (z.e ? z.e[4] : (z.ax || 0)) * Math.PI / 180, d = [Math.cos(a), Math.sin(a)], L = z.e ? z.e[2] : (z.len || 40);
  const kids = [];
  if (ph <= 1) {
    if (!z.line && !z.rm) kids.push(shape(z, { key: 'f', fill: sty.fill, fillOpacity: ph === 0 ? sty.fo * .3 : sty.fo * .9, stroke: 'none', style: { mixBlendMode: sty.blend || 'normal' } }));
    kids.push(shape(z, { key: 's', fill: z.rm ? 'url(#hatch)' : 'none', stroke: sty.stroke, strokeWidth: 1.8, strokeDasharray: '6 6', vectorEffect: NS, strokeOpacity: ph === 0 ? 1 : .6 }));
  }
  if (ph === 0 && !z.line) [-.5, 0, .5].forEach((t, j) => kids.push(h('circle', { key: 'd' + j, cx: c[0] + d[0] * L * t, cy: c[1] + d[1] * L * t, r: Math.max(4, L * .09), fill: sty.dot, stroke: '#fff', strokeWidth: 1.2, vectorEffect: NS })));
  if (ph === 1 && !z.line) {
    const sx = Math.abs(c[0] - 745) < 8 ? 0 : (c[0] < 745 ? -1 : 1);
    const v = sx === 0 ? [0, -1] : (d[0] * sx >= 0 ? d : [-d[0], -d[1]]);
    kids.push(h('line', { key: 'ar', x1: c[0], y1: c[1], x2: c[0] + v[0] * L * 1.15, y2: c[1] + v[1] * L * 1.15, stroke: '#fff', strokeWidth: 2, vectorEffect: NS, markerEnd: 'url(#ah)', strokeLinecap: 'round' }));
  }
  if (ph >= 2 && !z.rm && !z.line) kids.push(shape(z, { key: 'b', fill: sty.fill, fillOpacity: sty.fo * (ph === 2 ? 1 : .75), filter: 'url(#soft)', style: { mixBlendMode: sty.blend || 'normal' } }));
  if (ph >= 2 && z.line && sty.fo > 0.2) kids.push(shape(z, { key: 'b', fill: sty.fill, fillOpacity: sty.fo * .8, filter: 'url(#soft)', style: { mixBlendMode: sty.blend || 'normal' } }));
  return wrapM(z, 't' + i, kids);
}
function decorEls(kind, op) {
  const L = (d, k, extra) => h('path', Object.assign({ key: k, d, fill: 'none', stroke: '#fff', strokeWidth: 2, strokeLinecap: 'round', vectorEffect: NS, opacity: op }, extra));
  const both = (fn, k) => [h('g', { key: k + 'a' }, fn()), h('g', { key: k + 'b', transform: 'matrix(-1 0 0 1 1490 0)' }, fn())];
  if (kind === 'prep') return [L('M698,122 C694,84 792,80 794,112', 'f', { markerEnd: 'url(#ah)' }), ...both(() => [L('M572,452 C536,420 560,368 612,376', 'c', { markerEnd: 'url(#ah)' })], 'c'), L('M714,668 C720,642 770,640 777,662', 'ch', { markerEnd: 'url(#ah)' })];
  if (kind === 'base') {
    const O = { stroke: '#F6A55B', strokeDasharray: '6 6', markerEnd: 'url(#ahO)' };
    const side = [[700, 178, 640, 100], [655, 410, 548, 372], [660, 470, 560, 520], [700, 600, 640, 650]];
    return [L(FP, 'o', { strokeDasharray: '7 7', stroke: '#F6A55B' }), ...both(() => side.map((a, j) => L(`M${a[0]},${a[1]} L${a[2]},${a[3]}`, 'a' + j, O)), 'b'), L('M745,175 L745,78', 'm1', O), L('M745,640 L745,698', 'm2', O)];
  }
  if (kind === 'forma') return both(() => [L('M705,425 L703,182', 'g1', { strokeDasharray: '2 6', strokeWidth: 1.5 }), L('M705,425 L612,152', 'g2', { strokeDasharray: '2 6', strokeWidth: 1.5 }), L('M705,425 L522,196', 'g3', { strokeDasharray: '2 6', strokeWidth: 1.5 }), ...[[702, 198], [612, 158], [527, 193]].map((p, j) => h('circle', { key: 'p' + j, cx: p[0], cy: p[1], r: 5, fill: '#fff', opacity: op }))], 'fm');
  if (kind === 'fij') return both(() => [542, 562, 582, 602, 622, 642, 662, 682].map((x, j) => { const y = 160 + Math.pow(x - 612, 2) / 250 + 16; return L(`M${x},${y + 8} L${x + 5},${y - 12}`, 's' + j, { markerEnd: 'url(#ah)', strokeWidth: 1.6 }); }), 'fj');
  return [];
}
function analysisEls(ph) {
  const pts = [[570, 272], [682, 274], [808, 274], [920, 272], [612, 160], [878, 160], [745, 418], [702, 428], [788, 428], [655, 543], [835, 543], [745, 700], [548, 352], [942, 352], [745, 78], [640, 470], [850, 470], [600, 600], [890, 600], [745, 330]];
  const els = [h('path', { key: 'ov', d: FP, fill: 'none', stroke: '#fff', strokeWidth: 2.4, strokeDasharray: '0.1 10', strokeLinecap: 'round', vectorEffect: NS, style: { opacity: ph >= 1 ? 0.95 : 0, transition: 'opacity 1s' } })];
  if (ph >= 2) pts.forEach((p, i) => els.push(h('circle', { key: 'p' + i, cx: p[0], cy: p[1], r: 3.2, fill: '#E9E4FF', style: { opacity: 0, animation: `dmFade .5s ${i * 0.06}s forwards` } })));
  if (ph >= 3) { const tri = [[0, 1], [1, 2], [2, 3], [4, 0], [5, 3], [0, 6], [3, 6], [6, 7], [6, 8], [7, 9], [8, 10], [9, 11], [10, 11], [12, 0], [13, 3], [14, 4], [14, 5], [15, 9], [16, 10], [17, 11], [18, 11], [19, 6]];
    tri.forEach(([a, b], i) => els.push(h('line', { key: 'l' + i, x1: pts[a][0], y1: pts[a][1], x2: pts[b][0], y2: pts[b][1], stroke: '#CFC6FF', strokeWidth: 1, strokeOpacity: .55, vectorEffect: NS, style: { opacity: 0, animation: `dmFade .6s ${i * 0.04}s forwards` } }))); }
  return els;
}
function faceSvg(vb, o) {
  const mk = (id, col) => h('marker', { id, viewBox: '0 0 10 10', refX: 7, refY: 5, markerWidth: 12, markerHeight: 12, markerUnits: 'userSpaceOnUse', orient: 'auto' }, h('path', { d: 'M1,1 L8,5 L1,9', fill: 'none', stroke: col, strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }));
  const kids = [
    h('defs', { key: 'defs' },
      h('pattern', { id: 'hatch', width: 6, height: 6, patternUnits: 'userSpaceOnUse', patternTransform: 'rotate(45)' }, h('line', { x1: 0, y1: 0, x2: 0, y2: 6, stroke: '#fff', strokeWidth: 1.6, strokeOpacity: .9 })),
      h('filter', { id: 'soft', x: '-50%', y: '-50%', width: '200%', height: '200%' }, h('feGaussianBlur', { stdDeviation: 7 })),
      mk('ah', '#fff'), mk('ahO', '#F6A55B')),
    h('image', { key: 'img', href: FACE, xlinkHref: FACE, x: 0, y: 0, width: 1440, height: 770, preserveAspectRatio: 'none' }),
  ];
  if (o.decor) kids.push(h('g', { key: 'dec' }, decorEls(o.decor, o.decorOp || 0.9)));
  if (o.step) o.step.zones.forEach((z, i) => kids.push(zoneTut(z, i, o.step.sty, o.phase)));
  return h('svg', { viewBox: vb, preserveAspectRatio: 'xMidYMid slice', style: { width: '100%', height: '100%', display: 'block' } }, kids);
}

/* ---------- nuevas guías del espejo ---------- */
const VB = [450, -40, 590, 800];
function guideZone(z, i, step, st, style, int) {
  const sty = step.sty, col = sty.fill === '#FFFFFF' ? '#F1ECFF' : sty.fill;
  const ok = st === 'ok', f = st === 'focus';
  const c = z.e ? [z.e[0], z.e[1]] : z.c, ang = z.e ? z.e[4] : (z.ax || 0), L = z.e ? z.e[2] : (z.len || 40);
  const base = ok ? .35 : 1, k = [];
  if (z.rm) k.push(shape(z, { key: 'h', fill: 'url(#mgHatch)', fillOpacity: ok ? .12 : .6 * int, stroke: '#fff', strokeOpacity: ok ? .3 : .75, strokeWidth: 1.1, vectorEffect: NS }));
  else if (z.line) k.push(shape(z, { key: 'ln', fill: style === 'contorno' ? 'none' : col, fillOpacity: sty.fo > .2 ? .18 * int : 0, stroke: '#fff', strokeWidth: f ? 2.2 : 1.3, strokeOpacity: ok ? .35 : .85, filter: 'url(#mgGlow)', vectorEffect: NS }));
  else if (style === 'pincelada') {
    if (z.e) {
      const a = ang * Math.PI / 180, d = [Math.cos(a), Math.sin(a)], w = z.e[3] * 1.5;
      [[0, 1], [-.32, .5], [.32, .5]].forEach(([off, op], j) => {
        const nx = -d[1] * w * off, ny = d[0] * w * off;
        k.push(h('line', { key: 'b' + j, x1: c[0] - d[0] * L * .8 + nx, y1: c[1] - d[1] * L * .8 + ny, x2: c[0] + d[0] * L * .8 + nx, y2: c[1] + d[1] * L * .8 + ny, stroke: col, strokeWidth: j ? w * .3 : w, strokeLinecap: 'round', strokeOpacity: Math.min(.85, sty.fo * 1.2 + .15) * op * int * base, filter: 'url(#mgSoft)' }));
      });
      k.push(h('line', { key: 'sw', x1: c[0] - d[0] * L * .8, y1: c[1] - d[1] * L * .8, x2: c[0] - d[0] * L * .5, y2: c[1] - d[1] * L * .5, stroke: '#fff', strokeWidth: 3, strokeLinecap: 'round', strokeOpacity: ok ? 0 : .8, filter: 'url(#mgGlow)', vectorEffect: NS },
        h('animateTransform', { attributeName: 'transform', type: 'translate', values: `0 0; ${d[0] * L * 1.3} ${d[1] * L * 1.3}; 0 0`, dur: '2.6s', repeatCount: 'indefinite' })));
    } else k.push(shape(z, { key: 'b', fill: col, fillOpacity: Math.min(.8, sty.fo + .15) * int * base, filter: 'url(#mgSoft)' }));
  } else if (style === 'contorno') {
    k.push(shape(z, { key: 'cf', fill: col, fillOpacity: .07 * int * base }));
    k.push(shape(z, { key: 'cs', fill: 'none', stroke: '#fff', strokeWidth: f ? 2.2 : 1.4, strokeOpacity: ok ? .35 : .95, strokeDasharray: '10 8', filter: 'url(#mgGlow)', vectorEffect: NS },
      h('animate', { attributeName: 'stroke-dashoffset', from: 0, to: -36, dur: '2.4s', repeatCount: 'indefinite' })));
  } else {
    k.push(shape(z, { key: 'gf', fill: 'url(#mgZone)', fillOpacity: Math.min(1, int) * base }));
    k.push(shape(z, { key: 'go', fill: 'none', stroke: '#fff', strokeWidth: f ? 1.8 : 1, strokeOpacity: ok ? .2 : .55, filter: 'url(#mgGlow)', vectorEffect: NS }));
  }
  if (f) k.push(shape(z, { key: 'fp', fill: 'none', stroke: '#CFC6FF', strokeWidth: 3, vectorEffect: NS, filter: 'url(#mgGlow)' }, h('animate', { attributeName: 'stroke-opacity', values: '.95;.15;.95', dur: '1.6s', repeatCount: 'indefinite' })));
  if (!ok && !z.keep) {
    const mo = step.mo || 'out';
    if (mo === 'tap' || (mo === 'trace' && !z.d)) [0, .8].forEach((b, j) => k.push(h('circle', { key: 't' + j, cx: c[0], cy: c[1], r: 4, fill: 'none', stroke: '#fff', strokeWidth: 1.4, vectorEffect: NS },
      h('animate', { attributeName: 'r', from: 4, to: Math.max(18, L * .6), dur: '1.6s', begin: b + 's', repeatCount: 'indefinite' }),
      h('animate', { attributeName: 'stroke-opacity', from: .9, to: 0, dur: '1.6s', begin: b + 's', repeatCount: 'indefinite' }))));
    else if (mo === 'circle') { const r = Math.max(16, L * .45); k.push(h('circle', { key: 'rc', cx: c[0], cy: c[1], r, fill: 'none', stroke: '#fff', strokeWidth: 1.6, strokeOpacity: .85, strokeDasharray: (r * 1.4) + ' ' + (r * 5), strokeLinecap: 'round', vectorEffect: NS }, h('animateTransform', { attributeName: 'transform', type: 'rotate', from: `0 ${c[0]} ${c[1]}`, to: `360 ${c[0]} ${c[1]}`, dur: '2.4s', repeatCount: 'indefinite' }))); }
    else if (mo === 'trace') k.push(h('circle', { key: 'tr', r: 4, fill: '#fff', filter: 'url(#mgGlow)' }, h('animateMotion', { path: z.d, dur: '3.2s', repeatCount: 'indefinite' })));
    else {
      let v = step.dir;
      if (!v) { const dx = c[0] - 745, dy = c[1] - 370; v = Math.abs(dx) < 12 ? [0, dy < 0 ? -1 : 1] : [dx, dy]; }
      const n = Math.hypot(v[0], v[1]) || 1; v = [v[0] / n, v[1] / n];
      const deg = Math.atan2(v[1], v[0]) * 180 / Math.PI;
      [.35, .75, 1.15].forEach((t, j) => k.push(h('path', { key: 'cv' + j, d: 'M-5,-7 L3,0 L-5,7', transform: `translate(${c[0] + v[0] * L * t} ${c[1] + v[1] * L * t}) rotate(${deg})`, fill: 'none', stroke: '#fff', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', vectorEffect: NS, opacity: 0 },
        h('animate', { attributeName: 'opacity', values: '0;1;0', dur: '1.8s', begin: (j * .3) + 's', repeatCount: 'indefinite' }))));
    }
  }
  return wrapM(z, 'gz' + i, k);
}
function mirrorSvg(o) {
  const step = o.step, col = step ? (step.sty.fill === '#FFFFFF' ? '#F1ECFF' : step.sty.fill) : '#fff', fo = step ? step.sty.fo : 0;
  const mk = (id) => h('marker', { id, viewBox: '0 0 10 10', refX: 7, refY: 5, markerWidth: 12, markerHeight: 12, markerUnits: 'userSpaceOnUse', orient: 'auto' }, h('path', { d: 'M1,1 L8,5 L1,9', fill: 'none', stroke: '#fff', strokeWidth: 1.8, strokeLinecap: 'round' }));
  const kids = [h('defs', { key: 'd' },
    h('radialGradient', { id: 'mgZone' }, h('stop', { offset: '0%', stopColor: col, stopOpacity: Math.min(.8, fo * 1.4 + .18) }), h('stop', { offset: '60%', stopColor: col, stopOpacity: Math.min(.5, fo * .8 + .06) }), h('stop', { offset: '100%', stopColor: col, stopOpacity: 0 })),
    h('filter', { id: 'mgGlow', x: '-50%', y: '-50%', width: '200%', height: '200%' }, h('feGaussianBlur', { stdDeviation: 2.4, result: 'b' }), h('feMerge', null, h('feMergeNode', { in: 'b' }), h('feMergeNode', { in: 'SourceGraphic' }))),
    h('filter', { id: 'mgSoft', x: '-50%', y: '-50%', width: '200%', height: '200%' }, h('feGaussianBlur', { stdDeviation: 7 })),
    h('pattern', { id: 'mgHatch', width: 6, height: 6, patternUnits: 'userSpaceOnUse', patternTransform: 'rotate(45)' }, h('line', { x1: 0, y1: 0, x2: 0, y2: 6, stroke: '#fff', strokeWidth: 1.4 })),
    mk('ah'), mk('ahO'))];
  if (o.align) kids.push(h('path', { key: 'al', d: FP, fill: 'none', stroke: '#fff', strokeOpacity: .32, strokeWidth: 1.8, strokeDasharray: '0.1 9', strokeLinecap: 'round', vectorEffect: NS }));
  if (o.decor) kids.push(h('g', { key: 'dec' }, decorEls(o.decor, .75)));
  if (step && o.st) step.zones.forEach((z, i) => kids.push(guideZone(z, i, step, o.st[i], o.style, o.int)));
  if (o.marks) o.marks.forEach((mm, j) => kids.push(h('g', { key: 'mk' + j }, h('circle', { cx: mm.x, cy: mm.y, r: 6, fill: mm.col }), h('circle', { cx: mm.x, cy: mm.y, r: 8, fill: 'none', stroke: mm.col, strokeWidth: 1.4, vectorEffect: NS }, h('animate', { attributeName: 'r', from: 8, to: 26, dur: '1.8s', repeatCount: 'indefinite' }), h('animate', { attributeName: 'stroke-opacity', from: .9, to: 0, dur: '1.8s', repeatCount: 'indefinite' })))));
  if (o.analysis != null) kids.push(h('g', { key: 'an' }, analysisEls(o.analysis)));
  return h('svg', { viewBox: VB.join(' '), preserveAspectRatio: o.fit || 'xMidYMid meet', style: { width: '100%', height: '100%', display: 'block', overflow: 'visible' } }, kids);
}
function statuses(step, cs) {
  const msgs = cs > 0 ? step.m[cs - 1] : [];
  const focus = new Set(msgs.filter(x => x.k !== 'ok').map(x => x.z));
  return step.zones.map((z, i) => {
    if (z.keep || cs === 0) return 'todo';
    if (cs === 1) return focus.has(i) ? 'focus' : 'todo';
    if (cs === 2) return focus.has(i) ? 'focus' : 'ok';
    return 'ok';
  });
}

/* ---------- iconos ---------- */
const IC = {
  home: 'M4 11l8-7 8 7M6 9.5V20h12V9.5',
  steps: 'M9 6h11M9 12h11M9 18h11M4.5 6h.01M4.5 12h.01M4.5 18h.01',
  play: 'M8 5.5l11 6.5-11 6.5z',
  grid: 'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z',
  heart: 'M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z',
  brow: 'M3 14c3-5 9-7 18-4M6 17c2-2 5-3 9-2',
  more: 'M4.5 12a1.3 1.3 0 1 0 2.6 0a1.3 1.3 0 1 0-2.6 0M10.7 12a1.3 1.3 0 1 0 2.6 0a1.3 1.3 0 1 0-2.6 0M16.9 12a1.3 1.3 0 1 0 2.6 0a1.3 1.3 0 1 0-2.6 0',
  hanger: 'M12 7a2 2 0 1 1 2-2M12 7v2l9 7H3l9-7',
  pin: 'M12 3a7 7 0 0 0-2.6 13.5L8 21M12 3a7 7 0 0 1 0 14c-1.2 0-2-.4-2.6-1M10.5 9.5c0-1 .8-2 2-2s2 .9 2 2.2c0 1.6-1 3-2.2 3-.7 0-1.1-.5-1-1.1',
  drop: 'M12 3.5s6 6.4 6 10.5a6 6 0 0 1-12 0C6 9.9 12 3.5 12 3.5z',
  user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4.5 20.5c1.2-3.6 4-5.5 7.5-5.5s6.3 1.9 7.5 5.5',
  gear: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 13.5l1.6 1.2-2 3.4-1.9-.7a7 7 0 0 1-2 1.2l-.3 2h-4l-.3-2a7 7 0 0 1-2-1.2l-1.9.7-2-3.4 1.6-1.2a7 7 0 0 1 0-3L2.6 9.3l2-3.4 1.9.7a7 7 0 0 1 2-1.2l.3-2h4l.3 2a7 7 0 0 1 2 1.2l1.9-.7 2 3.4-1.6 1.2a7 7 0 0 1 0 3z',
  prev: 'M15 5l-7 7 7 7', next: 'M9 5l7 7-7 7',
  check: 'M5 12.5l4.5 4.5L19 7.5', close: 'M6 6l12 12M18 6L6 18',
  cam: 'M4 8h3l2-2h6l2 2h3v11H4zM12 16.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z',
  compare: 'M12 3v18M4 6h5v12H4zM15 6h5v12h-5',
  reset: 'M4 12a8 8 0 1 0 2.4-5.7M4 4v4h4',
  spark: 'M12 4l1.8 4.2L18 10l-4.2 1.8L12 16l-1.8-4.2L6 10l4.2-1.8z',
  mirror: 'M12 3c4 0 7 3.6 7 8.5S16 21 12 21s-7-4.6-7-9.5S8 3 12 3zM9 8l-2 2M12 7l-4 4',
  upload: 'M12 16V4M7 9l5-5 5 5M4 16v4h16v-4',
  image: 'M4 5h16v14H4zM9 10.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM4 17l5-5 4 4 3-3 4 4',
  plus: 'M12 5v14M5 12h14', search: 'M11 17a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM20 20l-4.5-4.5',
  trash: 'M5 7h14M9 7V5h6v2M7 7l1 12h8l1-12', share: 'M12 15V4M8 8l4-4 4 4M5 12v8h14v-8',
  link: 'M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1',
  bulb: 'M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z',
  filter: 'M4 5h16l-6 8v6l-4-2v-4z', arrow: 'M5 12h14M13 6l6 6-6 6', video: 'M4 6h11v12H4zM15 10l5-3v10l-5-3',
};
function icon(name, size, sw, fill) {
  return h('svg', { width: size || 22, height: size || 22, viewBox: '0 0 24 24', fill: fill || 'none', stroke: 'currentColor', strokeWidth: sw || 1.7, strokeLinecap: 'round', strokeLinejoin: 'round', style: { display: 'block' } }, h('path', { d: IC[name] }));
}

/* ---------- utilidades ---------- */
function fileToData(file, max) {
  return new Promise((res, rej) => {
    const r = new FileReader();
    r.onload = () => { const im = new Image(); im.onload = () => { const s = Math.min(1, (max || 720) / Math.max(im.width, im.height)); const c = document.createElement('canvas'); c.width = Math.round(im.width * s); c.height = Math.round(im.height * s); c.getContext('2d').drawImage(im, 0, 0, c.width, c.height); res(c.toDataURL('image/jpeg', .84)); }; im.onerror = rej; im.src = r.result; };
    r.onerror = rej; r.readAsDataURL(file);
  });
}
function toHex(c) { return '#' + c.map(v => v.toString(16).padStart(2, '0')).join(''); }
function hsl(c) { const [r, g, b] = c.map(v => v / 255), mx = Math.max(r, g, b), mn = Math.min(r, g, b), l = (mx + mn) / 2; let hh = 0, s = 0; if (mx !== mn) { const d = mx - mn; s = l > .5 ? d / (2 - mx - mn) : d / (mx + mn); hh = mx === r ? (g - b) / d + (g < b ? 6 : 0) : mx === g ? (b - r) / d + 2 : (r - g) / d + 4; hh *= 60; } return [hh, s, l]; }
function dominantColors(src) {
  return new Promise(res => {
    const im = new Image(); if (!/^data:/.test(src)) im.crossOrigin = 'anonymous';
    im.onload = () => { try {
      const c = document.createElement('canvas'); c.width = c.height = 48; const x = c.getContext('2d'); x.drawImage(im, 0, 0, 48, 48);
      const d = x.getImageData(0, 0, 48, 48).data, b = {};
      for (let i = 0; i < d.length; i += 4) { const r = d[i], g = d[i + 1], bl = d[i + 2]; if (r > 236 && g > 236 && bl > 236) continue; const key = (r >> 5) + ',' + (g >> 5) + ',' + (bl >> 5); const o = b[key] || (b[key] = { n: 0, r: 0, g: 0, b: 0 }); o.n++; o.r += r; o.g += g; o.b += bl; }
      const top = Object.values(b).sort((p, q) => q.n - p.n).slice(0, 4).map(o => [o.r / o.n | 0, o.g / o.n | 0, o.b / o.n | 0]);
      res({ ok: true, colors: top });
    } catch (e) { res({ ok: false }); } };
    im.onerror = () => res({ ok: false }); im.src = src;
  });
}
function rankLooks(colors) {
  const score = { lav: 0, pink: 0, warm: 0 };
  (colors || []).forEach((c, i) => { const [hh, s] = hsl(c), w = 4 - i;
    if (s < .14) score.lav += w * .6; else if (hh >= 200 && hh < 320) score.lav += w; else if (hh >= 320 || hh < 12) score.pink += w; else if (hh < 70) score.warm += w; else score.lav += w * .4; });
  return OUT_LOOKS.slice().sort((a, b) => score[b.key] - score[a.key]);
}

window.DX = { GUIDE, ANALYSIS, A, FACE, MK, BR, PRODS, BTOOLS, COLL_CATS, KIND, LOOKS, FEATURED, OUT_LOOKS, BROW_NAMES, BROW_STYLES, BROW_TONES, ROUTINE, VB, ctr, faceSvg, mirrorSvg, statuses, icon, fileToData, dominantColors, toHex, rankLooks };
})();
