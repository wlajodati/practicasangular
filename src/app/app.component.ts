import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejemplo pipes y routing';
  informacion:any = [{codigo: 1, nombre: "Wladimir", apellido: "De Araujo", dni: "99543345", texto: "Donec hendrerit dignissim nibh, vel imperdiet augue lobortis ac. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque."},
  {codigo: 2, nombre: "Alejandro", apellido: "De Araujo", dni: "99532435", texto: "Nulla vehicula dapibus dolor at pretium. Curabitur sed luctus nisi, ut pulvinar leo. Vestibulum arcu lectus, ultricies vitae scelerisque eu."}];
}
