import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PersonajeService {
  personajes = [
    {
      nombre: 'Mario',
      img: './assets/img/mario.png',
    },
    {
      nombre: 'Link',
      img: './assets/img/link.png',
    },
    {
      nombre: 'Falco',
      img: './assets/img/falco.png',
    },
    {
      nombre: 'Megaman',
      img: './assets/img/megaman.png',
    },
    {
      nombre: 'Alph',
      img: './assets/img/Alph.webp',
    },
    {
      nombre: 'Ness',
      img: './assets/img/Ness.webp',
    },
  ];

  constructor() {}

  get(nombre: string): any {
    //let personaje = this.personajes[1];
    let personaje = this.personajes.find(
      (n) => n.nombre.toLowerCase() == nombre.toLowerCase()
    );
    console.log(personaje);

    return personaje;
  }
}
