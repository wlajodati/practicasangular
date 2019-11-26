import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormatonombrePipe } from './formatonombre.pipe';
import { Componente0Component } from './componente0/componente0.component';
import { Componente1Component } from './componente1/componente1.component';
import { Componente2Component } from './componente2/componente2.component';
import { ComponenteDetalleComponent } from './componente-detalle/componente-detalle.component';
import { Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: '', component: Componente0Component},
  {path: 'componente1', component: Componente1Component},
  {path: 'componente2', component: Componente2Component},
  {path: 'componente1/:id', component: Componente1Component},
  {path: 'componente2/:id/:titulo', component: Componente2Component}
];

@NgModule({
  declarations: [
    AppComponent,
    FormatonombrePipe,
    Componente0Component,
    Componente1Component,
    Componente2Component,
    ComponenteDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
