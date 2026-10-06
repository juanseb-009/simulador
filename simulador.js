/* =========================================
   LIMPIAR RESULTADOS
========================================= */

function limpiarResultados() {

    document.getElementById("spnDisponible").textContent = "";

    document.getElementById("spnCapacidadPago").textContent = "";

    document.getElementById("spnInteresPagar").textContent = "";

    document.getElementById("spnTotalPrestamo").textContent = "";

    document.getElementById("spnCuotaMensual").textContent = "";

    document.getElementById("spnEstadoCredito").textContent = "";
}


/* =========================================
   LIMPIAR MENSAJES DE ERROR
========================================= */

function limpiarErrores() {

    document.getElementById("errorIngresos").textContent = "";

    document.getElementById("errorEgresos").textContent = "";

    document.getElementById("errorMonto").textContent = "";

    document.getElementById("errorPlazo").textContent = "";

    document.getElementById("errorTasaInteres").textContent = "";
}


/* =========================================
   VALIDAR INGRESOS - ONBLUR
========================================= */

function validarIngresos() {

    let valor =
        document.getElementById("txtIngresos").value;

    let error =
        document.getElementById("errorIngresos");

    error.textContent = "";


    if (!validarCampoObligatorio(valor)) {

        error.textContent =
            "Este campo es obligatorio.";

        return false;
    }


    if (!validarNumero(valor)) {

        error.textContent =
            "Ingrese un valor numérico válido.";

        return false;
    }


    if (!validarRango(valor, 1, 100000)) {

        error.textContent =
            "Los ingresos deben estar entre 1 y 100000.";

        return false;
    }


    return true;
}


/* =========================================
   VALIDAR EGRESOS - ONBLUR
========================================= */

function validarEgresos() {

    let valor =
        document.getElementById("txtEgresos").value;

    let error =
        document.getElementById("errorEgresos");

    error.textContent = "";


    if (!validarCampoObligatorio(valor)) {

        error.textContent =
            "Este campo es obligatorio.";

        return false;
    }


    if (!validarNumero(valor)) {

        error.textContent =
            "Ingrese un valor numérico válido.";

        return false;
    }


    if (!validarRango(valor, 1, 100000)) {

        error.textContent =
            "Los egresos deben estar entre 1 y 100000.";

        return false;
    }


    return true;
}


/* =========================================
   VALIDAR MONTO - ONBLUR
========================================= */

function validarMonto() {

    let valor =
        document.getElementById("txtMonto").value;

    let error =
        document.getElementById("errorMonto");

    error.textContent = "";


    if (!validarCampoObligatorio(valor)) {

        error.textContent =
            "Este campo es obligatorio.";

        return false;
    }


    if (!validarNumero(valor)) {

        error.textContent =
            "Ingrese un valor numérico válido.";

        return false;
    }


    if (!validarRango(valor, 500, 50000)) {

        error.textContent =
            "El monto debe estar entre 500 y 50000.";

        return false;
    }


    if (!validarEntero(valor)) {

        error.textContent =
            "El monto debe ser un número entero.";

        return false;
    }


    return true;
}


/* =========================================
   VALIDAR PLAZO - ONBLUR
========================================= */

function validarPlazo() {

    let valor =
        document.getElementById("txtPlazo").value;

    let error =
        document.getElementById("errorPlazo");

    error.textContent = "";


    if (!validarCampoObligatorio(valor)) {

        error.textContent =
            "Este campo es obligatorio.";

        return false;
    }


    if (!validarNumero(valor)) {

        error.textContent =
            "Ingrese un valor numérico válido.";

        return false;
    }


    if (!validarRango(valor, 1, 10)) {

        error.textContent =
            "El plazo debe estar entre 1 y 10 años.";

        return false;
    }


    if (!validarEntero(valor)) {

        error.textContent =
            "El plazo debe ser un número entero.";

        return false;
    }


    return true;
}


/* =========================================
   VALIDAR TASA - ONBLUR
========================================= */

