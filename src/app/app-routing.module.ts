import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { ProductosComponent } from './components/productos/productos.component';

const routes: Routes = [
  {path:'acercade',component:AcercadeComponent},
  {path:'productos',component:ProductosComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
