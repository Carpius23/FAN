document.addEventListener("DOMContentLoaded", () => {

    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));

    fetch("../data/blogs/blogs.json")
        .then(response => response.json())
        .then(data => {

            const post = data.articulos.find(p => p.id === id);
            if (!post) return;

            const contenedor = document.getElementById("post-container");

            // ===== POST PRINCIPAL =====

            let contenidoHTML = "";

            post.contenido.forEach(seccion => {
                contenidoHTML += `
                    <h4 class="mt-4">${seccion.subtitulo}</h4>
                    <p>${seccion.texto}</p>
                `;
            });

            contenedor.innerHTML = `
                <article class="post-full">

                    <img src="${post.imagen}" class="img-fluid rounded mb-4">

                    <span class="badge-info">${post.categoria}</span>

                    <h1 class="mt-2">${post.titulo}</h1>

                    <p class="text-muted">
                        Por ${post.autor} • ${post.fecha}
                    </p>

                    <p class="lead">${post.resumen}</p>

                    ${contenidoHTML}

                </article>
            `;

            // ===== IMPORTANTES =====

            const importantesContainer =
                document.getElementById("importantes-container");

            const importantes = data.articulos
                .filter(p => p.destacado && p.id !== id)
                .slice(0, 3);

            importantesContainer.innerHTML = importantes.map(p => `
                <a href="post.html?id=${p.id}" class="text-decoration-none">
                    <div class="card mb-3">
                        <img src="${p.imagen}" class="card-img-top">
                        <div class="card-body">
                            <h6 class="card-title">${p.titulo}</h6>
                        </div>
                    </div>
                </a>
            `).join("");

            // ===== RECIENTES =====

            const recientesContainer =
                document.getElementById("recientes-container");

            const recientes = data.articulos
                .filter(p => p.id !== id)
                .slice(-3)
                .reverse();

            recientesContainer.innerHTML = recientes.map(p => `
                <a href="post.html?id=${p.id}" class="text-decoration-none">
                    <div class="card mb-3">
                        <img src="${p.imagen}" class="card-img-top">
                        <div class="card-body">
                            <h6 class="card-title">${p.titulo}</h6>
                        </div>
                    </div>
                </a>
            `).join("");

        });
});
