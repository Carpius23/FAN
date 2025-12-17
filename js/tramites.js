let tramitesData = {};

fetch('/data/tramites.json')
  .then(res => res.json())
  .then(data => {
    tramitesData = data;
  });

function abrirTramite(tipo) {
  const tramite = tramitesData[tipo];
  if (!tramite) return;

  document.getElementById('tramiteModalTitle').innerText = tramite.titulo;
  document.getElementById('tramiteModalContent').innerHTML = tramite.contenido;

  const modal = new bootstrap.Modal(document.getElementById('tramiteModal'));
  modal.show();
}

// 👉 CONECTAR LAS CARDS
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.open-modal').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const tipo = btn.getAttribute('data-id');
      abrirTramite(tipo);
    });
  });
});
