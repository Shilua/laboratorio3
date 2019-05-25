var miVariableFantasma;

$(document).ready(function() {
    loadTable();   
});

function input(params) {
    
}

function loadTable() {
    $.get("http://localhost:3000/personajes",
    function (data, status) {
      if(status == "success"){
        var personajes = data;
        var tbodyObject = $("#tableBody");
        personajes.forEach(personaje => {
            var elementoTr = document.createElement('tr');
            tbodyObject.append(elementoTr);
            elementoTr.appendChild(generateTd(personaje.foto,personaje.id));
            elementoTr.appendChild(generateTd(personaje.nombre));
            elementoTr.appendChild(generateTd(personaje.apellido));
            elementoTr.appendChild(generateTd(personaje.estado,personaje.id));
        });
        $("input").change(function(){
            if (this.files && this.files[0]) {
                var idR = parseInt(this.id);
                var fReader= new FileReader();
                fReader.addEventListener("load", function(e) {
                    var obj = { id: idR, foto : e.target.result};
                    salida = JSON.stringify(obj);
                    interactGif(false);
                    $.post("http://localhost:3000/editarFoto",
                    obj,
                    function(data, status){
                        if(status == "success"){
                            interactGif(true);
                            
                          }
                          else{
                            console.log("Error en la respuesta del servidor Numero: "+status);
                        }
                    });
                    //console.log($("#"+idR));
                    $("#img"+idR).attr("src",e.target.result);
                }); 
                
                fReader.readAsDataURL( this.files[0] );
            }
        });

        $('select').change(function() {
            var idR =this.name;
            var estadoR = $("#"+this.id+" option:selected").val();
            var obj = { id: idR, estado : estadoR   };
            salida = JSON.stringify(obj);
            interactGif(false);
            $.post("http://localhost:3000/editarEstado",
                    obj,
                    function(data, status){
                        if(status == "success"){
                            interactGif(true);
                            
                          }
                          else{
                            console.log("Error en la respuesta del servidor Numero: "+status);
                        }
                    });
      });
      }
      else{
        console.log("Error en la respuesta del servidor Numero: "+status);
    }
    });
}

function interactGif(status){
    var spinner = $("#hiddenDiv");
    spinner.attr("hidden", status);
}

function generateTd (data,id){
    if(data.length > 20)
    {
        var elementoTd = document.createElement('td');
        var elementoImg = document.createElement("IMG");
        var elementoFile = document.createElement("input");
        elementoFile.setAttribute("type", "file");
        elementoFile.setAttribute("id", id);
        elementoImg.setAttribute("src",data);
        elementoImg.setAttribute("id","img"+id);
        elementoTd.appendChild( elementoImg );
        elementoTd.appendChild(elementoFile);
        return elementoTd;
    }
    else if(data == "Vivo" || data == "Muerto"){
        var elementoTd = document.createElement('td');
        var elementoSelect = document.createElement("select");
        elementoSelect.setAttribute("id", "select"+id);
        elementoSelect.setAttribute("name", id);
        var elementoOption = document.createElement("OPTION");
        var elementoOption2 = document.createElement("OPTION");
        var text = document.createTextNode(data);
        elementoOption.appendChild(text);
        elementoOption.setAttribute("value",data);

        if(data == "Vivo")
        {
            text = document.createTextNode("Muerto");
            elementoOption2.appendChild(text);
            elementoOption2.setAttribute("value","Muerto"); 
        }
        else{
            text = document.createTextNode("Vivo");
            elementoOption2.appendChild(text);
            elementoOption2.setAttribute("value","Vivo"); 
        }

        elementoSelect.appendChild(elementoOption);
        elementoSelect.appendChild(elementoOption2);

        elementoTd.appendChild( elementoSelect );
        return elementoTd;
    }
    else{
    var elementoTd = document.createElement('td');
    var elementoText = document.createTextNode(data);
    elementoTd.appendChild( elementoText );
    return elementoTd;
    }
}

