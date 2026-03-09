document.addEventListener("DOMContentLoaded", () => {

    fetch("../data/blogs/blogs.json")
        .then(response => response.json())
        .then(data => {

            const contenedorCards = document.getElementById("contenedor-cards");
            const contenedorImportantes = document.getElementById("importantes");
            const contenedorRecientes = document.getElementById("recientes");

            data.articulos.forEach(post => {

                const card = `
<div class="col-md-6">
  <a href="post.html?id=${post.id}" class="text-decoration-none text-dark">
    <div class="card card-custom">
      <img src="${post.imagen}" class="card-img-top">
      <div class="card-body">
        <span class="badge-info">${post.categoria}</span>
        <h5>${post.titulo}</h5>
        <p class="small-text">By ${post.autor}</p>
        <p>${post.resumen}</p>
        <small>${post.fecha}</small>
      </div>
    </div>
  </a>
</div>
`;

                contenedorCards.innerHTML += card;
            });

            const importantes = data.articulos.filter(p => p.destacado);

            importantes.forEach(post => {

                const item = `
<a href="post.html?id=${post.id}" class="list-item-link">
  <div class="list-item">
      <img src="${post.imagen}">
      <div>
          <div>${post.titulo}</div>
          <small>${post.fecha}</small>
      </div>
  </div>
</a>
`;
                contenedorImportantes.innerHTML += item;
            });

            const recientes = data.articulos.slice(0, 3);

            recientes.forEach(post => {

                const item = `
<a href="post.html?id=${post.id}" class="list-item-link">
  <div class="list-item">
      <img src="${post.imagen}">
      <div>
          <div>${post.titulo}</div>
          <small>${post.fecha}</small>
      </div>
  </div>
</a>
`;

                contenedorRecientes.innerHTML += item;
            });

        })
        .catch(error => console.error("Error cargando artículos:", error));

});
