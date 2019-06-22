namespace Empleados{
    export class Persona {
        public nombre:String;
        public apellido:String;
        public edad:Number;
        constructor(nombre:String,apellido:String,edad:Number) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.edad = edad;
        }

        public personaToJSON():String {
            return JSON.stringify(this);
        }
    }
}