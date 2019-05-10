var xml = new XMLHttpRequest(); 
window.addEventListener("load",function() {
    if(localStorage.getItem("personas")== null)
    loadTable();
})

function loadTable() {
    xml.open("GET", "http://localhost:3000/personas", true);
    xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xml.onreadystatechange = callback;
    xml.send();
}

function callback() {
    var table = document.getElementById("tCuerpo");
    //console.log("Llego respuesta del servidor",xml.readyState,xml.status);
    if (xml.readyState === 4) {
        if (xml.status === 200) {

            //si esta guardado en local no volver a cargarla
            localStorage.setItem('personas', xml.responseText);
            var personas = JSON.parse(xml.responseText);

            console.log(personas);
            personas.forEach(persona => {
               var row =document.createElement("tr");
               var colums = Object.keys(persona);
               colums.forEach(colum => {
                   var col = document.createElement("td");
                   var text = document.createTextNode(persona.nombre);
                   col.appendChild(text);
                    row.appendChild(col);

               });
            });
        }
        else{
            console.log("Error en la respuesta del servidor Numero: "+xml.status);
        }
    }
}