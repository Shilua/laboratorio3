var xml = new XMLHttpRequest(); 
window.addEventListener("load",function() {

    //variables que vienen por el get
    var color = getParameterByName("color", window.url);
    var font = getParameterByName("font", window.url);
    var email = getParameterByName("email", window.url);

    //botones
    var btnAgregar = document.getElementById('agregar');
    var btnCerrar = document.getElementById('cerrar');
    var btnPost = document.getElementById("post");
    //agrego click a las funciones
    btnAgregar.addEventListener("click", aparecer);
    btnCerrar.addEventListener("click", cerrar);
    btnPost.addEventListener("click", postear);

})



function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function aparecer(params) {
    var contAgregar = document.getElementById('contAgregar');
    
    contAgregar.hidden = false;
}

function cerrar(params) {
    var contAgregar = document.getElementById('contAgregar');  
    contAgregar.hidden = true;    
}

function postear(params) {
    var title = document.getElementById("title");
    var header = document.getElementById("header");
    var postText = document.getElementById("postText");
    var email = getParameterByName("email", window.url);

    var datosJson = {"title": title, "header": header, "posttext": postText, "author": email};
    var datosPost = JSON.stringify(datosJson);
    xml.open("POST", "http://192.168.2.232:1337/postearNuevaEntrada", true);
    xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xml.onreadystatechange = callback;
    xml.send(datosPost);  
}

function callback() {
    //console.log("Llego respuesta del servidor",xml.readyState,xml.status);
    if (xml.readyState === 4) {
        if (xml.status === 200) {
            
        }
        else{
            console.log("Error en la respuesta del servidor Numero: "+xml.status);
        }
    }
}