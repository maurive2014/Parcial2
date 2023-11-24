import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetaListComponent } from './receta-list/receta-list.component';
import { RecetaService } from './receta.service';
import { RecetaDetailComponent } from './receta-detail/receta-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RecetaListComponent, RecetaDetailComponent],
  providers: [RecetaService],
  exports:[RecetaListComponent]
})
export class RecetaModule { }
