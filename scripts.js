// Alertas
function showAlert(message) {
    const alertElement = document.createElement("div");
    alertElement.className = "custom-alert";
    alertElement.innerHTML = `
        <span>${message}</span>
        <button class="close-btn">&times;</button>`;
    document.body.appendChild(alertElement);

    const audio = new Audio(
        "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-77317/zapsplat_cartoon_pop_bubble_etc_004_77427.mp3"
    );
    audio.play();

    const closeBtn = alertElement.querySelector(".close-btn");
    closeBtn.addEventListener("click", function () {
        alertElement.remove();
    });
}

document.addEventListener("DOMContentLoaded", function () {
    // Desplegable del menu responsivo
    const menuIcon = document.getElementById("menu-icon");
    const menuLinks = document.getElementById("menu-links");

    menuIcon.addEventListener("click", function () {
        menuLinks.classList.toggle("show");
    });

    // Formularios
    const form1 = document.getElementById("form1");
    const form2 = document.getElementById("form2");

    form1.addEventListener("submit", function (e) {
        e.preventDefault();
        validateForm1(e);
    });

    form2.addEventListener("submit", function (e) {
        e.preventDefault();
        validateForm2(e);
    });

    // validacion Turno con profesional
    function validateForm1(e) {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const edadInput = document.getElementById("edad").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const correo = document.getElementById("correo").value.trim();

        if (!nombre) {
            showAlert("Por favor, ingrese su nombre.");
            return;
        }
        if (edadInput === "") {
            showAlert("Por favor, ingrese su edad.");
            return;
        }
        const edad = parseInt(document.getElementById("edad").value);

        if (edad < 18) {
            showAlert("Lo lamentos, pero eres menor de edad.");
            return;
        }

        if (edad > 120) {
            showAlert("Al parecer pasaste a un plano superior.");
            return;
        }
        if (!telefono) {
            showAlert("Por favor, ingrese su número de teléfono.");
            return;
        }
        if (!correo) {
            showAlert("Por favor, ingrese su correo electrónico.");
            return;
        }
        //registro
        window.location.href = "registro.html"
    }

    //validacion Talleres y Capacitacion
    function validateForm2(e) {
        e.preventDefault();

        const nombreTaller = document
            .getElementById("nombre-taller")
            .value.trim();
        const edadInputTaller = document
            .getElementById("edad-taller")
            .value.trim();
        const telefonoTaller = document
            .getElementById("telefono-taller")
            .value.trim();
        const correoTaller = document
            .getElementById("correo-taller")
            .value.trim();
        const textareaTaller = document
            .getElementById("textarea-taller")
            .value.trim();
        const capacitacionCheckbox =
            document.getElementById("capacitacion").checked;

        const tipo = capacitacionCheckbox ? "capacitación" : "taller";
        const articulo = tipo === "taller" ? "el" : "la";

        if (!nombreTaller) {
            showAlert(`Por favor, ingrese su nombre para ${articulo} ${tipo}.`);
            return;
        }
        if (edadInputTaller === "") {
            showAlert(`Por favor, ingrese su edad para ${articulo} ${tipo}.`);
            return;
        }
        const edadTaller = parseInt(
            document.getElementById("edad-taller").value
        );

        if (edadTaller < 18) {
            showAlert(
                `Lo lamento, eres menor de edad para ${articulo} ${tipo}.`
            );
            return;
        }

        if (edadTaller > 120) {
            showAlert(
                `Al parecer pasaste a un plano superior para ${articulo} ${tipo}.`
            );
            return;
        }
        if (!telefonoTaller) {
            showAlert(
                `Por favor, ingrese su número de teléfono para ${articulo} ${tipo}.`
            );
            return;
        }
        if (!correoTaller) {
            showAlert(
                `Por favor, ingrese su correo electrónico para ${articulo} ${tipo}.`
            );
            return;
        }
        if (!textareaTaller) {
            showAlert(
                `Por favor, escriba su consulta para ${articulo} ${tipo}.`
            );
            return;
        }
        //registro
        window.location.href = "registro.html"
    }
});

function validarTextoEntrada(input, patron) {
    var texto = input.value;
    var letras = texto.split("");
    for (var x in letras) {
        var letra = letras[x];
        if (!new RegExp(patron, "i").test(letra)) {
            letras[x] = "";
        }
    }
    input.value = letras.join("");
}

var txtnombre = document.getElementById("nombre");
txtnombre.addEventListener("input", function (event) {
    validarTextoEntrada(this, "[a-zA-ZáéíóúüñÑÁÉÍÓÚÜ ]");
});

var txtnombre_taller = document.getElementById("nombre-taller");
txtnombre_taller.addEventListener("input", function (event) {
    validarTextoEntrada(this, "[a-zA-ZáéíóúüñÑÁÉÍÓÚÜ ]");
});

var txttelefono = document.getElementById("telefono");
txttelefono.addEventListener("input", function (event) {
    validarTextoEntrada(this, "[0-9+ ]+$");
});

var txttelefono_taller = document.getElementById("telefono-taller");
txttelefono_taller.addEventListener("input", function (event) {
    validarTextoEntrada(this, "[0-9+ ]+$");
});

/*
 function soloNumeros(input) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!input.charCode ? input.which : input.charCode);
    if (!regex.test(key)) {
        input.preventDefault();
      return false;
    }
  }
*/
