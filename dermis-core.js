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
    tt: 'Crema hidratante', tx: 'Distribuí una capa fina de crema con movimientos circulares y masajeá hasta que se absorba.',
    tip: 'Tu piel tiende a resecarse: dejá que la hidratante se absorba antes de maquillarte.',
    ph: ['Aplicá', 'Distribuí', 'Masajeá', 'Resultado'],
    sty: { stroke: '#FFFFFF', fill: '#FFFFFF', fo: .10, dot: '#FFFFFF', blend: 'screen' },
    zones: [{ e: [745, 100, 112, 34, 0] }, ...pair({ e: [596, 425, 48, 80, -22] }), { e: [745, 652, 56, 26, 0] }],
    m: [[m('add', 'Aplicá un poco más de crema en la frente.', 0, 'r')], [m('blend', 'Distribuí con movimientos circulares.', 1, 'l'), m('ok', 'Esta zona ya está lista.', 2, 'r')], [m('ok', 'Tu piel está hidratada y lista.', 2, 'r')]] },
  { name: 'Base', sub: 'Unifica el tono de tu piel', cat: 'Base', tools: [13, 14], img: 'step2', applies: true, decor: 'base', mo: 'out',
    orient: 'Aplicá la base en todo el rostro, desde el centro hacia afuera.', areas: ['Todo el rostro', 'Centro hacia afuera'], vb: '470 50 560 344',
    tt: 'Base', tx: 'Colocá poca base en el centro del rostro y extendela hacia afuera con brocha o esponja húmeda. Sumá capas finas hasta unificar el tono.',
    tip: 'Para piel seca, elegí una base de acabado jugoso y evitá el exceso de polvo en las mejillas.',
    ph: ['Aplicá', 'Extendé', 'Integrá', 'Resultado'],
    photos: [['Preparación', null, 0], ['Aplicación con brocha', N + 'base-2-brocha.png'], ['Distribución', null, 1], ['Acabado uniforme', N + 'base-4-acabado.png']],
    video: { src: V + 'video-a.mp4', title: 'Base en stick: aplicación, difuminado con brocha y acabado' },
    sty: { stroke: '#F6A55B', fill: '#E8B48C', fo: .14, dot: '#E3AE86' },
    zones: [{ e: [745, 105, 140, 46, 0] }, ...pair({ e: [590, 430, 62, 100, -12] }), { e: [745, 655, 64, 30, 0] }],
    m: [[m('add', 'Falta base en el mentón.', 3, 'r')], [m('blend', 'Integrá un poco más este borde.', 1, 'l'), m('ok', 'Esta zona ya está lista.', 0, 'r')], [m('ok', 'El tono quedó unificado.', 2, 'r')]] },
  { name: 'Corrector', sub: 'Corrige e ilumina', cat: 'Corrector', tools: [14], img: 'step3', applies: true, mo: 'tap',
    orient: 'Aplicá el corrector a toques en la ojera y en las pequeñas zonas a corregir.', areas: ['Ojeras', 'Mentón'], vb: '540 220 410 254',
    tt: 'Corrector', tx: 'Aplicá el corrector a toques desde el lagrimal hacia afuera y difuminá suavemente, sin arrastrar.',
    tip: 'La ojera se reseca fácil: hidratá antes y usá una capa fina de corrector cremoso.',
    ph: ['Aplicá', 'Difuminá', 'Integrá', 'Resultado'],
    photos: [['Aplicación', N + 'corrector-1-aplicacion.png'], ['Distribución', null, 1], ['Difuminado', N + 'corrector-3-difuminado.png'], ['Resultado', null, 3]],
    sty: { stroke: '#F7C46A', fill: '#F6D6A8', fo: .30, dot: '#F2D1A0' },
    zones: [...pair({ d: UNDER_D, c: [630, 320], ax: 0, len: 46 }), { e: [782, 628, 11, 10, 0] }],
    m: [[m('add', 'Aplicá un poco más debajo de este ojo.', 1, 'r')], [m('blend', 'Difuminá a toques hacia afuera.', 0, 'l'), m('ok', 'Esta zona ya está lista.', 1, 'r')], [m('ok', 'No hace falta agregar más producto.', 1, 'r')]] },
  { name: 'Contorno', sub: 'Define tu rostro', cat: 'Contorno', tools: [13, 14], img: 'step4', applies: true, mo: 'dir', dir: [-0.8, -0.6],
    orient: 'Aplicá el contorno en las zonas marcadas para definir suavemente el rostro.', areas: ['Laterales de la frente', 'Debajo de los pómulos', 'Mandíbula'], vb: '470 250 520 322',
    tt: 'Contorno', tx: 'Aplicá poco contorno debajo de los pómulos, en los laterales de la frente y en la mandíbula. Difuminá hasta que se vea natural.',
    tip: 'Para piel seca, usá contorno en crema: se difumina mejor y queda más uniforme.',
    ph: ['Aplicá', 'Difuminá', 'Integrá', 'Resultado'],
    sty: { stroke: '#FFFFFF', fill: '#9A5F3F', fo: .55, dot: '#8A5236', blend: 'multiply' },
    zones: [...pair({ e: [579, 108, 58, 16, -52] }), ...pair({ e: [566, 388, 70, 18, 42] }), ...pair({ e: [592, 612, 60, 14, 46] })],
    m: [[m('add', 'Aplicá un poco más en esta zona.', 2, 'l')], [m('blend', 'Difuminá suavemente hacia afuera.', 3, 'r'), m('ok', 'Esta zona ya está lista.', 0, 'l')], [m('ok', 'No hace falta agregar más producto.', 5, 'r')]] },
  { name: 'Rubor', sub: 'Aporta color al rostro', cat: 'Rubor', tools: [14], img: 'step5', applies: true, mo: 'dir', dir: [-0.86, -0.5],
    orient: 'Aplicá el rubor en la parte alta de las mejillas.', areas: ['Parte alta de las mejillas'], vb: '480 250 500 310',
    tt: 'Rubor', tx: 'Sonreí y aplicá el rubor en la parte alta del pómulo, en diagonal hacia la sien. Empezá con poco y sumá capas.',
    tip: 'En piel seca, un rubor en crema o líquido se funde mejor. Aplicalo antes del polvo.',
    ph: ['Aplicá', 'Difuminá', 'Integrá', 'Resultado'],
    photos: [['Antes', null, 0], ['Aplicación en crema', N + 'rubor-2-crema.png'], ['Difuminado con brocha', N + 'rubor-3-brocha.png'], ['Difuminado con dedos', N + 'rubor-4-dedos.png'], ['Resultado', N + 'rubor-5-resultado.png']],
    video: { src: V + 'video-c.mp4', title: 'Rubor en crema: stick, brocha y difuminado con dedos' },
    sty: { stroke: '#FFD1DC', fill: '#E86F8C', fo: .38, dot: '#E06A86', blend: 'multiply' },
    zones: pair({ e: [598, 372, 56, 32, -18] }),
    m: [[m('add', 'Aplicá un toque en la parte alta del pómulo.', 1, 'r')], [m('blend', 'Integrá un poco más este borde.', 0, 'l'), m('ok', 'Esta zona ya está lista.', 1, 'r')], [m('ok', 'El color quedó parejo en ambas mejillas.', 1, 'r')]] },
  { name: 'Iluminador', sub: 'Dale luz', cat: 'Iluminador', tools: [], img: 'step6', applies: true, mo: 'out',
    orient: 'Iluminá la parte alta de los pómulos y el puente de la nariz.', areas: ['Pómulos', 'Puente y punta de la nariz', 'Arco de cupido'], vb: '520 220 450 280',
    tt: 'Iluminador', tx: 'Aplicá a toques en la parte alta del pómulo, el puente de la nariz y el arco de cupido. Difuminá los bordes.',
    tip: 'Elegí un iluminador satinado: los metalizados marcan textura en piel seca.',
    ph: ['Aplicá', 'Difuminá', 'Integrá', 'Resultado'],
    sty: { stroke: '#FFF4D6', fill: '#FFF1CF', fo: .45, dot: '#FFF1CF', blend: 'screen' },
    zones: [...pair({ e: [574, 326, 46, 12, -24] }), { e: [745, 330, 8, 58, 0] }, { e: [745, 414, 10, 9, 0] }, { e: [745, 496, 13, 5, 0] }],
    m: [[m('add', 'Sumá un toque en el puente de la nariz.', 2, 'r')], [m('blend', 'Difuminá el borde del pómulo.', 0, 'l'), m('ok', 'Esta zona ya está lista.', 1, 'r')], [m('ok', 'El brillo quedó equilibrado.', 1, 'r')]] },
  { name: 'Ojos', sub: 'Sombras y definición', cat: 'Ojos', tools: [15], img: 'step7', applies: true, mo: 'dir', dir: [-1, -0.25],
    orient: 'Aplicá la sombra en el párpado móvil y difuminá hacia la cola del ojo.', areas: ['Párpado móvil', 'Cola del ojo'], vb: '530 170 430 266',
    tt: 'Ojos', tx: 'Colocá la sombra en el párpado móvil y difuminá hacia el pliegue. Intensificá la cola para alargar la mirada.',
    tip: 'Prepará el párpado con un poco de corrector para que la sombra dure más.',
    ph: ['Aplicá', 'Difuminá', 'Intensificá', 'Resultado'],
    video: { src: V + 'video-b.mp4', title: 'Sombra ahumada: aplicación con pincel y difuminado hacia la cola' },
    sty: { stroke: '#E3D9FF', fill: '#A48BE8', fo: .5, dot: '#9C82E6', blend: 'multiply' },
    zones: pair({ d: LID_D, c: [626, 248], ax: -8, len: 50 }),
    m: [[m('add', 'Aplicá más sombra en el pliegue.', 0, 'l')], [m('blend', 'Difuminá hacia la cola del ojo.', 1, 'r'), m('ok', 'Este párpado ya está listo.', 0, 'l')], [m('ok', 'Ambos ojos quedaron simétricos.', 1, 'r')]] },
  { name: 'Labios', sub: 'Finaliza tu look', cat: 'Labios', tools: [], img: 'step8', applies: true, mo: 'trace',
    orient: 'Delineá el contorno y completá la superficie de los labios.', areas: ['Contorno', 'Superficie'], vb: '600 450 290 180',
    tt: 'Labios', tx: 'Delineá tu contorno natural, completá con el labial y terminá con gloss en el centro del labio inferior.',
    tip: 'Exfoliá e hidratá antes: el color se desliza mejor y no marca pielcitas.',
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
    tt: 'Depilación', tx: 'Retirá con pinza los vellos fuera de la forma, de a uno y en la dirección del crecimiento.',
    tip: 'Revisá la forma mientras avanzás y no retires muchos vellos de una misma zona.',
    ph: ['Identificá los vellos', 'Depilá con pinza', 'Revisá la forma', 'Resultado'], tcat: 'Depilación',
    sty: { stroke: '#FFFFFF', fill: '#FFFFFF', fo: .9, dot: '#FFFFFF' },
    zones: [...pair(Object.assign({ keep: true }, BROW_OUT)), ...pair({ e: [612, 198, 32, 5, -2], rm: true }), { e: [745, 200, 16, 12, 0], rm: true }, ...pair({ e: [548, 176, 12, 5, -35], rm: true })],
    m: [[m('add', 'Retirá algunos vellos debajo del arco.', 2, 'l', 'Retirá vello')], [m('ok', 'Esta zona ya está lista.', 2, 'l'), m('blend', 'Revisá el extremo de la ceja.', 6, 'r', 'Revisá')], [m('ok', 'Ambas cejas están equilibradas.', 1, 'r')]] },
  { name: 'Forma', sub: 'Marca la forma ideal', img: 'tool4', applies: false, decor: 'forma', mo: 'trace',
    orient: 'Marcá el inicio, el arco y el final de tus cejas según la forma objetivo.', areas: ['Inicio', 'Arco', 'Final'], vb: '490 110 510 316',
    how: 'Cómo hacerlo', tipTitle: 'Tip', success: '¡Listo! Forma definida.',
    tt: 'Forma', tx: 'Marcá tres puntos con lápiz: inicio, arco y final. Después unilos con trazos suaves.',
    tip: 'Usá un lápiz un tono más claro que tu vello para poder corregir antes de rellenar.',
    ph: ['Marcá el inicio', 'Ubicá el arco', 'Definí el final', 'Resultado'], tcat: 'Relleno',
    sty: { stroke: '#FFFFFF', fill: '#FFFFFF', fo: 0, dot: '#FFFFFF' },
    zones: pair(BROW_OUT),
    m: [[m('add', 'Alineá el inicio con la aleta de la nariz.', 0, 'l', 'Marcá')], [m('blend', 'Elevá apenas el arco de esta ceja.', 1, 'r', 'Ajustá'), m('ok', 'Esta ceja ya está lista.', 0, 'l')], [m('ok', 'Ambas cejas están equilibradas.', 1, 'r')]] },
  { name: 'Relleno', sub: 'Unifica y da volumen', img: 'prod10', applies: true, mo: 'dir', dir: [-1, 0.15],
    orient: 'Completá los espacios dentro de la forma para dar volumen.', areas: ['Cola', 'Inicio'], vb: '490 110 510 316',
    how: 'Cómo hacerlo', tipTitle: 'Tip', success: '¡Listo! Relleno completo.',
    tt: 'Relleno', tx: 'Rellená con trazos cortos en la dirección del vello. Intensificá la cola y suavizá el inicio.',
    tip: 'Peiná el vello antes para ver los huecos reales. Usá poco producto.',
    ph: ['Peiná', 'Trazá', 'Difuminá', 'Resultado'], tcat: 'Relleno',
    sty: { stroke: '#FFFFFF', fill: '#4A2E22', fo: .45, dot: '#4A2E22', blend: 'multiply' },
    zones: [...pair(Object.assign({ keep: true }, BROW_OUT)), ...pair({ e: [555, 186, 26, 7, -25] }), ...pair({ e: [688, 198, 14, 9, 15] })],
    m: [[m('add', 'Rellená los huecos de la cola.', 3, 'r', 'Completá')], [m('blend', 'Difuminá el inicio con el cepillo.', 4, 'l'), m('ok', 'Esta zona ya está lista.', 3, 'r')], [m('ok', 'Relleno uniforme en ambas cejas.', 1, 'r')]] },
  { name: 'Fijación', sub: 'Mantiene la forma', img: 'tool5', applies: false, decor: 'fij', mo: 'dir', dir: [0.25, -1],
    orient: 'Peiná y fijá el vello hacia arriba para mantener la forma.', areas: ['Todo el largo de la ceja'], vb: '490 110 510 316',
    how: 'Cómo hacerlo', tipTitle: 'Tip', success: '¡Listo! Tus cejas están fijadas.',
    tt: 'Fijación', tx: 'Peiná con gel desde el inicio hacia la cola, primero hacia arriba y luego hacia afuera. Dejá secar.',
    tip: 'Retirá el exceso del cepillo para que no queden restos blancos.',
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


/* ---------- guías AR (sistema de guías del HTML de referencia, sobre MediaPipe Face Landmarker) ---------- */
const AR = (() => {
const OVAL = [10,338,297,332,284,251,389,356,454,323,361,288,397,365,379,378,400,377,152,148,176,149,150,136,172,58,132,93,234,127,162,21,54,103,67,109];
const LIPS = [61,146,91,181,84,17,314,405,321,375,291,409,270,269,267,0,37,39,40,185];
const LIP_R = [61,146,91,181,84,17,0,37,39,40,185];
const LIP_L = [17,314,405,321,375,291,409,270,269,267,0];
const SD = {
  R: { eo:33, ei:133, ch:50, ear:234, ear2:132, tmp:127, cb:117, mc:61, nw:129, ll:145, ul:159, up:[33,246,161,160,159,158,157,173,133], lo:[33,7,163,144,145,153,154,155,133], bu:[70,63,105,66,107], bl:[46,53,52,65,55], arch:105, w:{m:'derecho', f:'derecha'} },
  L: { eo:263, ei:362, ch:280, ear:454, ear2:361, tmp:356, cb:346, mc:291, nw:358, ll:374, ul:386, up:[263,466,388,387,386,385,384,398,362], lo:[263,249,390,373,374,380,381,382,362], bu:[300,293,334,296,336], bl:[276,283,282,295,285], arch:334, w:{m:'izquierdo', f:'izquierda'} }
};
const lerp=(a,b,t)=>[a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t];
const dist=(a,b)=>Math.hypot(a[0]-b[0],a[1]-b[1]);
const cen=p=>{let x=0,y=0;p.forEach(q=>{x+=q[0];y+=q[1]});return[x/p.length,y/p.length]};
const scl=(p,c,k)=>p.map(q=>[c[0]+(q[0]-c[0])*k,c[1]+(q[1]-c[1])*k]);
const ell=(c,a,b,ang,n=28)=>{const o=[];for(let i=0;i<n;i++){const t=i/n*Math.PI*2,x=Math.cos(t)*a,y=Math.sin(t)*b;o.push([c[0]+x*Math.cos(ang)-y*Math.sin(ang),c[1]+x*Math.sin(ang)+y*Math.cos(ang)])}return o};
const band=(a,b,w0,w1)=>{const d=[b[0]-a[0],b[1]-a[1]],L=Math.hypot(...d)||1,n=[-d[1]/L,d[0]/L],o=[];const N=10;for(let i=0;i<=N;i++){const t=i/N,p=lerp(a,b,t),w=(w0+(w1-w0)*t)*Math.sin(Math.PI*(0.15+0.85*t))/2;o.push([p[0]+n[0]*w,p[1]+n[1]*w])}for(let i=N;i>=0;i--){const t=i/N,p=lerp(a,b,t),w=(w0+(w1-w0)*t)*Math.sin(Math.PI*(0.15+0.85*t))/2;o.push([p[0]-n[0]*w,p[1]-n[1]*w])}return o};
const ang=(a,b)=>Math.atan2(b[1]-a[1],b[0]-a[0]);
const pip=(x,y,p)=>{let c=false;for(let i=0,j=p.length-1;i<p.length;j=i++){const a=p[i],b=p[j];if(((a[1]>y)!==(b[1]>y))&&(x<(b[0]-a[0])*(y-a[1])/(b[1]-a[1])+a[0]))c=!c}return c};
const ease=t=>t<0?0:t>1?1:1-Math.pow(1-t,3);

function browTarget(P,s,style,fw){
  const S=SD[s], nw=P(S.nw), browY=cen(S.bu.map(P).concat(S.bl.map(P)))[1];
  const ext=(a,b)=>{const t=(browY-a[1])/((b[1]-a[1])||1e-3);return lerp(a,b,Math.max(1,Math.min(t,3)))};
  const iris=lerp(P(S.ul),P(S.ll),0.5);
  const start=ext(nw,P(S.ei)), archB=ext(nw,lerp(iris,P(S.eo),0.45)), tail=ext(nw,P(S.eo));
  const th=fw*0.04*style.thick, lift=fw*0.05*style.lift;
  const arch=[archB[0],archB[1]-lift-th*0.3], tailP=[tail[0],tail[1]-th*0.2+lift*0.2];
  const q=(a,c,b,t)=>[(1-t)*(1-t)*a[0]+2*(1-t)*t*c[0]+t*t*b[0],(1-t)*(1-t)*a[1]+2*(1-t)*t*c[1]+t*t*b[1]];
  const ctrl=[2*arch[0]-(start[0]+tailP[0])/2,2*arch[1]-(start[1]+tailP[1])/2];
  const up=[],lo=[];for(let i=0;i<=14;i++){const t=i/14,p=q(start,ctrl,tailP,t),w=th*(1-0.82*Math.pow(t,1.6));up.push([p[0],p[1]-w*0.6]);lo.push([p[0],p[1]+w*0.4])}
  return {poly:up.concat(lo.reverse()),pts:{start,arch,tail:tailP,nw,iris,ei:P(S.ei),eo:P(S.eo)}};
}

const crv=(pts,closed,per=5)=>{const n=pts.length;if(n<3)return pts;const g=i=>closed?pts[(i+n)%n]:pts[Math.max(0,Math.min(n-1,i))],o=[];const segs=closed?n:n-1;for(let i=0;i<segs;i++){const p0=g(i-1),p1=g(i),p2=g(i+1),p3=g(i+2);for(let k=0;k<per;k++){const t=k/per,t2=t*t,t3=t2*t;o.push([0,1].map(j=>0.5*((2*p1[j])+(-p0[j]+p2[j])*t+(2*p0[j]-5*p1[j]+4*p2[j]-p3[j])*t2+(-p0[j]+3*p1[j]-3*p2[j]+p3[j])*t3)))}}if(!closed)o.push(pts[n-1]);return o};
const leaf=(pts,w)=>{const c=crv(pts,false,6),n=c.length,L=[],R=[];for(let i=0;i<n;i++){const p=c[Math.max(0,i-1)],q=c[Math.min(n-1,i+1)];let dx=q[0]-p[0],dy=q[1]-p[1];const l=Math.hypot(dx,dy)||1;const t=i/(n-1),ww=w*Math.pow(Math.sin(Math.PI*t),0.8)/2;L.push([c[i][0]-dy/l*ww,c[i][1]+dx/l*ww]);R.push([c[i][0]+dy/l*ww,c[i][1]-dx/l*ww])}return L.concat(R.reverse())};
const toward=(pts,c,k)=>pts.map(p=>lerp(p,c,k));
function buildZones(key,P,o={}){
  const fw=dist(P(234),P(454)), fh=dist(P(10),P(152)), z=[];
  const oval=OVAL.map(P), nose=P(4);
  if(key==='prep'){ z.push({id:'face',poly:scl(oval,nose,0.9),measure:false,flow:[[P(199),P(151)],[P(50),P(127)],[P(280),P(356)]].map(([a,b])=>[a,lerp(a,b,0.8)])}); return z; }
  if(key==='base'){
    const dots=[P(151),P(4),P(50),P(280),P(199)];
    z.push({id:'face',poly:scl(oval,nose,0.88),measure:false,dots,flow:dots.map(d=>[d,lerp(nose,d,1.7)])});
    for(const s of ['R','L']){const S=SD[s];z.push({id:'base'+s,pair:'base',side:s,hidden:true,name:'la mejilla '+S.w.f,poly:ell(lerp(P(S.ch),P(S.ear),0.3),fw*0.08,fw*0.06,0)})}
    return z;
  }
  for(const s of ['R','L']){
    const S=SD[s];
    if(key==='concealer'){const lo=S.lo.map(P).map(q=>[q[0],q[1]+fh*0.025]);const apex=lerp(P(S.ll),P(S.ch),0.9);z.push({id:'conc'+s,pair:'conc',side:s,name:'debajo del ojo '+S.w.m,poly:lo.concat([apex]),dots:[lerp(P(S.ll),apex,0.35),lerp(P(S.ei),apex,0.45),lerp(P(S.eo),apex,0.3)],flow:[]})}
    if(key==='contour'){const a=lerp(P(S.ear),P(S.ear2),0.4),b=lerp(a,P(S.mc),0.5);z.push({id:'cont'+s,pair:'cont',side:s,name:'el contorno '+S.w.m,poly:band(a,b,fw*0.075,fw*0.04),flow:[[a,b],[lerp(a,b,0.5),[lerp(a,b,0.5)[0],lerp(a,b,0.5)[1]-fh*0.07]]]});
      const mid=P(9),fr=(s==='R'?[109,67,103]:[338,297,332]).map(P).map(q=>lerp(q,mid,0.16));z.push({id:'ctF'+s,measure:false,side:s,poly:leaf(fr,fw*0.05)});
      const tp=(s==='R'?[54,21,162]:[284,251,389]).map(P).map(q=>lerp(q,nose,0.07));z.push({id:'ctT'+s,measure:false,side:s,poly:leaf(tp,fw*0.042)});
      const jw=(s==='R'?[172,136,150,149]:[397,365,379,378]).map(P).map(q=>lerp(q,nose,0.06));z.push({id:'ctJ'+s,measure:false,side:s,poly:leaf(jw,fw*0.04)})}
    if(key==='blush'){const c0=lerp(P(S.ch),P(S.cb),0.5),t=P(S.tmp);let k=0.22,tt=t;if(o.shape==='Redondo'){k=0.3}if(o.shape==='Alargado'){tt=[t[0],c0[1]+(t[1]-c0[1])*0.45]}const an=ang(c0,tt),c=lerp(c0,tt,k);z.push({id:'blush'+s,pair:'blush',side:s,name:'el pómulo '+S.w.m,poly:ell(c,fw*0.105,fw*0.058,an),soft:true,flow:[[c0,lerp(c0,t,0.6)]]})}
    if(key==='highlight'){const c=lerp(P(S.cb),P(S.tmp),0.45);const cc=[c[0],c[1]-fh*0.03];z.push({id:'hl'+s,pair:'hl',side:s,name:'el pómulo '+S.w.m,metric:'L',poly:ell(cc,fw*0.07,fw*0.022,ang(P(S.cb),P(S.tmp))),flow:[[lerp(cc,P(S.cb),0.4),lerp(cc,P(S.tmp),0.4)]]});z.push({id:'hlb'+s,measure:false,poly:ell(lerp(P(S.bl[1]),P(S.eo),0.4),fw*0.03,fw*0.012,0),flow:[]})}
    if(key==='eyes'){const up=S.up.map(P),bl=S.bl.map(P),idx=[0,2,4,6,8];const top=bl.map((b,i)=>lerp(up[idx[i]],b,0.62));z.push({id:'eye'+s,pair:'eye',side:s,name:'el párpado '+S.w.m,poly:up.concat(top.slice().reverse()),flow:[[top[0],top[4]]]})}
    if(key==='lips'){const pts=(s==='R'?LIP_R:LIP_L).map(P);z.push({id:'lip'+s,pair:'lip',side:s,hidden:true,name:'el lado '+S.w.m+' del labio',poly:scl(pts,cen(pts),0.85)})}
    if(key.startsWith('brow')){
      const bp=S.bu.map(P).concat(S.bl.map(P).reverse());const tg=browTarget(P,s,o.browStyle||{lift:0.25,thick:1},fw);
      z.push({id:'brow'+s,pair:'brow',side:s,name:'la ceja '+S.w.f,poly:key==='brow-fill'?tg.poly:bp,measure:key==='brow-fill',brow:tg,natural:bp,flow:key==='brow-set'?[[lerp(tg.pts.start,tg.pts.arch,0.2),[tg.pts.start[0],tg.pts.start[1]-fh*0.05]],[tg.pts.arch,lerp(tg.pts.arch,tg.pts.tail,0.7)]]:[]});
    }
  }
  if(key==='highlight'){z.push({id:'nose',measure:false,poly:band(P(168),P(195),fw*0.03,fw*0.02),flow:[[P(168),P(195)]]});z.push({id:'cupid',measure:false,poly:ell(P(0),fw*0.025,fw*0.01,0),flow:[]})}
  if(key==='lips'){z.push({id:'lips',measure:false,poly:LIPS.map(P),contour:true,flow:[[P(0),lerp(P(0),P(61),0.85)],[P(0),lerp(P(0),P(291),0.85)]]})}
  return z;
}


  const KEY = { 'Preparación': 'prep', 'Base': 'base', 'Corrector': 'concealer', 'Contorno': 'contour', 'Rubor': 'blush', 'Iluminador': 'highlight', 'Ojos': 'eyes', 'Labios': 'lips', 'Depilación': 'brow-pluck', 'Forma': 'brow-shape', 'Relleno': 'brow-fill', 'Fijación': 'brow-set' };
  const ZOOM = { 'Corrector': { p: [230, 450, .5], z: 1.6 }, 'Ojos': { p: [159, 386, .5], z: 1.75 }, 'Labios': { p: [13, 14, .5], z: 2 }, 'Depilación': { p: [105, 334, .5], z: 1.65 }, 'Forma': { p: [105, 334, .5], z: 1.5 }, 'Relleno': { p: [105, 334, .5], z: 1.65 }, 'Fijación': { p: [105, 334, .5], z: 1.65 },
    'Rubor': { p: [50, 280, .5], z: 1.35, auto: false }, 'Contorno': { p: [4, 152, .25], z: 1.25, auto: false }, 'Iluminador': { p: [117, 346, .5], z: 1.35, auto: false } };
  const res = (sp, P) => { if (typeof sp === 'number') return P(sp); const p = res(sp[0], P), q = res(sp[1], P), t = sp[2]; return [p[0] + (q[0] - p[0]) * t, p[1] + (q[1] - p[1]) * t]; };
  const ALL = Array.from({ length: 478 }, (_, i) => i);
  // paletas por producto: [r,g,b], opacidad máxima, desenfoque relativo al ancho del rostro, modo de mezcla
  const LOOKTINT = { 'Lavanda glow': { eye: [176, 150, 214], lip: [214, 128, 150] }, 'Dorado cálido': { eye: [196, 150, 92], lip: [196, 110, 96] }, 'Glam clásico': { eye: [128, 92, 86], lip: [176, 70, 82] }, 'Rosado fresco': { eye: [222, 150, 160], lip: [228, 120, 140] } };
  const TEX = {
    prep: { c: [255, 246, 238], a: 0.4, b: 0.03, m: 'screen' },
    base: { c: [228, 184, 150], a: 0.66, b: 0.04, m: 'source-over' },
    concealer: { c: [240, 210, 172], a: 0.82, b: 0.022, m: 'source-over', satin: 0.25 },
    contour: { c: [146, 98, 72], a: 0.7, b: 0.022, m: 'multiply' },
    blush: { c: [226, 122, 130], a: 0.74, b: 0.03, m: 'multiply', satin: 0.18 },
    highlight: { c: [255, 246, 236], a: 0.68, b: 0.022, m: 'screen', pearl: true },
    eyes: { c: [172, 140, 214], a: 0.72, b: 0.016, m: 'multiply', satin: 0.2 },
    lips: { c: [206, 108, 136], a: 0.85, b: 0.008, m: 'multiply', edge: true },
    brow: { c: [98, 72, 58], a: 0.6, b: 0.006, m: 'source-over' },
  };
  let NOISE = null, STRK = null;
  function streaks() { if (STRK) return STRK; const s = document.createElement('canvas'); s.width = 220; s.height = 90; const g = s.getContext('2d'); g.filter = 'blur(0.8px)';
    for (let i = 0; i < 70; i++) { const y = Math.random() * 90, x = Math.random() * 220, l = 30 + Math.random() * 120; g.strokeStyle = 'rgba(0,0,0,' + (0.25 + Math.random() * 0.6) + ')'; g.lineWidth = 0.6 + Math.random() * 1.6; g.beginPath(); g.moveTo(x, y); g.quadraticCurveTo(x + l / 2, y + (Math.random() - 0.5) * 4, x + l, y + (Math.random() - 0.5) * 3); g.stroke(); g.beginPath(); g.moveTo(x - 220, y); g.lineTo(x - 220 + l, y); g.stroke(); }
    return (STRK = s); }
  function noise() { if (NOISE) return NOISE; const n = document.createElement('canvas'); n.width = n.height = 160; const g = n.getContext('2d'), im = g.createImageData(160, 160);
    for (let i = 0; i < im.data.length; i += 4) { const v = Math.random(); im.data[i] = im.data[i + 1] = im.data[i + 2] = 0; im.data[i + 3] = Math.pow(v, 2.2) * 255; }
    g.putImageData(im, 0, 0); const s = document.createElement('canvas'); s.width = s.height = 160; const sg = s.getContext('2d'); sg.filter = 'blur(1.2px)'; sg.drawImage(n, 0, 0); return (NOISE = sg.filter === 'blur(1.2px)' ? s : n); }

  /* ---------- pinceladas: guías como maquillaje real (sellos gaussianos a lo largo de líneas anatómicas) ---------- */
  const BRUSH = {
    prep: { c: [255, 248, 240], a: 0.34, m: 'screen' },
    base: { c: [222, 176, 142], a: 0.3, m: 'soft-light' },
    concealer: { c: [246, 224, 190], a: 0.5, m: 'screen' },
    contour: { c: [120, 82, 62], a: 0.42, m: 'multiply' },
    blush: { c: [222, 116, 124], a: 0.4, m: 'multiply' },
    highlight: { c: [255, 248, 238], a: 0.55, m: 'screen' },
    eyes: { c: [172, 140, 214], a: 0.5, m: 'multiply' },
    lips: { c: [200, 104, 128], a: 0.5, m: 'multiply' },
  };
  function strokes(key, P) {
    const fw = dist(P(234), P(454)), fh = dist(P(10), P(152)), S = [], nose = P(4), fhd = P(151), mid = P(9), chin = lerp(P(152), P(17), 0.45);
    const dn = (q, k) => [q[0], q[1] + fh * k];
    const add = (pts, r, side) => S.push({ pts, r: r.map(v => v * fw), side });
    if (key === 'prep' || key === 'base') { const k = key === 'base' ? 1.25 : 1;
      add([lerp(P(105), fhd, 0.5), lerp(fhd, mid, 0.2), lerp(P(334), fhd, 0.5)], [0.05 * k, 0.06 * k, 0.05 * k]); add([lerp(chin, P(176), 0.3), chin, lerp(chin, P(400), 0.3)], [0.04 * k, 0.045 * k, 0.04 * k]);
      if (key === 'base') add([P(168), P(197), P(4)], [0.03, 0.035, 0.03]);
      for (const s of ['R', 'L']) { const D = SD[s]; add([lerp(P(D.nw), P(D.ch), 0.4), P(D.ch), lerp(P(D.ch), P(D.ear), 0.45)], [0.05 * k, 0.065 * k, 0.05 * k], s); } }
    for (const s of ['R', 'L']) { const D = SD[s];
      if (key === 'concealer') { const lo = D.lo.slice(2, 8).map(P).map(q => dn(q, 0.035)); add(lo, [0.024, 0.032, 0.036, 0.034, 0.03, 0.022], s); add([lo[3], dn(lerp(P(D.ll), P(D.ch), 0.55), 0.01)], [0.03, 0.016], s); }
      if (key === 'contour') { const a = lerp(P(D.ear), P(D.tmp), 0.25), b = lerp(lerp(P(D.ear), P(D.mc), 0.45), P(D.ch), 0.18);
        add([a, lerp(a, b, 0.5), b], [0.04, 0.034, 0.016], s);
        add([lerp(P(D.ear2), P(D.ear), 0.15), lerp(P(D.ear2), chin, 0.35)], [0.026, 0.014], s);
        add([lerp(P(D.tmp), P(s === 'R' ? 54 : 284), 0.6), lerp(P(D.tmp), P(s === 'R' ? 54 : 284), 0.1)], [0.024, 0.03], s); }
      if (key === 'blush') { const c0 = lerp(lerp(P(D.ch), P(D.cb), 0.45), P(D.nw), 0.08), t = lerp(P(D.tmp), P(D.eo), 0.15);
        add([c0, lerp(c0, t, 0.45), lerp(c0, t, 0.8)], [0.058, 0.052, 0.032], s); }
      if (key === 'highlight') { const a = lerp(P(D.cb), P(D.eo), 0.42), b = lerp(P(D.tmp), P(D.eo), 0.3);
        add([a, lerp(a, b, 0.5), b], [0.016, 0.02, 0.014], s);
        add(D.bu.slice(2).map(P).map(q => dn(q, -0.02)), [0.01, 0.013, 0.01], s); }
      if (key === 'eyes') { const up = D.up.map(P), br = D.bu.map(P), n = up.length;
        const lid = up.map((q, i) => lerp(q, br[Math.min(br.length - 1, Math.round((n - 1 - i) / (n - 1) * (br.length - 1)))] || br[0], 0.3));
        const pts = lid.slice().reverse(); pts.push(lerp(pts[pts.length - 1], P(D.tmp), 0.18));
        add(pts, pts.map((_, i) => 0.016 + 0.018 * (i / (pts.length - 1))), s); }
    }
    if (key === 'highlight') { add([P(168), P(6), P(197)], [0.009, 0.011, 0.008]); add([lerp(P(0), P(164), 0.5)], [0.012]); }
    if (key === 'lips') { const L = LIPS.map(P); L.push(L[0]); add(L, L.map(() => 0.011)); }
    return S;
  }
  function stamp(g, x, y, r, rgb) { const gr = g.createRadialGradient(x, y, 0, x, y, r); const c = rgb.join(','); gr.addColorStop(0, 'rgba(' + c + ',.55)'); gr.addColorStop(0.45, 'rgba(' + c + ',.32)'); gr.addColorStop(1, 'rgba(' + c + ',0)'); g.fillStyle = gr; g.beginPath(); g.arc(x, y, r, 0, 7); g.fill(); }
  function build(host, name, W, H, opt) {
    [...host.children].forEach(ch => { ch.style.transition = 'opacity .55s ease'; ch.style.opacity = '0'; setTimeout(() => ch.remove(), 600); });
    const key = KEY[name]; if (!key) return null;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const cv = document.createElement('canvas'), d = window.devicePixelRatio || 1;
    cv.width = Math.round(W * d); cv.height = Math.round(H * d); cv.style.cssText = 'position:absolute;left:0;top:0;width:' + W + 'px;height:' + H + 'px';
    host.appendChild(cv);
    const lay = document.createElement('canvas'); lay.width = cv.width; lay.height = cv.height; const lc = lay.getContext('2d');
    const c = cv.getContext('2d'); let t0 = null; const FS = {};
    const tk = key.startsWith('brow') ? 'brow' : key, base = TEX[tk], tint = LOOKTINT[(opt && opt.look) || ''] || {};
    const T = Object.assign({}, base, tk === 'eyes' && tint.eye ? { c: tint.eye } : {}, tk === 'lips' && tint.lip ? { c: tint.lip } : {});
    const pat = c.createPattern(noise(), 'repeat'), spat = c.createPattern(streaks(), 'repeat');
    const BR = BRUSH[tk] ? Object.assign({}, BRUSH[tk], tk === 'eyes' && tint.eye ? { c: tint.eye } : {}, tk === 'lips' && tint.lip ? { c: tint.lip } : {}) : null;
    cv.style.mixBlendMode = 'normal'; cv.dataset.blend = 'source-over';
    function paint(P, el, fac) {
      const S = strokes(key, P), IN = 1.3, STG = 0.18, HOLD = 2, FADE = 1.2, LOW = 0.9;
      lc.setTransform(1, 0, 0, 1, 0, 0); lc.globalCompositeOperation = 'source-over'; lc.clearRect(0, 0, lay.width, lay.height); lc.setTransform(d, 0, 0, d, 0, 0);
      let last = 0;
      S.forEach((st, si) => {
        const f = st.side ? fac[st.side] : 1, va = st.side ? (f < 0.55 ? Math.max(0, (f - 0.3) / 0.25) : 1) : 1; if (va <= 0.01) return;
        const d0 = si * STG, pr = reduce ? 1 : Math.max(0, Math.min(1, (el - d0) / IN)); last = Math.max(last, d0 + IN); if (pr <= 0) return;
        const pts = st.pts.length > 2 ? crv(st.pts, false, 6) : st.pts, rr = st.pts.length > 2 ? pts.map((_, i) => { const u = i / (pts.length - 1) * (st.r.length - 1), k = Math.floor(u), w = u - k; return st.r[k] * (1 - w) + (st.r[Math.min(k + 1, st.r.length - 1)]) * w; }) : st.r;
        const sx = Math.sqrt(Math.min(1.05, f));
        let L = 0; const seg = [0]; for (let i = 1; i < pts.length; i++) { L += dist(pts[i - 1], pts[i]); seg.push(L); }
        const end = L * ease(pr); lc.globalAlpha = va;
        if (pts.length === 1) { stamp(lc, pts[0][0], pts[0][1], rr[0] * ease(pr), BR.c); return; }
        for (let i = 1; i < pts.length; i++) { const a = pts[i - 1], b = pts[i], l = seg[i] - seg[i - 1]; if (seg[i - 1] > end) break;
          const r0 = rr[i - 1] * sx, r1 = rr[i] * sx, stp = Math.max(1, Math.min(r0, r1) * 0.3);
          for (let u = 0; u <= l; u += stp) { if (seg[i - 1] + u > end) break; const k = l ? u / l : 0; stamp(lc, a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k, r0 + (r1 - r0) * k, BR.c); } }
      });
      lc.globalAlpha = 1;
      lc.globalCompositeOperation = 'destination-out'; lc.globalAlpha = 0.22; lc.fillStyle = pat; lc.fillRect(0, 0, W, H); lc.globalAlpha = 1; lc.globalCompositeOperation = 'source-over';
      const hi = el < last + HOLD ? 1 : Math.max(0, 1 - (el - last - HOLD) / FADE), lvl = LOW + (1 - LOW) * hi;
      c.setTransform(1, 0, 0, 1, 0, 0); c.globalAlpha = Math.min(1, BR.a * 2) * lvl; c.drawImage(lay, 0, 0); c.globalAlpha = 1;
    }
    function persp(z, poly, P, fac) {
      const sd = z.side || ((z.id || '').match(/[RL]$/) || [])[0]; if (!sd) return { poly, a: 1 };
      const f = fac[sd], a = f < 0.55 ? Math.max(0, (f - 0.3) / 0.25) : 1;
      if (/^(eye|lip|brow|conc)/.test(z.id || '')) return { poly, a };
      const A = P(234), B = P(454); let ux = B[0] - A[0], uy = B[1] - A[1]; const l = Math.hypot(ux, uy) || 1; ux /= l; uy /= l;
      const cc = cen(poly), k = Math.min(1.08, f);
      return { a, poly: poly.map(q => { const dx = q[0] - cc[0], dy = q[1] - cc[1], pr = dx * ux + dy * uy, d2 = pr * (k - 1); return [q[0] + ux * d2, q[1] + uy * d2]; }) };
    }
    const OFF = 30000;
    function blob(poly, rgb, alpha, blurPx, core) {
      // pigmento: más concentrado en el centro, bordes difuminados (sombra desenfocada desplazada)
      let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9; poly.forEach(p => { x0 = Math.min(x0, p[0]); y0 = Math.min(y0, p[1]); x1 = Math.max(x1, p[0]); y1 = Math.max(y1, p[1]); });
      const cc = core || cen(poly), r = Math.max(x1 - x0, y1 - y0) / 2;
      const g = lc.createRadialGradient(cc[0] - OFF, cc[1], 0, cc[0] - OFF, cc[1], r * 1.05);
      g.addColorStop(0, 'rgba(0,0,0,1)'); g.addColorStop(0.55, 'rgba(0,0,0,.78)'); g.addColorStop(1, 'rgba(0,0,0,.42)');
      lc.save(); lc.setTransform(d, 0, 0, d, 0, 0); lc.shadowColor = 'rgba(' + rgb.join(',') + ',' + alpha + ')'; lc.shadowBlur = blurPx * d; lc.shadowOffsetX = OFF * d;
      lc.beginPath(); poly.forEach((p, i) => i ? lc.lineTo(p[0] - OFF, p[1]) : lc.moveTo(p[0] - OFF, p[1])); lc.closePath(); lc.fillStyle = g; lc.fill(); lc.restore();
      return [x0 - blurPx * 2, y0 - blurPx * 2, x1 + blurPx * 2, y1 + blurPx * 2];
    }
    function drawBrow(z,a,t,el){
    const s=key,b=z.brow,P=b.pts;
    if(s==='brow-pluck'){c.beginPath();z.natural.forEach((p,i)=>i?c.lineTo(p[0],p[1]):c.moveTo(p[0],p[1]));c.closePath();c.fillStyle=`rgba(232,185,138,${0.22*a})`;c.fill()}
    c.beginPath();b.poly.forEach((p,i)=>i?c.lineTo(p[0],p[1]):c.moveTo(p[0],p[1]));c.closePath();
    if(s==='brow-fill'||s==='brow-set'){c.fillStyle=`rgba(201,181,245,${0.22*a})`;c.fill()}
    c.setLineDash([3,4]);c.lineDashOffset=-t/60;c.strokeStyle=`rgba(236,226,255,${0.9*a})`;c.lineWidth=1.3;c.stroke();c.setLineDash([]);
    if(s==='brow-shape'){const lines=[[P.nw,P.start],[P.nw,P.arch],[P.nw,P.tail]];lines.forEach(([p0,p1],i)=>{const k=ease((el-0.3*i)/0.9);if(k<=0)return;const e=lerp(p0,p1,k*1.08);c.strokeStyle=`rgba(240,232,255,${0.7*a})`;c.lineWidth=1;c.beginPath();c.moveTo(p0[0],p0[1]);c.lineTo(e[0],e[1]);c.stroke();if(k>=1){c.fillStyle=`rgba(255,250,255,${a})`;c.beginPath();c.arc(p1[0],p1[1],3.2,0,7);c.fill();c.strokeStyle=`rgba(255,250,255,${0.5*a})`;c.beginPath();c.arc(p1[0],p1[1],7+2*Math.sin(t/300),0,7);c.stroke()}})}
    if(s==='brow-fill'){for(let i=0;i<9;i++){const u=i/8,p=lerp(P.start,P.tail,u),ph=((t/1300)+i*0.11)%1,len=8+6*(1-u);const an=-Math.PI/2+u*1.2*(z.side==='R'?1:-1)*-1;const q=[p[0]+Math.cos(an)*len*ease(ph),p[1]+Math.sin(an)*len*ease(ph)];c.strokeStyle=`rgba(255,250,255,${Math.sin(Math.PI*ph)*0.8*a})`;c.lineWidth=1.4;c.beginPath();c.moveTo(p[0],p[1]);c.lineTo(q[0],q[1]);c.stroke()}}
    (z.flow||[]).forEach(([p0,p1],fi)=>{const s2=((t/1400)+fi*0.3)%1,p=lerp(p0,p1,ease(s2));c.fillStyle=`rgba(255,250,255,${Math.sin(Math.PI*s2)*a})`;c.beginPath();c.arc(p[0],p[1],2.6,0,7);c.fill()});
  }
    function drawBrowMarks(z, a, el) {
      const P = z.brow.pts;
      if (key === 'brow-shape') [[P.nw, P.start], [P.nw, P.arch], [P.nw, P.tail]].forEach(([p0, p1], i) => { const k = ease((el - 0.3 * i) / 0.9); if (k <= 0) return; const e = lerp(p0, p1, k); c.strokeStyle = 'rgba(255,248,242,' + (0.55 * a) + ')'; c.lineWidth = 1; c.setLineDash([2, 4]); c.beginPath(); c.moveTo(p0[0], p0[1]); c.lineTo(e[0], e[1]); c.stroke(); c.setLineDash([]); if (k >= 1) { c.fillStyle = 'rgba(255,248,242,' + (0.85 * a) + ')'; c.beginPath(); c.arc(p1[0], p1[1], 2.4, 0, 7); c.fill(); } });
    }
    function outline(poly, a, dashed, thin) {
      if (a <= 0.01) return; c.save(); c.setTransform(d, 0, 0, d, 0, 0); c.lineJoin = 'round'; c.lineCap = 'round';
      c.beginPath(); poly.forEach((p, i) => i ? c.lineTo(p[0], p[1]) : c.moveTo(p[0], p[1])); c.closePath();
      c.setLineDash(dashed ? [2.6, 3.6] : []); c.shadowColor = 'rgba(30,18,50,.28)'; c.shadowBlur = 2.5;
      c.strokeStyle = 'rgba(255,253,250,' + (0.95 * a) + ')'; c.lineWidth = thin ? 1.1 : 1.6; c.stroke(); c.restore(); }
    function wob(poly, id, amp) { let h = 0; for (const ch of id) h = (h * 31 + ch.charCodeAt(0)) % 997; const cc = cen(poly), n = poly.length;
      return poly.map((p, i) => { const u = i / n * Math.PI * 2, k = 1 + amp * (0.6 * Math.sin(u * 3 + h) + 0.4 * Math.sin(u * 7 + h * 1.7)); return [cc[0] + (p[0] - cc[0]) * k, cc[1] + (p[1] - cc[1]) * k]; }); }
    function lines(z, poly, pp, a, t, fac, P) {
      if (a <= 0.01) return;
      c.save(); c.setTransform(d, 0, 0, d, 0, 0); c.lineJoin = 'round'; c.lineCap = 'round';
      if (!z.noLine && !z.brow) { c.beginPath(); poly.forEach((p, i) => i ? c.lineTo(p[0], p[1]) : c.moveTo(p[0], p[1])); c.closePath();
        c.setLineDash(z.dash || z.ring ? [3, 4.4] : []); c.lineDashOffset = -t / 70; c.shadowColor = 'rgba(40,24,70,.35)'; c.shadowBlur = 3;
        c.strokeStyle = 'rgba(255,252,250,' + (0.85 * a) + ')'; c.lineWidth = z.thin ? 0.95 : 1.3; c.stroke(); c.setLineDash([]); }
      if (z.dotsLine) { const dl = persp({ id: z.id, side: z.side }, z.dotsLine, P, fac).poly; c.shadowColor = 'rgba(255,250,245,.9)'; c.shadowBlur = 6; dl.forEach(p => { c.fillStyle = 'rgba(255,253,250,' + (0.92 * a) + ')'; c.beginPath(); c.arc(p[0], p[1], 1.9, 0, 7); c.fill(); }); }
      c.shadowBlur = 0;
      (z.flow || []).forEach(([p0, p1], fi) => { const s = ((t / 2200) + fi * 0.27) % 1, e = ease(s), p = lerp(p0, p1, e), q = lerp(p0, p1, Math.max(0, e - 0.08)), al = Math.sin(Math.PI * s) * a * 0.85;
        const an = Math.atan2(p[1] - q[1], p[0] - q[0]), L = 7; c.strokeStyle = 'rgba(255,252,250,' + al + ')'; c.lineWidth = 1.5;
        c.beginPath(); c.moveTo(p[0] - Math.cos(an - 0.6) * L, p[1] - Math.sin(an - 0.6) * L); c.lineTo(p[0], p[1]); c.lineTo(p[0] - Math.cos(an + 0.6) * L, p[1] - Math.sin(an + 0.6) * L); c.stroke();
        const p2 = lerp(p0, p1, Math.max(0, e - 0.13)); c.globalAlpha = 0.5; c.beginPath(); c.moveTo(p2[0] - Math.cos(an - 0.6) * L * 0.8, p2[1] - Math.sin(an - 0.6) * L * 0.8); c.lineTo(p2[0], p2[1]); c.lineTo(p2[0] - Math.cos(an + 0.6) * L * 0.8, p2[1] - Math.sin(an + 0.6) * L * 0.8); c.stroke(); c.globalAlpha = 1; });
      c.restore();
    }
    return { idx: ALL, zoom: ZOOM[name] || null, update(P) {
      const t = performance.now(); if (t0 == null) t0 = t;
      c.setTransform(1, 0, 0, 1, 0, 0); c.clearRect(0, 0, cv.width, cv.height);
      const el = reduce ? 99 : (t - t0) / 1000;
      const zs = buildZones(key, P, {});
      const nz = P(4), hR = dist(nz, P(234)), hL = dist(nz, P(454)), av = (hR + hL) / 2 || 1, fac = {}, fw = dist(P(234), P(454));
      [['R', hR], ['L', hL]].forEach(([k2, h]) => { const v = Math.max(0.25, Math.min(1.2, h / av)); FS[k2] = FS[k2] == null ? v : FS[k2] + (v - FS[k2]) * 0.25; fac[k2] = FS[k2]; });
      // aparición: 1 s; intensidad alta 3 s; atenuación 1,6 s hasta 55 %
      const A = el < 3.2 ? 1 : Math.max(0.88, 1 - (el - 3.2) / 1.2 * 0.12);
      for (const z of zs) { if (z.hidden) continue;
        const pp = persp(z, z.poly, P, fac); if (pp.a <= 0.01) continue;
        const a = A * pp.a, ph = reduce ? 1 : ease(el / 1.1), cc = cen(pp.poly), poly = scl(pp.poly, cc, 0.55 + 0.45 * ph);
        if (z.brow) { c.save(); c.setTransform(d, 0, 0, d, 0, 0); drawBrow(z, a, t, el); c.restore(); continue; }
        if (!z.contour) {
          const bl = fw * T.b * (z.soft ? 1.6 : 0.8);
          lc.setTransform(1, 0, 0, 1, 0, 0); lc.globalCompositeOperation = 'source-over'; lc.clearRect(0, 0, lay.width, lay.height);
          const bb = blob(poly, T.c, 1, bl, null);
          lc.setTransform(d, 0, 0, d, 0, 0); lc.globalCompositeOperation = 'destination-out'; lc.globalAlpha = T.pearl ? 0.25 : 0.35; lc.fillStyle = pat; lc.fillRect(bb[0], bb[1], bb[2] - bb[0], bb[3] - bb[1]); lc.globalAlpha = 1; lc.globalCompositeOperation = 'source-over';
          c.setTransform(1, 0, 0, 1, 0, 0); c.globalAlpha = Math.min(0.85, T.a) * (z.soft ? 0.62 : 1) * a * ph; c.drawImage(lay, 0, 0); c.globalAlpha = 1;
        }
        c.save(); c.setTransform(d, 0, 0, d, 0, 0);
        c.beginPath(); poly.forEach((p, i) => i ? c.lineTo(p[0], p[1]) : c.moveTo(p[0], p[1])); c.closePath();
        c.setLineDash([3, 5]); c.lineDashOffset = -t / 60; c.strokeStyle = 'rgba(236,226,255,' + (0.42 * a) + ')'; c.lineWidth = 1.1; c.stroke(); c.setLineDash([]);
        (z.dots || []).forEach((p, i) => { const s = (t / 900 + i * 0.2) % 1; c.strokeStyle = 'rgba(240,232,255,' + ((1 - s) * 0.5 * a) + ')'; c.lineWidth = 1; c.beginPath(); c.arc(p[0], p[1], 3 + s * 10, 0, 7); c.stroke(); c.fillStyle = 'rgba(240,232,255,' + (0.55 * a) + ')'; c.beginPath(); c.arc(p[0], p[1], 2, 0, 7); c.fill(); });
        if (el > 0.8) (z.flow || []).forEach(([p0, p1], fi) => { for (let k = 0; k < 3; k++) { const s = ((t / 1500) + k / 3 + fi * 0.13) % 1, e = ease(s), p = lerp(p0, p1, e), q = lerp(p0, p1, Math.max(0, e - 0.14)), al = Math.sin(Math.PI * s) * a * 0.55; c.strokeStyle = 'rgba(255,250,255,' + (al * 0.7) + ')'; c.lineWidth = 2; c.lineCap = 'round'; c.beginPath(); c.moveTo(q[0], q[1]); c.lineTo(p[0], p[1]); c.stroke(); c.fillStyle = 'rgba(255,250,255,' + al + ')'; c.beginPath(); c.arc(p[0], p[1], 2.6, 0, 7); c.fill(); } });
        c.restore();
      }
    } };
  }
  return { build, res, ZOOM, has: n => !!KEY[n] };
})();

window.DX = { AR, GUIDE, ANALYSIS, A, FACE, MK, BR, PRODS, BTOOLS, COLL_CATS, KIND, LOOKS, FEATURED, OUT_LOOKS, BROW_NAMES, BROW_STYLES, BROW_TONES, ROUTINE, VB, ctr, faceSvg, mirrorSvg, statuses, icon, fileToData, dominantColors, toHex, rankLooks };
})();