function validarTasa() {

    let valor =
        document.getElementById("txtTasaInteres").value;

    let error =
        document.getElementById("errorTasaInteres");

    error.textContent = "";


    if (!validarCampoObligatorio(valor)) {

        error.textContent =
            "Este campo es obligatorio.";

        return false;
    }


    if (!validarNumero(valor)) {

        error.textContent =
            "Ingrese un valor numérico válido.";

        return false;
    }


    if (!validarRango(valor, 1, 30)) {

        error.textContent =
            "La tasa debe estar entre 1% y 30%.";

        return false;
    }


    if (!validarEntero(valor)) {

        error.textContent =
            "La tasa debe ser un número entero.";

        return false;
    }


    return true;
}


/* =========================================
   CALCULAR SIMULADOR
========================================= */

function calcular() {

    limpiarResultados();

    limpiarErrores();


    /* =========================================
       VALIDAR TODOS LOS CAMPOS
    ========================================= */

    let ingresosValido =
        validarIngresos();

    let egresosValido =
        validarEgresos();

    let montoValido =
        validarMonto();

    let plazoValido =
        validarPlazo();

    let tasaValida =
        validarTasa();


    /*
        Si existe algún error,
        no se realiza el cálculo.
    */

    if (
        !ingresosValido ||
        !egresosValido ||
        !montoValido ||
        !plazoValido ||
        !tasaValida
    ) {
        return;
    }


    /* =========================================
       LEER LOS VALORES
    ========================================= */

    let ingresosTexto =
        document.getElementById("txtIngresos").value;

    let egresosTexto =
        document.getElementById("txtEgresos").value;

    let montoTexto =
        document.getElementById("txtMonto").value;

    let plazoTexto =
        document.getElementById("txtPlazo").value;

    let tasaTexto =
        document.getElementById("txtTasaInteres").value;


    /* =========================================
       CONVERTIR LOS VALORES
    ========================================= */

    let ingresos =
        parseFloat(ingresosTexto);

    let egresos =
        parseFloat(egresosTexto);

    let monto =
        parseInt(montoTexto);

    let plazoAnios =
        parseInt(plazoTexto);

    let tasa =
        parseInt(tasaTexto);


    /* =========================================
       REGLA DE NEGOCIO
    ========================================= */

    if (!validarMontoSegunIngresos(monto, ingresos)) {

        document.getElementById("errorMonto").textContent =
            "El monto no puede superar 5 veces tus ingresos mensuales.";

        return;
    }


    /* =========================================
       CALCULAR DISPONIBLE
    ========================================= */

    let disponible =
        calcularDisponible(
            ingresos,
            egresos
        );


    document.getElementById("spnDisponible").textContent =
        disponible.toFixed(2);


    /* =========================================
       CALCULAR CAPACIDAD DE PAGO
    ========================================= */

    let capacidadPago =
        calcularCapacidadPago(
            disponible
        );


    document.getElementById("spnCapacidadPago").textContent =
        capacidadPago.toFixed(2);


    /* =========================================
       CALCULAR INTERÉS
    ========================================= */

    let interes =
        calcularInteresSimple(
            monto,
            tasa,
            plazoAnios
        );


    document.getElementById("spnInteresPagar").textContent =
        interes.toFixed(2);


    /* =========================================
       CALCULAR TOTAL
    ========================================= */

    let total =
        calcularTotalPagar(
            monto,
            interes
        );


    document.getElementById("spnTotalPrestamo").textContent =
        total.toFixed(2);


    /* =========================================
       CALCULAR CUOTA MENSUAL
    ========================================= */

    let cuotaMensual =
        calcularCuotaMensual(
            total,
            plazoAnios
        );


    document.getElementById("spnCuotaMensual").textContent =
        cuotaMensual.toFixed(2);


    /* =========================================
       APROBAR O RECHAZAR CRÉDITO
    ========================================= */

    let creditoAprobado =
        aprobarCredito(
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


/* =========================================
   BOTÓN CALCULAR
========================================= */

document
    .getElementById("btnCalcularCredito")
    .addEventListener(
        "click",
        calcular
    );


/* =========================================
   BOTÓN LIMPIAR
========================================= */

document
    .getElementById("btnReiniciar")
    .addEventListener(
        "click",
        function () {

            document.getElementById("txtIngresos").value = "";

            document.getElementById("txtEgresos").value = "";

            document.getElementById("txtMonto").value = "";

            document.getElementById("txtPlazo").value = "";

            document.getElementById("txtTasaInteres").value = "";

            limpiarErrores();

            limpiarResultados();
        }
    );