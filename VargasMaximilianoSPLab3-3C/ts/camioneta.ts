namespace Vehiculo{
    export class Camioneta extends Vehiculo {
        cuatroXcuatro:boolean;
        constructor(id:Number,marca:String,modelo:String,precio:Number,cuatroXcuatro:boolean) {
            super(id,marca,modelo,precio);
            this.cuatroXcuatro = cuatroXcuatro;
        }
        toJson():string{
            return JSON.stringify(this);
        }
    }
}