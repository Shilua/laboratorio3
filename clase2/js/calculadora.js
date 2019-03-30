/*function carga() {  
     document.getElementById('sumar').addEventListener("click",suma);
    //document.getElementById('sumar').onclick = suma;
    console.log("estoy aqui");
}*/
//window.onload = carga;
//mejor
window.addEventListener("load",function() {
    var btnSumar = document.getElementById('sumar');
    var btnGuardar = document.getElementById('guardar');
    btnSumar.addEventListener("click",sumar);
    btnGuardar.addEventListener("click",guardar);
})



function sumar() {
    var number1 = parseInt(document.getElementById('valor1').value);
    var number2 = parseInt(document.getElementById('valor2').value);
    
    var result = number1 + number2;
    document.getElementById('resultado').value = result;
    return result;
}

function guardar(params) {
    var table = document.getElementById("tbody");
    var number1 = document.getElementById('valor1').value;
    var number2 = document.getElementById('valor2').value;
    var result = sumar();
    table.innerHTML += "<tr><td>"+number1+"</td><td>"+number2+"</td><td>"+result+"</td></tr>";
}