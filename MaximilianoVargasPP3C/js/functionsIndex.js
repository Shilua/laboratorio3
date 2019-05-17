var request = new XMLHttpRequest();  
window.onload = loadEvents;


function loadEvents(){
    get("buttonClose").addEventListener("click",cerrar);
    loadTable();
}

function loadTable() {
    request.open("GET", "http://localhost:3000/materias", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.onreadystatechange = callback;
    request.send();
}

function callback() {

    if (request.readyState === 4) {
        if (request.status === 200) {
            var returnServer = JSON.parse(request.responseText);
            var tbodyObject = get("tableBody");
            returnServer.forEach(persona => {
                var elementoTr = document.createElement('tr');
                elementoTr.addEventListener('click', clickOnRow );
                tbodyObject.appendChild(elementoTr);
                elementoTr.appendChild(generateTd(persona.id));
                elementoTr.appendChild(generateTd(persona.nombre));
                elementoTr.appendChild(generateTd(persona.cuatrimestre));
                elementoTr.appendChild(generateTd(persona.fechaFinal));
                elementoTr.appendChild(generateTd(persona.turno)); 
            });
            localStorage.setItem('cachedData', JSON.stringify(returnServer));
        }
        else{
            console.log("Error en la respuesta del servidor Numero: "+request.status);
        }
    }
}

function generateTd (data){

    var elementoTd = document.createElement('td');
    
    var elementoText = document.createTextNode(data);
    elementoTd.appendChild( elementoText );
    return elementoTd;
}

function abrir(){
    var $fieldSet = get("fieldset");
    $fieldSet.hidden=false;

}

function cerrar(){
    var $fieldSet = get("fieldset");
    $fieldSet.hidden=true;

}

function get(id) {
    var retorno = document.getElementById(id);
    return retorno;
}
function getName(name) {
    var retorno = document.getElementsByName(name);
    return retorno;
}

function deleteFunction(e){
    e.preventDefault();
    var trToDelete = e.srcElement.parentNode.parentNode;
    trToDelete.parentNode.removeChild( trToDelete );
}

function clickOnRow(e){
    e.preventDefault();
    abrir();
    var hijos = e.target.parentNode.children;
    get('inputName').value = hijos[1].innerHTML;
    var cuatrimestre = get('cuatrimestre')
    cuatrimestre.value = hijos[2].innerHTML;
    cuatrimestre.disabled = true;
    var turno = hijos[4].innerHTML;
    if(turno === "Mañana")
    {
        get('inputTurnoM').checked = true;
        get('inputTurnoN').checked = false;
    }
       
    else{
        get('inputTurnoN').checked= true;
        get('inputTurnoM').checked = false;
    }
    var fecha = hijos[3].innerHTML;
    nuevaFecha = fecha.split('/');
    get('inputFecha').value = nuevaFecha[2]+"-"+nuevaFecha[1]+"-"+nuevaFecha[0];    
}