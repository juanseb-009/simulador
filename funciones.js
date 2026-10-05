function calcularDisponible(ingresos, egresos) {
    let disponible = ingresos - egresos;

    if (disponible < 0) {
        disponible = 0;
    }

    return disponible;
}


function calcularCapacidadPago(montoDisponible) {
    return montoDisponible * 0.50;
}


function calcularInteresSimple(monto, tasa, plazoAnios) {
    return plazoAnios * monto * (tasa / 100);
}


function calcularTotalPagar(monto, interes) {
    return monto + interes + 100;
}


function calcularCuotaMensual(total, plazoAnios) {
    let meses = plazoAnios * 12;

    return total / meses;
}


function aprobarCredito(capacidadPago, cuotaMensual) {
    if (capacidadPago > cuotaMensual) {
        return true;
    }

    return false;
}


/* VALIDACIÓN DE CAMPOS OBLIGATORIOS */

function validarCampoObligatorio(valor) {
    if (valor.trim() === "") {
        return false;
    }

    return true;
}


/* VALIDACIÓN DE NÚMEROS */

function validarNumero(valor) {
    let numero = Number(valor);

    if (!Number.isFinite(numero)) {
        return false;
    }

    return true;
}


/* VALIDACIÓN DE MÍNIMO Y MÁXIMO */

function validarRango(valor, minimo, maximo) {
    let numero = Number(valor);

    if (numero < minimo || numero > maximo) {
        return false;
    }

    return true;
}