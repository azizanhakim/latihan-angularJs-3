import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemanComponent } from './teman/teman.component';
import { TemanAddComponent } from './teman/teman-add/teman-add.component';
import { TemanListComponent } from './teman/teman-list/teman-list.component';
import { HoverHighlightDirective } from './hover-highlight.directive';
import { ContactUsComponent } from './teman/contact-us/contact-us.component';
import { HeaderComponent } from './teman/header/header.component';
import { PageNotFoundComponent } from './teman/page-not-found/page-not-found.component';
import { HomeComponent } from './teman/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AnggotaComponent } from './teman/anggota/anggota.component';
import { AnggotaListComponent } from './teman/anggota/anggota-list/anggota-list.component';
import { PenerbitComponent } from './teman/penerbit/penerbit.component';
import { PenerbitListComponent } from './teman/penerbit/penerbit-list/penerbit-list.component';
import { PenerbitAddComponent } from './teman/penerbit/penerbit-add/penerbit-add.component';
import { AnggotaAddComponent } from './teman/anggota/anggota-add/anggota-add.component';
import { AuthService } from './teman/auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    TemanComponent,
    TemanAddComponent,
    TemanListComponent,
    HoverHighlightDirective,
    ContactUsComponent,
    HeaderComponent,
    PageNotFoundComponent,
    HomeComponent,
    AnggotaComponent,
    AnggotaListComponent,
    PenerbitComponent,
    PenerbitListComponent,
    PenerbitAddComponent,
    AnggotaAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
