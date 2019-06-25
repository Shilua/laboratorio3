namespace Empleados{
    $(document).ready(function() {
        $('#cancelar').click(limpiarFormulario);
        $('#agregar').click(agreagarEmpleado);
        $('#mostrar-empleados').click(mostrarEmpleados);
     });
     
    var storage:Array<Empleado>;

    function agreagarEmpleado(e:any) {
        e.preventDefault();
        let nombre:string = String($('#nombre').val());
        let apellido:string = String($('#apellido').val());
        let edad:number = Number($('#edad').val());
        let legajo:number = Number($('#legajo').val());
        let horario:string = String($('#horario').val());

        let nuevoEmpleado:Empleado = new Empleado(nombre,apellido,edad,horario,legajo);
        guardarLocalStorage(nuevoEmpleado);
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
        if (localStorage.getItem("storage") === null) {
            storage.push(empleado);
            localStorage.setItem('storage', JSON.stringify(storage));
          }
          else{
            let toParse:any = localStorage.getItem('storage');
            storage = JSON.parse(toParse);
            storage.push(empleado);
            localStorage.setItem('storage', JSON.stringify(storage));
        }
    }

}