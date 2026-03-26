fetch('../data/docs.json')
    .then(res => res.json())
    .then(data => {

        const contenedor = document.getElementById('listaDocumentos');

        Object.keys(data).forEach(key => {

            const doc = data[key];

            const li = document.createElement('li');
            li.classList.add('mb-3');

            li.innerHTML = `
                <strong>${doc.titulo}</strong><br>
                ${doc.contenido}
                <div class="mt-2">
                    <a href="../${doc.pdf}" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       class="btn btn-conoce btn-sm">
                       Ver documento
                    </a>
                </div>
            `;

            contenedor.appendChild(li);
        });

    })
    .catch(error => {
        console.error("Error cargando documentos:", error);
    });