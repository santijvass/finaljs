const cargarCombo = (select, array)=> {
    if (array.length > 0) {
        array.forEach(elemento => {
            select.innerHTML += `<option value="${elemento.factor}">${elemento.tipo}</option>`
        })
    } else {
        console.error("sin elementos en el array")
    }
}
cargarCombo(vehiculo, datosVehiculo)
cargarCombo(ubicacion, datosUbicacion)

const datosCompletos = ()=> {
    if (vehiculo.value !== "..." && ubicacion.value !== "..." && parseInt(modelo.value) && modelo.value >= 2000 && modelo.value <= 2022) {
        return true
    } else {
        return false
    }
}

const realizarCotizacion = ()=> {
    if (datosCompletos()) {
        const seguro = new Cotizador(modelo.value, propiedad.value, ubicacion.value, valor)
              importe.innerText = seguro.cotizar()
              btnEnviar.classList.remove("ocultar")
    } else {
        Sweetale ("ALTO AHI, debes completar todos los valores", "warning")
    }
}

const enviarPorEmail = ()=> {
    const cotizacion = {
        fechaCotizacion: new Date().toLocaleString(),
        vehiculo: vehiculo[vehiculo.selectedIndex].text,
        ubicacion: ubicacion[ubicacion.selectedIndex].text,
        modelo: modelo.value,
        poliza: importe.innerText
    }
    localStorage.setItem("UltimaCotizacion", JSON.stringify(cotizacion))
    alert("Cotización enviada")
    btnEnviar.classList.add("ocultar")
}

btnCotizar.addEventListener("click", realizarCotizacion)
btnEnviar.addEventListener("click", enviarPorEmail)


const Sweetale = (mensaje, icono)=> {
    Swal.fire({
        icon: icono,
        title: mensaje,
   
      })


}