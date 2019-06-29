//ARRAY DE ENTIDADES
//let entidades:any[] = (localStorage.getItem('entidades') != null) ? JSON.parse(localStorage.getItem('entidades')) : [];

//GUARDAR EN LOCAL STORAGE
const guardarEnLocalStorage = (entidades:[]) => {
    localStorage.setItem('entidades', JSON.stringify(entidades));
}

//LEER LOCAL STORAGE
function leerLocalStorage():any{

    let entidades
    if(localStorage.getItem('entidades') != null){
        entidades = JSON.parse(localStorage.getItem('entidades'));
    }
    else{
        entidades = [];
    }
    return entidades;
}

$(function(){
    $('#btn-agregar').click(agregar);
    $('#btn-eliminar').click(eliminar);
    $('#btn-cancelar').click(cancelar);
    $('#btn-filtrar').click(filtrar);
    $('#btn-promedio').click(calularPromedio);
    $('#btn-limpiar').click(limpiarStorage);
});


function agregar(){
    let nuevoVehiculo;
    let marca:String = String($('#marcaInput').val());
    let modelo:String = String($('#modeloInput').val());
    let precio:Number = Number($('#precioInput').val());
    let tipo:String = String($('#tipoInput').val());
    let id;
    if(localStorage.getItem('entidades') == null){
        id = 1;
    }
    else{
        let localStorageEntidades = leerLocalStorage();
        id = localStorageEntidades.reduce(function(max,entidad){
        if(entidad.id>=max){
            return entidad.id+1;
        }
        return max;},0);

        if(id == 0){
            id+1;
        }
    }
    let cantidadDePuertas = 1;
    let cuatroxcuatro = false;
    if (tipo === "auto") {
        nuevoVehiculo = new Vehiculo.Auto(id,marca,modelo,precio,cantidadDePuertas);
    }
    else{
        nuevoVehiculo = new Vehiculo.Camioneta(id,marca,modelo,precio,cuatroxcuatro);
    }
    let entidades = leerLocalStorage();
    entidades.push(nuevoVehiculo.toJson());
    guardarEnLocalStorage(entidades);
    mostrarVehiculos();
}

function mostrarVehiculos():void{
    const tBody = $('#tBody');
    tBody.html('').find("tr:gt(0)").remove();
    let objetos = leerLocalStorage();
    objetos.forEach(element => {
        let vehiculo = JSON.parse(element);
        tBody.append(
            `<tr>
                <td>${vehiculo.id}</td>
                <td>${vehiculo.marca}</td>
                <td>${vehiculo.modelo}</td>
                <td>${vehiculo.precio}</td>
                <td>
                    <a href="#" class="btn btn-danger" onClick="eliminar(${objetos.indexOf(element)})">Eliminar</a> 
                </td>
            </tr>`
        );
    });
}

function eliminar(i:number):void{
    let entidades = leerLocalStorage();
    entidades.splice(i, 1);
    guardarEnLocalStorage(entidades);
    mostrarVehiculos();
}

function calularPromedio() {
    let objetos = leerLocalStorage();
    let sumaPrecio = objetos.reduce(function(prom,objeto){
      
        return prom+=objeto.precio;
      },0);
      let promedio = sumaPrecio / objetos.length;
      $('#promedio').val(promedio);
}

function limpiarStorage() {
    localStorage.clear();
    const tBody = $('#tBody');
    tBody.html('').find("tr:gt(0)").remove();
}

function cancelar(){
    console.log('Cancelar');
}

function filtrar(){
    console.log('Filtrar');
}