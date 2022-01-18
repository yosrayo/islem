import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutsComponent } from './layout/admin-layouts/admin-layouts.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgetPass',      component: ForgetPasswordComponent },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
   {
    path: '',
    component: AdminLayoutsComponent,
    children: [
      {
        path: '',

        loadChildren: () => import('./layout/admin-layouts/admin-layouts.module').then(mod => mod.AdminLayoutsModule),
      }]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
