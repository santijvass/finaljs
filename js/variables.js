
const vehiculo = document.querySelector("#vehiculo")
const ubicacion = document.querySelector("#ubicacion")
const modelo = document.querySelector("#modelo")
const btnCotizar = document.querySelector("button")
const importe = document.querySelector("span")
const btnEnviar = document.querySelector("span.guardar")


const datosVehiculo = [{tipo: 'compacto', factor: 1.09},
                        {tipo: 'sedan', factor: 1.05},
                        {tipo: 'utilitario', factor: 1.19},
                        {tipo: 'familiar', factor: 1.08},
                        {tipo: 'camioneta', factor: 1.70},
                        {tipo: 'coupe', factor: 2.39},]

const datosUbicacion = [{tipo: 'ciudad de mas de 150 mil habitantes', factor: 1.40},
                        {tipo: 'ciudad de menos de entre 100 y 150 mil habitantes', factor: 1.25},
                        {tipo: 'ciudad de menos de 100 mil habitantes', factor: 1.13},
                        {tipo: 'zona rural', factor: 0.89},]

const valor = 38.40