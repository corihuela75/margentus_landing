/* ============================================================
   Margentus · convocatorias (curadas)
   Fuente: Base de datos Aceleradoras (Notion), revisada 20/11/2026.
   Solo se publican logros confirmados y procesos en curso.
   Tipos de "kind": premio · seleccionado · encurso.
   Para actualizar: editar SOLO este archivo.
   ============================================================ */
window.MG_CONVOCATORIAS = {
  logros: [
    { kind: 'premio', mark: '3.º', name: 'IEBS Concurso Emprendedores 2026', where: 'IEBS Business School · España',
      result: '3.º puesto en la categoría IA & Big Data', date: 'Nov 2026',
      desc: 'Reconocimiento con beca del 70 % en IEBS Business School.' },
    { kind: 'seleccionado', mark: '✓', name: 'StartUP+IT', where: 'Polo IT Buenos Aires · Universidad de Palermo',
      result: 'Seleccionado', date: '2026',
      desc: 'Programa de incubación para proyectos tecnológicos en etapa temprana.' }
  ],
  encurso: [
    { name: 'Incubadora de Empresas UNCUYO', result: 'Preseleccionado · ideas-proyecto 2026', next: 'Selección final: diciembre' },
    { name: 'Premio Innovación French Tech Buenos Aires 2026', result: 'Postulación realizada · en evaluación', next: 'Finalistas: 25/11' }
  ],
  recorrido: 'En 2026 Margentus se presentó en más de 20 convocatorias de Argentina, España, México, Perú y Estados Unidos, y llegó a instancias finales de evaluación en Emprelatam ECL (≈1.100 postulaciones) y UdeSA Startup Competition.'
};

(function () {
  var data = window.MG_CONVOCATORIAS;
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  document.querySelectorAll('[data-mg-convocatorias]').forEach(function (mount) {
    var logros = data.logros.map(function (e) {
      return '<li class="mg-win mg-win--' + e.kind + '">' +
        '<span class="mg-win-mark" aria-hidden="true">' + esc(e.mark) + '</span>' +
        '<div class="mg-win-body"><p class="mg-win-result">' + esc(e.result) + '</p>' +
        '<h3>' + esc(e.name) + '</h3><p class="mg-win-where">' + esc(e.where) + ' · ' + esc(e.date) + '</p>' +
        '<p class="mg-win-desc">' + esc(e.desc) + '</p></div></li>';
    }).join('');
    var curso = data.encurso.map(function (e) {
      return '<li><span class="mg-live-dot" aria-hidden="true"></span><div><strong>' + esc(e.name) + '</strong>' +
        '<span>' + esc(e.result) + '</span></div><em>' + esc(e.next) + '</em></li>';
    }).join('');
    mount.innerHTML =
      '<ul class="mg-wins">' + logros + '</ul>' +
      '<div class="mg-live"><p class="mg-live-title">En curso</p><ul>' + curso + '</ul></div>' +
      '<p class="mg-eco-trail">' + esc(data.recorrido) + '</p>';
  });
})();
