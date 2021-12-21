import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactivefrmComponent } from './reactivefrm/reactivefrm.component';


const routes: Routes = [
  {path: "home", component:HomeComponent},
  {path: "form", component:FormComponent},
  {path: "templatefrm", component:TemplateformComponent},
  {path: "reactivefrm", component: ReactivefrmComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
