import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyPart1Component } from './body-part1/body-part1.component';
import { BodyPart2Component } from './body-part2/body-part2.component';
import { BodyPart3Component } from './body-part3/body-part3.component';
import { BodyPart4Component } from './body-part4/body-part4.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';
import { HistoriaComponent } from './historia/historia.component';
import { HistoricosComponent } from './historicos/historicos.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DetallesComponent } from './detalles/detalles.component';
import { AuthService } from './core/auth.service';
import { CheckoutComponent } from './checkout/checkout.component';
import { ForoComponent } from './foro/foro.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyPart1Component,
    BodyPart2Component,
    BodyPart3Component,
    BodyPart4Component,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    DetailsComponent,
    HistoriaComponent,
    HistoricosComponent,
    PerfilComponent,
    DetallesComponent,
    CheckoutComponent,
    ForoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MglTimelineModule,
    SweetAlert2Module,
    SweetAlert2Module.forRoot(),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
