import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { GestionActComponent } from './componentes/gestion-act/gestion-act.component';
import { EstadisticasComponent } from './componentes/estadisticas/estadisticas.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:' ',component:HomeComponent},
  {path:'gestionar',component:GestionActComponent },
  {path:'estadisticas',component:EstadisticasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
