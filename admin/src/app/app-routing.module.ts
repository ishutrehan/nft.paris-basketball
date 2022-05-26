import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SubscriberComponent } from './pages/subscriber/subscriber.component';



const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'login', component: LoginComponent},
  { path: 'subscribers', component: SubscriberComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
