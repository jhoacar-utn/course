import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiComponenteComponent } from './mi-componente/mi-componente.component';
import { LayoutComponent } from './layout/layout.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule(

  {
    declarations: [AppComponent, MiComponenteComponent, LayoutComponent, MainComponentComponent, NavComponentComponent, FooterComponentComponent, LoginComponent, RegisterComponent],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent]
  }

)


export class AppModule { }
