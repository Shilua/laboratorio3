"use strict";
//ARRAY DE ENTIDADES
//let entidades:any[] = (localStorage.getItem('entidades') != null) ? JSON.parse(localStorage.getItem('entidades')) : [];
//GUARDAR EN LOCAL STORAGE
var guardarEnLocalStorage = function (entidades) {
    localStorage.setItem('entidades', JSON.stringify(entidades));
};
//LEER LOCAL STORAGE
function leerLocalStorage() {
    var entidades;
    if (localStorage.getItem('entidades') != null) {
        entidades = JSON.parse(localStorage.getItem('entidades'));
    }
    else {
        entidades = [];
    }
    return entidades;
}
$(function () {
    $('#btn-agregar').click(agregar);
    $('#btn-eliminar').click(eliminar);
    $('#btn-cancelar').click(cancelar);
    $('#btn-filtrar').click(filtrar);
    $('#btn-promedio').click(calularPromedio);
    $('#btn-limpiar').click(limpiarStorage);
});
function agregar() {
    var nuevoVehiculo;
    var marca = String($('#marcaInput').val());
    var modelo = String($('#modeloInput').val());
    var precio = Number($('#precioInput').val());
    var tipo = String($('#tipoInput').val());
    var id;
    if (localStorage.getItem('entidades') == null) {
        id = 1;
    }
    else {
        var localStorageEntidades = leerLocalStorage();
        id = localStorageEntidades.reduce(function (max, entidad) {
            if (entidad.id >= max) {
                return entidad.id + 1;
            }
            return max;
        }, 0);
        if (id == 0) {
            id + 1;
        }
    }
    var cantidadDePuertas = 1;
    var cuatroxcuatro = false;
    if (tipo === "auto") {
        nuevoVehiculo = new Vehiculo.Auto(id, marca, modelo, precio, cantidadDePuertas);
    }
    else {
        nuevoVehiculo = new Vehiculo.Camioneta(id, marca, modelo, precio, cuatroxcuatro);
    }
    var entidades = leerLocalStorage();
    entidades.push(nuevoVehiculo.toJson());
    guardarEnLocalStorage(entidades);
    mostrarVehiculos();
}
function mostrarVehiculos() {
    var tBody = $('#tBody');
    tBody.html('').find("tr:gt(0)").remove();
    var objetos = leerLocalStorage();
    objetos.forEach(function (element) {
        var vehiculo = JSON.parse(element);
        tBody.append("<tr>\n                <td>" + vehiculo.id + "</td>\n                <td>" + vehiculo.marca + "</td>\n                <td>" + vehiculo.modelo + "</td>\n                <td>" + vehiculo.precio + "</td>\n                <td>\n                    <a href=\"#\" class=\"btn btn-danger\" onClick=\"eliminar(" + objetos.indexOf(element) + ")\">Eliminar</a> \n                </td>\n            </tr>");
    });
}
function eliminar(i) {
    var entidades = leerLocalStorage();
    entidades.splice(i, 1);
    guardarEnLocalStorage(entidades);
    mostrarVehiculos();
}
function calularPromedio() {
    var objetos = leerLocalStorage();
    var sumaPrecio = objetos.reduce(function (prom, objeto) {
        return prom += objeto.precio;
    }, 0);
    var promedio = sumaPrecio / objetos.length;
    $('#promedio').val(promedio);
}
function limpiarStorage() {
    localStorage.clear();
    var tBody = $('#tBody');
    tBody.html('').find("tr:gt(0)").remove();
}
function cancelar() {
    console.log('Cancelar');
}
function filtrar() {
    console.log('Filtrar');
}
