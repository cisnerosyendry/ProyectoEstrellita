 //Calcular edad automáticamente
        document.getElementById("fechaNacimiento").addEventListener("change", function () {
            const fechaNac = new Date(this.value);
            const hoy = new Date();

            let edad = hoy.getFullYear() - fechaNac.getFullYear();
            const mes = hoy.getMonth() - fechaNac.getMonth();

            if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
                edad--;
            }

            document.getElementById("edad").value = edad;
        });

        // Mostrar valor del ingreso
        function mostrarIngreso(valor) {
            document.getElementById("valorIngreso").textContent = valor;
        }

        // Validación final del formulario
        document.getElementById("contactForm").addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Formulario enviado correctamente ✔");
            this.reset();
            document.getElementById("valorIngreso").textContent = "0";
        });