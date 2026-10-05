function calcular() {

    let ingresosTexto = document.getElementById("txtIngresos").value;
    let egresosTexto = document.getElementById("txtEgresos").value;
    let montoTexto = document.getElementById("txtMonto").value;
    let plazoTexto = document.getElementById("txtPlazo").value;
    let tasaTexto = document.getElementById("txtTasaInteres").value;


    /* LIMPIAR MENSAJES ANTERIORES */

    document.getElementById("errorIngresos").textContent = "";
    document.getElementById("errorEgresos").textContent = "";
    document.getElementById("errorMonto").textContent = "";
    document.getElementById("errorPlazo").textContent = "";
    document.getElementById("errorTasaInteres").textContent = "";


    let formularioValido = true;


    /* VALIDAR CAMPOS OBLIGATORIOS */

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


    /* DETENER SI HAY CAMPOS VACÍOS */

    if (!formularioValido) {
        return;
    }


    /* VALIDAR INGRESOS */

    if (!validarNumero(ingresosTexto)) {

        document.getElementById("errorIngresos").textContent =
            "Ingrese un valor numérico válido.";

        formularioValido = false;
    }


    /* VALIDAR EGRESOS */

    if (!validarNumero(egresosTexto)) {

        document.getElementById("errorEgresos").textContent =
            "Ingrese un valor numérico válido.";

        formularioValido = false;
    }


    /* VALIDAR MONTO */

    if (!validarNumero(montoTexto)) {

        document.getElementById("errorMonto").textContent =
            "Ingrese un valor numérico válido.";

        formularioValido = false;
    }


    /* VALIDAR PLAZO */

    if (!validarNumero(plazoTexto)) {

        document.getElementById("errorPlazo").textContent =
            "Ingrese un valor numérico válido.";

        formularioValido = false;
    }


    /* VALIDAR TASA */

    if (!validarNumero(tasaTexto)) {

        document.getElementById("errorTasaInteres").textContent =
            "Ingrese un valor numérico válido.";

        formularioValido = false;
    }


    /* DETENER SI HAY DATOS NO NUMÉRICOS */

    if (!formularioValido) {
        return;
    }


    /* CONVERTIR INGRESOS Y EGRESOS */

    let ingresos = parseFloat(ingresosTexto);
    let egresos = parseFloat(egresosTexto);


    /* CALCULAR DISPONIBLE */

    let disponible = calcularDisponible(
        ingresos,
        egresos
    );

    document.getElementById("spnDisponible").textContent =
        disponible.toFixed(2);


    /* CALCULAR CAPACIDAD DE PAGO */

    let capacidadPago = calcularCapacidadPago(
        disponible
    );

    document.getElementById("spnCapacidadPago").textContent =
        capacidadPago.toFixed(2);


    /* CONVERTIR DATOS DEL CRÉDITO */

    let monto = parseInt(montoTexto);
    let plazoAnios = parseInt(plazoTexto);
    let tasa = parseInt(tasaTexto);


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