import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import routes
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { HistoriaComponent } from './historia/historia.component';
import { HistoricosComponent } from './historicos/historicos.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DetallesComponent } from './detalles/detalles.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ForoComponent } from './foro/foro.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'historia', component: HistoriaComponent },
  { path: 'historicos', component: HistoricosComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'historicos/detalles', component: DetallesComponent },
  { path: 'home/checkout/:id', component: CheckoutComponent },
  { path: 'foro', component: ForoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
