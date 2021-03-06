"use strict";
var Empleados;
(function (Empleados) {
    $(document).ready(function () {
        $('#cancelar').click(limpiarFormulario);
        $('#agregar').click(agreagarEmpleado);
        $('#mostrar-empleados').click(mostrarEmpleados);
    });
    var storage;
    function agreagarEmpleado() {
        var nombre = String($('#nombre').val());
        var apellido = String($('#apellido').val());
        var edad = Number($('#edad').val());
        var legajo = Number($('#legajo').val());
        var horario = String($('#horario').val());
        var nuevoEmpleado = new Empleados.Empleado(nombre, apellido, edad, horario, legajo);
        guardarLocalStorage(nuevoEmpleado);
    }
    function limpiarFormulario() {
        $('#nombre').val('');
        $('#apellido').val('');
        $('#edad').val('');
        $('#legajo').val('');
        $('#horario').val('');
    }
    function mostrarEmpleados(e) {
        e.preventDefault();
    }
    function guardarLocalStorage(empleado) {
        if (localStorage.getItem("storage") === null) {
            storage.push(empleado);
            localStorage.setItem('storage', JSON.stringify(storage));
        }
        else {
            var toParse = localStorage.getItem('storage');
            storage = JSON.parse(toParse);
            storage.push(empleado);
            localStorage.setItem('storage', JSON.stringify(storage));
        }
    }
})(Empleados || (Empleados = {}));
