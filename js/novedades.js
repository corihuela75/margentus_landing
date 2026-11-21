/* ============================================================
   Margentus · novedades (changelog público)
   Fuente: data/novedades.js del repo margentus-demo (20/11/2026).
   Para sumar una versión: agregar un objeto AL PRINCIPIO, con su
   fecha real y solo lo que ya funciona en la demo.
   ============================================================ */
window.MG_NOVEDADES = [
  { v: '2.0', date: '2026-11-07', title: 'Facturas con foto y más análisis', tag: 'Versión actual',
    items: ['Cargá una factura de compra con una foto o un PDF: Margentus lee proveedor, fecha, importes y renglones, y vos revisás y confirmás.',
            'Lee el código QR de ARCA de las facturas electrónicas.',
            'Preparaciones: salsas, masas o caldos como sub-recetas, con su propio costo.',
            'Prime Cost del mes (mercadería + mano de obra) y margen por canal de venta, incluido delivery.',
            'Remitos, notas de crédito y mercadería pendiente de factura, sin duplicar compras.',
            'Recuento de inventario por ubicación e invitación al equipo por mail.'] },
  { v: '1.0', date: '2026-11-02', title: 'MVP completo', tag: '',
    items: ['Existencias hoy: qué debería haber de cada insumo, su valor y para cuántos días alcanza.',
            'Clasificación ABC de insumos e insights de inventario (stock negativo, sobrestock, sin movimiento).',
            'Costo Real «oficial» entre dos recuentos aprobados.',
            'Dashboard con «Lo primero que tenés que mirar» y «Dónde mirar».',
            'Centro de ayuda con preguntas frecuentes, diccionario y cómo calcula cada número.'] },
  { v: '0.9', date: '2026-10-24', title: 'Control del mes y reportes', tag: '',
    items: ['Calendario del mes día por día: qué se cargó, qué falta y qué está repetido.',
            'Bloqueo de comprobantes repetidos.',
            'Reportes para leer, imprimir o guardar como PDF.'] },
  { v: '0.8', date: '2026-10-23', title: 'Inventario mensual', tag: '',
    items: ['Recuento mensual; el Encargado cuenta y el Dueño aprueba las diferencias.',
            'Asistente de primeros pasos y ayudas en pantalla.'] },
  { v: '0.7', date: '2026-10-21', title: 'Nivel de detalle', tag: '',
    items: ['Nivel de detalle de 0 a 5 estrellas y Conocimiento del mes.',
            'IVA en ventas y canales de venta.'] },
  { v: '0.6', date: '2026-10-20', title: 'Estructura económica', tag: '',
    items: ['Costos fijos y variables, punto de equilibrio y simulador «¿Y si…?».',
            'Unidades de cocina con equivalencias propias.'] },
  { v: '0.5', date: '2026-10-18', title: 'Usuarios y roles', tag: '',
    items: ['Ingreso con usuario y roles Dueño y Encargado.', 'Productos elaborados y de reventa.'] },
  { v: '0.4', date: '2026-10-18', title: 'Diseño nuevo', tag: '',
    items: ['Interfaz en modo claro y oscuro, insights y gráficos de 12 meses.'] },
  { v: '0.3', date: '2026-10-15', title: 'Compras contra recetas', tag: '',
    items: ['Consistencia entre lo comprado y lo que indican las recetas, y panel «Cómo calcula».'] },
  { v: '0.2', date: '2026-10-15', title: 'El mes como unidad', tag: '',
    items: ['Cierre mensual con foto que no cambia, Costo Real e importación desde Excel.'] },
  { v: '0.1', date: '2026-10-12', title: 'Primera versión con datos reales', tag: '',
    items: ['Ingredientes, proveedores, compras, recetas, ventas y Food Cost.'] }
];

(function () {
  var mount = document.querySelector('[data-mg-novedades]');
  if (!mount) return;
  var M = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  mount.innerHTML = window.MG_NOVEDADES.map(function (e, i) {
    var p = e.date.split('-');
    var tag = e.tag ? ' <span class="mg-log-tag">' + esc(e.tag) + '</span>' : '';
    return '<li class="mg-log-item' + (i === 0 ? ' is-latest' : '') + '">' +
      '<div class="mg-log-meta"><span class="mg-log-v">v' + esc(e.v) + '</span><time datetime="' + esc(e.date) + '">' + (+p[2]) + ' ' + M[+p[1] - 1] + ' ' + p[0] + '</time></div>' +
      '<div class="mg-log-body"><h2>' + esc(e.title) + tag + '</h2><ul>' +
      e.items.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul></div></li>';
  }).join('');
})();
