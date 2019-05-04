window.addEventListener("load", function () {
    /*console.log(document);
    var lista = document.getElementById("lista");

    console.log(lista.parentNode); //quien es el padre

    var elementosHijosNode = lista.childNodes //devuelve todos los elementos tambien los textos
    var elementosHijos = lista.children; //quien son los hijos elementos

   for (let i = 0; i < elementosHijos.length; i++) {
       console.log(elementosHijos[i].nextElementSibling); //devuelve el hermano - siguiente en la lista el ultimo no tiene hermano
       console.log(elementosHijos[i].previousElementSibling)// devuelve el hermano anterior
   }
    console.log(lista.firstChild); //me devuelve el primer nodo esto es texto
    console.log(lista.firstElementChild); //devuelve el primer elemento*/

    var lista = document.getElementById("lista");
    var nuevoNodoElemento = document.createElement("li");

    lista.appendChild(nuevoNodoElemento);
    var nuevoNodoTextoLi = document.createTextNode("Otro");
    nuevoNodoElemento.appendChild(nuevoNodoTextoLi);

    var primerElemento = lista.firstElementChild;

    nuevoNodoElemento.setAttribute("cualquierCosa","idLi"); //setea un atributo

    nuevoNodoElemento.getAttribute("cualquierCosa");  //devuelve el atributo

    primerElemento.parentNode.removeChild(primerElemento);


    localStorage.setItem("clave","valor");  //creo un nuevo tipo de dato en local storage

    var valor = localStorage.getItem("clave");

    var obj = {"key": "value", "edad": 30};

    localStorage.setItem("clave2", JSON.stringify(obj));

    var objLocal = JSON.parse(localStorage.getItem("clave2"));

    /*var nuevoNodoTexto = document.createTextNode("texto Plano");
    var parrafo = document.getElementById("parrafo");
    parrafo.appendChild(nuevoNodoTexto);*/
});