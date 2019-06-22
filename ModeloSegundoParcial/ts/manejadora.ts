namespace Empleados{
    $(document).ready(function() {
        $('#cancelar').click(limpiarFormulario);
        $('#agregar').click(agreagarEmpleado);
        $('#mostrar-empleados').click(mostrarEmpleados);
     });
     
    var storage:Array<Empleado>;
    function agreagarEmpleado() {
        let nombre:string = String($('#nombre').val());
        let apellido:string = String($('#apellido').val());
        let edad:number = Number($('#edad').val());
        let legajo:number = Number($('#legajo').val());
        let horario:string = String($('#horario').val());

        let nuevoEmpleado:Empleado = new Empleado(nombre,apellido,edad,horario,legajo);
        storage.push(nuevoEmpleado);
    }

    function limpiarFormulario() {
        $('#nombre').val('');
        $('#apellido').val('');
        $('#edad').val('');
        $('#legajo').val('');
        $('#horario').val('');

    }

    function mostrarEmpleados(e:any) {
        e.preventDefault();
    }


    function guardarLocalStorage(empleado:Empleado) {
        localStorage.setItem(String(empleado.legajo),empleado.ToJSON());
    }

}