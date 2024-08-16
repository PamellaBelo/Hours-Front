import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HorariosComponent } from './pages/horarios/horarios.component';
import { HistoricoComponent } from './pages/historico/historico.component';
import { DemandasComponent } from './pages/demandas/demandas.component';
import { NgModule } from '@angular/core';
import { AddHorariosComponent } from './pages/add-horarios/add-horarios.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    
    {
        path: "home",
        component: HomeComponent
    },
    { path: "historico", 
    
        component: HistoricoComponent },

    {
       path: "demandas",
    component: DemandasComponent
    },
    {
       path: "horarios",
      component:HorariosComponent
    },
    {
        path: "add-horarios",
        component: AddHorariosComponent
    },
    { path: '', redirectTo: '/demandas', pathMatch: 'full' }
    
    
// {
//     path: "pessoa",
//     component:
// }

      
     

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }