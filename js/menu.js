document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("menuContainer");

    fetch("data/menu.json")
        .then(response => response.json())
        .then(data => {
            const platos = data.platos;

            platos.forEach(plato => {

                const card = `
                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="card shadow-sm h-100">

                            <img src="${plato.imagen}" class="card-img-top" alt="${plato.nombre}">

                            <div class="card-body">
                                <h5 class="card-title">${plato.nombre}</h5>
                                <p class="card-text">${plato.descripcion}</p>

                                <span class="badge bg-danger mb-2">${plato.categoria}</span>

                                <p class="fw-bold fs-5">₡${plato.precio.toLocaleString()}</p>
                            </div>

                        </div>
                    </div>
                `;

                container.innerHTML += card;
            });
        })
        .catch(error => {
            container.innerHTML = `<p class="text-danger">Error al cargar el menú.</p>`;
            console.error(error);
        });

});
