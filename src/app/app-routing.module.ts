import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { UserpostComponent } from './userpost/userpost.component';

const routes: Routes = [
  {path:"", component:HomepageComponent},
  {path:"homepage",component:HomepageComponent},
  {path:"userpost",component:UserpostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
