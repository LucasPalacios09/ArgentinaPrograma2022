import { Component } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { PersonajeService } from 'src/services/personaje.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'IndiceDePersonajes';
  nombre: string = '';
  precio: number = 10;
  isDisabled: boolean = true;
  //servicio: PersonajeService;
  imagen: string = '';

  constructor(
    private servicio: PersonajeService
  ) //private authService: AuthService
  {}

  onClick() {
    alert(this.nombre);
  }

  habilitarDeshabilitar(): any {
    this.isDisabled = !this.isDisabled;
  }

  getPersonaje(nombre: string): any {
    let personaje = this.servicio.get(nombre);
    if (personaje != null && personaje != undefined) {
      this.nombre = personaje.nombre;
      this.imagen = personaje.img;
      alert(`El personaje es: ${personaje.nombre}`);
    } else {
      alert('El personaje que buscas aun no existe');
      this.nombre = '';
    }
  }

  // login(): boolean {
  //   return this.authService.logIn;
  // }

  // logout() {
  //   this.authService.logout();
  // }
}
