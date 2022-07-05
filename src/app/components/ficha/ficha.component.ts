import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.css'],
})
export class FichaComponent implements OnInit {
  nombre: string = '';
  imagen: string = '';

  constructor(private rutaActiva: ActivatedRoute) {}

  ngOnInit(): void {
    this.rutaActiva.params.subscribe((params: Params) => {
      const personaje: any = params;
      console.log('params: ', params);

      this.nombre = personaje.nombre;
      console.log(this.nombre);
    });
  }
}
