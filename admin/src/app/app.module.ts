import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiProvider } from '../providers/utilities/utility';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './pages/header/header.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { FooterComponent } from './pages/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SubscriberComponent } from './pages/subscriber/subscriber.component';
import {DataTablesModule} from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    SubscriberComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  providers: [
    ApiProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
