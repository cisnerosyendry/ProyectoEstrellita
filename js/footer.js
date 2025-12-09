class MiFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `    
            <div class="footer-line"></div>

            <div class="footer-wrapper">

                <div class="footer-columns">

                    <section class="footer-logo">
                        <h2>
                            <a href="index.html" style="min-width: 7rem;">
                                <img src="img/logo.png" alt="Logo Restaurante" width="110">
                            </a>
                        </h2>
                    </section>

                    <section>
                        <h3>Secciones</h3>
                        <ul>
                            <li><a href="menu.html">Menú</a></li>
                            <li><a href="galeria.html">Galería</a></li>
                            <li><a href="historia.html">Historia</a></li>
                        </ul>
                    </section>

                    <section>
                        <h3>Emprendimiento</h3>
                        <ul>
                            <li><a href="acerca.html">Acerca del sitio</a></li>
                            <li><a href="autor.html">Autor</a></li>
                            <li><a href="contacto.html">Contacto</a></li>
                        </ul>
                    </section>

                </div>

                <div class="footer-bottom">
                    <div class="social-links">
                        <ul>
                            <li>
                                <a href="https://wa.me/50686687215" target="_blank" aria-label="WhatsApp">
                                    <img src="img/whatsApp.avif" alt="WhatsApp" width="40">
                                </a>
                            </li>
                            
                        </ul>
                    </div>

                    <small>© Estrellita y su cuchara. <span id="year">2025</span> — Todos los derechos reservados</small>
                </div>

            </div>
        `;
    }
}

customElements.define('mi-footer', MiFooter);
