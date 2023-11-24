export interface Receta {
    id: number;
    nombre: string;
    descripcion: string;
    dificultad: number;
    duracion: number;
    ingredientes: string;
    categoria: string;
    imagen:string;
    estrellas:number;
    cantidadOpiniones:number;
    autorReceta: string;
}
