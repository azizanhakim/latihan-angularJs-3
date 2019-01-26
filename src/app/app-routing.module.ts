import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './teman/home/home.component';
import { ContactUsComponent } from './teman/contact-us/contact-us.component';
import { HeaderComponent } from './teman/header/header.component';
import { PageNotFoundComponent } from './teman/page-not-found/page-not-found.component';
import { TemanComponent } from './teman/teman.component';
import { AnggotaComponent } from './teman/anggota/anggota.component';
import { PenerbitComponent} from './teman/penerbit/penerbit.component';
import { AuthGuardService } from './teman/auth/auth-guard.service'


const routes: Routes = [
  {path : 'home', component: HomeComponent},
  {path : 'teman', component : TemanComponent},
  {path : 'contact-us', component : ContactUsComponent},
  {path : 'anggota', component : AnggotaComponent, canActivate: [AuthGuardService]},
  {path : 'penerbit', component : PenerbitComponent, canActivate: [AuthGuardService]},
  {path : 'anggota-edit/:id', component : AnggotaComponent, canActivate: [AuthGuardService]},
  {path : 'penerbit-edit/:id', component : PenerbitComponent, canActivate: [AuthGuardService]},
  {path : '404-not-found', component : PageNotFoundComponent, canActivate: [AuthGuardService]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
