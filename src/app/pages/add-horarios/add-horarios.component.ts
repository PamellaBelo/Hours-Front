import { Component, model,  } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {MatCardModule} from '@angular/material/card';
import {provideNativeDateAdapter} from '@angular/material/core';



@Component({
  selector: 'app-add-horarios',
  standalone: true,
  imports: [    
    MatSlideToggleModule, 
    MatNativeDateModule,
    MatInputModule, 
    MatDatepickerModule,
    MatMomentDateModule,
    MatCardModule,

    
  ],
  providers: [provideNativeDateAdapter()],

  templateUrl: './add-horarios.component.html',
  styleUrl: './add-horarios.component.scss'
})
export class AddHorariosComponent {

}
