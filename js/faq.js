fetch('data/faq.json')
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById('innerAccordion');

        data.forEach((item, index) => {
            const id = `faq-${index}`;

            container.innerHTML += `
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#${id}">
                            ${item.pregunta}
                        </button>
                    </h2>

                    <div id="${id}" class="accordion-collapse collapse"
                        data-bs-parent="#innerAccordion">
                        <div class="accordion-body">
                            ${item.respuesta}
                        </div>
                    </div>
                </div>
            `;
        });
    })
    .catch(err => console.error('Error cargando FAQ:', err));
