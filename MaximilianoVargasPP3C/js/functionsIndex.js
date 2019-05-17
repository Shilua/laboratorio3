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

function deleteFunction(e){
    e.preventDefault();
    //console.log(e.target.parentNode.parentNode);
    //console.log(e.srcElement.parentNode.parentNode);
    var trToDelete = e.srcElement.parentNode.parentNode;
    trToDelete.parentNode.removeChild( trToDelete );
}

function clickOnRow(e){
    e.preventDefault();
    var form = get('form');
    abrir();
    var id = e.target.parentNode.firstChild.firstChild.nodeValue;
    var personas = JSON.parse(localStorage.getItem('cachedData'));
    personas.forEach(persona => {
        if(id == persona.id){
            
            var inputName = get('inputName');
            var inputCuatrimestre = get('cuatrimestre');

            inputName.setAttribute("value", persona.nombre);
            
            var options = inputCuatrimestre.children

                
            for (let i = 0; i < options.length; i++) {
                 if(options[i].value == persona.cuatrimestre)
                {
                    options[i].sellected = 'selected';
                }
                
            }
        }

    });
}