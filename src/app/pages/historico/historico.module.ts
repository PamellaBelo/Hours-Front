import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { HistoricoComponent } from './historico.component';
import { RodapeComponent } from '../rodape/rodape.component';

@NgModule({
  declarations: [HistoricoComponent],
  imports: [
    CommonModule,
    RouterModule ,
    MatSlideToggleModule
  ]
})
export class HistoricoModule { }
