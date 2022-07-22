import { Component, OnInit } from '@angular/core';

interface Alumno {
  nombre:string,
  apellido:string,
  edad:number,
  curso:string,
  aprobado:boolean,
}

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  listAlumnos: Alumno [] = [
    { nombre: "Juan", apellido:"Perez", edad:19, curso:"Avanzado", aprobado:false },
    { nombre: "Luis", apellido:"Cepeda", edad:21, curso:"Básico", aprobado:false },
    { nombre: "Maria", apellido:"Latorre", edad:32, curso:"Avanzado", aprobado:true },
    { nombre: "Jocelyn", apellido:"Limada", edad:40, curso:"Avanzado", aprobado:false },
    { nombre: "Manuel", apellido:"Marcano", edad:25, curso:"Básico", aprobado:true },
    { nombre: "Francisco", apellido:"Mendoza", edad:44, curso:"Básico", aprobado:true },

  ]

}
