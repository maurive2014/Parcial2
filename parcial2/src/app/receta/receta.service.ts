import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Receta } from './receta';
import { Observable } from 'rxjs';

const API_URL = "https://gist.githubusercontent.com/VivianGomez/e65c117a4809355fbb53c37cb8fe1d44/raw/d0482c083962cad2319b3640250da0194d341dc6/";
const recetas = 'recipes';

@Injectable()
export class RecetaService {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }
    
  
    getRecetas() : Observable<Receta[]> {
        return this.http.get<Receta[]>(API_URL + recetas);
    }

}
