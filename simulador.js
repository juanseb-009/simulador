function calcular() {

    let ingresosTexto = document.getElementById("txtIngresos").value;
    let egresosTexto = document.getElementById("txtEgresos").value;
    let montoTexto = document.getElementById("txtMonto").value;
    let plazoTexto = document.getElementById("txtPlazo").value;
    let tasaTexto = document.getElementById("txtTasaInteres").value;


    /* LIMPIAR MENSAJES */

    document.getElementById("errorIngresos").textContent = "";
    document.getElementById("errorEgresos").textContent = "";
    document.getElementById("errorMonto").textContent = "";
    document.getElementById("errorPlazo").textContent = "";
    document.getElementById("errorTasaInteres").textContent = "";


    let formularioValido = true;


    /* CAMPOS OBLIGATORIOS */

    if (!validarCampoObligatorio(ingresosTexto)) {

        document.getElementById("errorIngresos").textContent =
            "Este campo es obligatorio.";

        formularioValido = false;
    }


    if (!validarCampoObligatorio(egresosTexto)) {

        document.getElementById("errorEgresos").textContent =
            "Este campo es obligatorio.";

        formularioValido = false;
    }


    if (!validarCampoObligatorio(montoTexto)) {

        document.getElementById("errorMonto").textContent =
            "Este campo es obligatorio.";

        formularioValido = false;
    }


    if (!validarCampoObligatorio(plazoTexto)) {

        document.getElementById("errorPlazo").textContent =
            "Este campo es obligatorio.";

        formularioValido = false;
    }


    if (!validarCampoObligatorio(tasaTexto)) {

        document.getElementById("errorTasaInteres").textContent =
            "Este campo es obligatorio.";

        formularioValido = false;
    }


    if (!formularioValido) {
        return;
    }


    /* VALIDAR QUE SEAN NÚMEROS */

    if (!validarNumero(ingresosTexto)) {

        document.getElementById("errorIngresos").textContent =
            "Ingrese un valor numérico válido.";

        formularioValido = false;
    }


    if (!validarNumero(egresosTexto)) {

        document.getElementById("errorEgresos").textContent =
            "Ingrese un valor numérico válido.";

        formularioValido = false;
    }


    if (!validarNumero(montoTexto)) {

        document.getElementById("errorMonto").textContent =
            "Ingrese un valor numérico válido.";

        formularioValido = false;
    }


    if (!validarNumero(plazoTexto)) {

        document.getElementById("errorPlazo").textContent =
            "Ingrese un valor numérico válido.";

        formularioValido = false;
    }


    if (!validarNumero(tasaTexto)) {

        document.getElementById("errorTasaInteres").textContent =
            "Ingrese un valor numérico válido.";

        formularioValido = false;
    }


    if (!formularioValido) {
        return;
    }


    /* VALIDAR INGRESOS */

    if (!validarRango(ingresosTexto, 1, 100000)) {

        document.getElementById("errorIngresos").textContent =
            "Los ingresos deben estar entre 1 y 100000.";

        formularioValido = false;
    }


    /* VALIDAR EGRESOS */

    if (!validarRango(egresosTexto, 1, 100000)) {

        document.getElementById("errorEgresos").textContent =
            "Los egresos deben estar entre 1 y 100000.";

        formularioValido = false;
    }


    /* VALIDAR MONTO */

    if (!validarRango(montoTexto, 500, 50000)) {

        document.getElementById("errorMonto").textContent =
            "El monto debe estar entre 500 y 50000.";

        formularioValido = false;
    }


    /* VALIDAR PLAZO */

    if (!validarRango(plazoTexto, 1, 10)) {

        document.getElementById("errorPlazo").textContent =
            "El plazo debe estar entre 1 y 10 años.";

        formularioValido = false;
    }


    /* VALIDAR TASA */

    if (!validarRango(tasaTexto, 1, 30)) {

        document.getElementById("errorTasaInteres").textContent =
            "La tasa debe estar entre 1% y 30%.";

        formularioValido = false;
    }


    /* DETENER SI EXISTE UN ERROR */

    if (!formularioValido) {
        return;
    }


    /* CONVERTIR VALORES */

    let ingresos = parseFloat(ingresosTexto);
    let egresos = parseFloat(egresosTexto);

    let monto = parseInt(montoTexto);
    let plazoAnios = parseInt(plazoTexto);
    let tasa = parseInt(tasaTexto);


    /* CALCULAR DISPONIBLE */

    let disponible = calcularDisponible(
        ingresos,
        egresos
    );

    document.getElementById("spnDisponible").textContent =
        disponible.toFixed(2);


    /* CALCULAR CAPACIDAD */

    let capacidadPago = calcularCapacidadPago(
        disponible
    );

    document.getElementById("spnCapacidadPago").textContent =
        capacidadPago.toFixed(2);


    /* CALCULAR INTERÉS */

    let interes = calcularInteresSimple(
        monto,
        tasa,
        plazoAnios
    );

    document.getElementById("spnInteresPagar").textContent =
        interes.toFixed(2);


    /* CALCULAR TOTAL */

    let total = calcularTotalPagar(
        monto,
        interes
    );

    document.getElementById("spnTotalPrestamo").textContent =
        total.toFixed(2);


    /* CALCULAR CUOTA */

    let cuotaMensual = calcularCuotaMensual(
        total,
        plazoAnios
    );

    document.getElementById("spnCuotaMensual").textContent =
        cuotaMensual.toFixed(2);


    /* APROBAR O RECHAZAR */

    let creditoAprobado = aprobarCredito(
        capacidadPago,
        cuotaMensual
    );


    if (creditoAprobado) {

        document.getElementById("spnEstadoCredito").textContent =
            "CREDITO APROBADO";

    } else {

        document.getElementById("spnEstadoCredito").textContent =
            "CREDITO RECHAZADO";
    }
}


document
    .getElementById("btnCalcularCredito")
    .addEventListener("click", calcular);