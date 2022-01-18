import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLayoutsComponent } from './layout/admin-layouts/admin-layouts.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';





@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutsComponent,
    LoginComponent,
    RegisterComponent,
    SidebarComponent,
    FooterComponent,
    ForgetPasswordComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
   

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
