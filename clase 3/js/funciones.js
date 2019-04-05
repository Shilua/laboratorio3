window.addEventListener("load",function() {
    var btnGuardar = document.getElementById('guardar');
    btnGuardar.addEventListener("click",guardar);
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
        table.innerHTML += "<tr><td>"+nombre+"</td><td>"+apellido+"</td><td><a href =\"\">Borrar</a></td></tr>";
    }
}