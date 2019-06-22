namespace Empleados{
    export class Empleado extends Persona {
        public horario:String;
        public legajo:Number;
        constructor(nombre:String,apellido:String,edad:Number,horario:String,legajo:Number) {
            super(nombre,apellido,edad);
            this.horario = horario;
            this.legajo = legajo;
        }

        public ToJSON():string {
            return JSON.stringify(this);
        }
    }
}