import { Component, OnInit } from '@angular/core';
import { Receta } from '../receta';
import { RecetaService } from '../receta.service';

/**
 * The component for the list of recetas in the RecetaStore
 */
@Component({
    selector: 'list-receta',
    templateUrl: './receta-list.component.html', 
})
export class RecetaListComponent implements OnInit {

    /**
     * Constructor for the component
     * @param recetaService The author's services provider
     */
    constructor(private recetaService: RecetaService) { }
    
    /**
     * The list of recetas which belong to the RecetaStore
     */
    recetas: Receta[];
    average = 0;
    opiniones = 0;
    opinionesred = "";

    selectedReceta!: Receta;
    selected = false;

    onSelected(receta: Receta): void {
      this.selected = true;
      this.selectedReceta = receta;
    }

    /**
     * Asks the service to update the list of recetas
     */
    getRecetas(): void {
        this.recetaService.getRecetas().subscribe(recetas => 
          {this.recetas = recetas
            for (let receta of this.recetas) {
              this.average += receta.estrellas
              this.opiniones += receta.cantidadOpiniones
            }
            this.average =  this.average/recetas.length
            this.opinionesred = this.average.toFixed(2);
          });
    }

    /**
     * This will initialize the component by retrieving the list of recetas from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.getRecetas();
    }
}