//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
function calcular() {
    let ingresos = parseFloat(document.getElementById("txtIngresos").value);
    let egresos = parseFloat(document.getElementById("txtEgresos").value);

    let disponible = calcularDisponible(ingresos, egresos);

    document.getElementById("spnDisponible").textContent = disponible.toFixed(2);
    
    let capacidadPago = calcularCapacidadPago(disponible);
    document.getElementById("spnCapacidadPago").textContent = capacidadPago.toFixed(2);
    

    let monto = parseInt(document.getElementById("txtMonto").value);
    let plazoAnios = parseInt(document.getElementById("txtPlazo").value);
    let tasa = parseInt(document.getElementById("txtTasaInteres").value);

    let interes = calcularInteresSimple(monto, tasa, plazoAnios);
    document.getElementById("spnInteresPagar").textContent = interes.toFixed(2);

    
    let total = calcularTotalPagar(monto, interes);
    document.getElementById("spnTotalPrestamo").textContent = total.toFixed(2);

    
    let cuotaMensual = calcularCuotaMensual(total, plazoAnios);
    document.getElementById("spnCuotaMensual").textContent = cuotaMensual.toFixed(2);
}


document.getElementById("btnCalcularCredito").addEventListener("click", calcular);