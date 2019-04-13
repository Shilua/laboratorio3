var xml = new XMLHttpRequest();  
window.addEventListener("load",function() {
    var btnLoguear = document.getElementById('button');
    btnLoguear.addEventListener("click", loguear);
})


/*function loguear() {    
    var usr = document.getElementById('usr').value;
    var pass = document.getElementById('pass').value;
    var enviar = "?usr="+usr+"&pass="+pass
       
    xml.open("GET", "http://192.168.56.1:3000/loginUsuario"+enviar, true);
    xml.onreadystatechange = callback;
    xml.send();  
}*/

function loguear() {    
    var usr = document.getElementById('usr').value;
    var pass = document.getElementById('pass').value;
    var enviar = "usr="+usr+"&pass="+pass
       
    xml.open("POST", "http://192.168.56.1:3000/loginUsuario", true);
    xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xml.onreadystatechange = callback;
    xml.send(enviar);  
}
function callback() {
    //console.log("Llego respuesta del servidor",xml.readyState,xml.status);
    if (xml.readyState === 4) {
        if (xml.status === 200) {
            console.log("respuesta: "+ xml.responseText);
            if (xml.responseText == "true") {
                alert("log ok")
            }
            else if(xml.responseText == "false"){
                alert("Usuario o Password incorrecto");
            }
            else{
                alert(xml.responseText);
            }
        }
        else{
            console.log("Error en la respuesta del servidor Numero: "+xml.status);
        }
    }
}


