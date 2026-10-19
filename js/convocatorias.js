/* ============================================================
   Margentus · convocatorias canónicas
   Fuente única de verdad para index.html (resumen) y
   proyecto.html (detalle). Para actualizar un programa:
   cambiar SOLO este archivo (nombre, fecha, estado, detalle
   y, si hay presentación pública verificada, link).
   Estados permitidos:
   seleccionado · preseleccionado · postulación realizada ·
   en evaluación. No usar estados no confirmados oficialmente.
   ============================================================ */

window.MG_CONVOCATORIAS = [
  {
    name: 'StartUP+IT',
    type: 'Incubadora tecnológica',
    org: 'Polo IT Buenos Aires · Universidad de Palermo',
    date: { d: '31', m: 'JUL' },
    status: { cls: 'is-selected', label: 'Seleccionado' },
    desc: 'Programa de incubación para proyectos tecnológicos y startups en etapa temprana. Trabaja sobre validación, modelo de negocio, clientes, crecimiento y preparación para la siguiente etapa.'
  },
  {
    name: 'Emprelatam ECL – Exploración 2026',
    type: 'Aceleradora regional',
    org: '',
    date: { d: '21', m: 'AGO' },
    status: { cls: 'is-preselected', label: 'Preseleccionado' },
    desc: 'Programa regional de aceleración para emprendimientos latinoamericanos. Margentus avanzó a la instancia de entrevistas finales.'
  },
  {
    name: 'Cofinanciamiento Semilla Atlantis 2026',
    type: 'Cofinanciamiento semilla',
    org: 'Centro de Innovación Atlantis · Universidad Nacional de Mar del Plata',
    date: { d: '31', m: 'AGO' },
    status: { cls: 'is-evaluating', label: 'Postulación realizada · en evaluación' },
    desc: 'Convocatoria de cofinanciamiento para proyectos emprendedores en etapas iniciales, acompañada por mentorías y asistencia técnica. La convocatoria 2026 contempla hasta ocho proyectos seleccionados, con un esquema de cofinanciamiento 1:1 y acompañamiento durante 12 meses.'
  },
  {
    name: 'Premio Visa | LA NACIÓN a la Innovación 2026',
    type: 'Premio de innovación',
    org: '',
    date: { d: '02', m: 'SEP' },
    status: { cls: 'is-evaluating', label: 'Postulación realizada · en evaluación' },
    desc: 'Premio nacional que reconoce proyectos vinculados con innovación, transformación digital y nuevos modelos de emprendimiento. Margentus fue postulado en la categoría de emprendimientos innovadores.'
  },
  {
    name: 'IncuBAte 2026',
    type: 'Incubadora tecnológica',
    org: '',
    date: { d: '09', m: 'SEP' },
    status: { cls: 'is-applied', label: 'Postulación realizada · contacto iniciado' },
    desc: 'Programa de incubación orientado al desarrollo y validación de startups, con acompañamiento, mentorías, vinculación y presentación de avances.'
  },
  {
    name: 'StartupUNI Perú 2026',
    type: 'Incubación startup',
    org: '',
    date: { d: '25', m: 'SEP' },
    status: { cls: 'is-preselected', label: 'Preseleccionado · entrevista realizada · pendiente de devolución' },
    desc: 'Programa de incubación para emprendimientos tecnológicos en etapa de prototipo, MVP o primeras señales de tracción, con formación, mentorías y acompañamiento. La convocatoria 2026 contempla equipos con prototipo, MVP o primeras señales de tracción y un programa intensivo de 12 semanas.'
  },
  {
    name: 'PremiosTech.la',
    type: 'Innovación tecnológica',
    org: '',
    date: { y: '2026' }, // TODO: confirmar fecha de cierre
    status: { cls: 'is-evaluating', label: 'En evaluación' },
    desc: 'Premio orientado a proyectos de innovación tecnológica. Margentus fue presentado y su postulación se encuentra en evaluación.'
  },
  {
    name: 'Premio Usina 2026',
    type: 'Innovación y emprendimiento',
    org: '',
    date: { y: '2026' }, // TODO: confirmar fecha de cierre
    status: { cls: 'is-applied', label: 'Postulación realizada' },
    desc: 'Premio de innovación y emprendimiento. Margentus realizó su postulación.'
  },
  {
    name: 'Israel Innovation Awards',
    type: 'Innovación tecnológica',
    org: '',
    date: { y: '2026' }, // TODO: confirmar fecha de cierre
    status: { cls: 'is-applied', label: 'Postulación realizada' },
    desc: 'Distinción vinculada a la innovación tecnológica. Margentus realizó su postulación.'
  }
];

(function () {
  var data = window.MG_CONVOCATORIAS || [];
  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };
  var dateHtml = function (d) {
    if (!d) return '';
    if (d.y) return '<span class="mg-eco-date">' + esc(d.y) + '</span>';
    return '<span class="mg-eco-date"><b>' + esc(d.d) + '</b>' + esc(d.m) + '</span>';
  };

  document.querySelectorAll('[data-mg-convocatorias]').forEach(function (mount) {
    var completo = mount.getAttribute('data-mg-convocatorias') === 'completo';
    mount.innerHTML = data.map(function (e) {
      var status = '<p class="mg-eco-status ' + e.status.cls + '">' + esc(e.status.label) + '</p>';
      if (completo) {
        return '<li class="mg-eco-item ' + e.status.cls + '">' +
          '<div class="mg-eco-rail" aria-hidden="true"><span class="mg-eco-dot"></span>' + dateHtml(e.date) + '</div>' +
          '<div class="mg-eco-body">' +
            '<div class="mg-eco-head"><h3>' + esc(e.name) + '</h3><span class="mg-eco-type">' + esc(e.type) + '</span></div>' +
            status +
            '<p class="mg-eco-desc">' + esc(e.desc) + '</p>' +
            (e.org ? '<p class="mg-eco-org">' + esc(e.org) + '</p>' : '') +
            (e.link ? '<a class="mg-eco-link" href="' + esc(e.link.href) + '" target="_blank" rel="noopener">' + esc(e.link.label) + '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14 21 3"/></svg></a>' : '') +
          '</div>' +
        '</li>';
      }
      return '<div class="mg-eco-card">' +
        '<div class="mg-eco-head"><h3>' + esc(e.name) + '</h3><span class="mg-eco-type">' + esc(e.org || e.type) + '</span></div>' +
        status +
      '</div>';
    }).join('');
  });
})();
