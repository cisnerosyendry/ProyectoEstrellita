class MiHeader extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `    
        <nav class="navbar navbar-expand-lg navbar-dark" style="background-color:#8B0000;">
            <div class="container">
                
                <a class="navbar-brand" href="index.html">
                    <img src="img/logo.png" alt="Logo" width="70" height="70" class="d-inline-block align-text-top">
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu"
                    aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="menu">
                    <ul class="navbar-nav ms-auto">

                        <li class="nav-item">
                            <a class="nav-link active" href="index.html">Inicio</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="menu.html">Menú</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="historia.html">Historia</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="galeria.html">Galería</a>
                        </li>

                        <li class="nav-item">
                             <a class="nav-link" href="ubicacion.html">Ubicación</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="acerca.html">Acerca del sitio</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="contacto.html">Contacto</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="autor.html">Autor</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
        `;
    }
}

customElements.define('mi-header', MiHeader);
