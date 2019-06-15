namespace animal{
    export class Perro implements Animal{
        private nombre:string = "";
        constructor(nombre?:string){
            if (nombre!=undefined) {
                this.nombre = nombre;
            }
        }
        hacerRuido():string{
            return "Guau!!"
        }
        getNombre(){
            return this.nombre;
        }
        setNombre(nombre:string){
            this.nombre = nombre;
        }
    }
}

