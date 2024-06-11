import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path:"",redirectTo:'home',pathMatch:"full"},//default
  { path: 'home', component: HomeComponent },
  { path: 'contact',component:ContactComponent},
  { path: 'product',component:ProductComponent},
  { path: 'about',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
