window.addEventListener("load",function() {
    var btnGuardar = document.getElementById('guardar');
    var btnAgregar = document.getElementById('agregar');
    var btnCerrar = document.getElementById('cerrar');
    btnAgregar.addEventListener("click", aparecer);
    btnGuardar.addEventListener("click",guardar);
    btnCerrar.addEventListener("click", cerrar);
})

function guardar(params) {
    var table = document.getElementById("tCuerpo");
    var nombre = document.getElementById('fname').value;
    var apellido = document.getElementById('lname').value;
    

    if (apellido == "" || nombre =="") {
        document.getElementById("lname").className= "error";
        document.getElementById("fname").className= "error";
        return;
    }

    if (confirm("¿Esta seguro que desea agregar a la persona?")) {
        document.getElementById("lname").className= "sinError";
        document.getElementById("fname").className= "sinError";
        
        var createTr = document.createElement("tr");

        //table.innerHTML += "<tr><td>"+nombre+"</td><td>"+apellido+"</td><td><a href =\"\">Borrar</a></td></tr>";
    }
}

function aparecer(params) {
    var contAgregar = document.getElementById('contAgregar');
    var btnAgregar = document.getElementById('agregar');
    
    contAgregar.hidden = false;
    btnAgregar.hidden = true;
}

function cerrar(params) {
    var contAgregar = document.getElementById('contAgregar');
    var btnAgregar = document.getElementById('agregar');    
    contAgregar.hidden = true;    
    btnAgregar.hidden = false;
}