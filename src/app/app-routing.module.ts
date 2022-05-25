import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { Landing2Component } from './pages/landing2/landing2.component';


const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'landing-2', component: Landing2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
