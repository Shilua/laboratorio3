var obj ={} //var esto es un json vacio
var persona = {nombre:"maximiliano", edad:29, apellido: "vargas"} //esto es un json

var array = [];
var personas = [{nombre:"maximiliano", edad:29, apellido: "vargas"},
{nombre:"martin", edad:29, apellido: "vargas"}]; //array de json

var str = '{"nombre":"juan", "apellido": "perez"}';

//convierte un string a json
var json = JSON.parse(str);
//convierte un json a string
var str = JSON.stringify(json);