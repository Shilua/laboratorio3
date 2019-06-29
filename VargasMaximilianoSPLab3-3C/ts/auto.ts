namespace Vehiculo{
    export class Auto extends Vehiculo {
        
        cantidadPuertas:Number;
        constructor(id:Number,marca:String,modelo:String,precio:Number,cantidadPuertas:Number) {
            super(id,marca,modelo,precio);
            this.cantidadPuertas = cantidadPuertas;
        }

        toJson():string{
            return JSON.stringify(this);
        }
    }
}