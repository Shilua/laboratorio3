var xml = new XMLHttpRequest();  
window.addEventListener("load",function() {
    var btnLoguear = document.getElementById('button');
    btnLoguear.addEventListener("click", loguear);
})

function loguear() {    
    var usr = document.getElementById('usr').value;
    var pass = document.getElementById('pass').value;
    var datosJson = {email : usr , password: pass};
    var datosLogin = JSON.stringify(datosJson);
    xml.open("POST", "http://192.168.2.232:1337/login", true);
    xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xml.onreadystatechange = callback;
    xml.send(datosLogin);  
}

function callback() {
    //console.log("Llego respuesta del servidor",xml.readyState,xml.status);
    if (xml.readyState === 4) {
        if (xml.status === 200) {
            console.log(xml.responseText);

            var response = JSON.parse(xml.responseText);
            if(response.autenticado === "si")
            {
                var usr = document.getElementById('usr').value;
                //window.location.replace("index.html?color="+response.preferencias.color+"&font="+response.preferencias.font+"&email="+usr+"");
                window.location.href = "index.html?color="+response.preferencias.color+"&font="+response.preferencias.font+"&email="+usr;
            }
        }
        else{
            console.log("Error en la respuesta del servidor Numero: "+xml.status);
        }
    }
}
