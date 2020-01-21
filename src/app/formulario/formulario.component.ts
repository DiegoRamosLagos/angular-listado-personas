import { Persona } from './../persona.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  // Vamos a enviar información al componente padre
  @Output() personaCreada = new EventEmitter<Persona>(); // Debe ser de @angular/core
  nombreInput: string;
  apellidoInput: string;

  constructor() { }

  ngOnInit() {
  }

  onAgregarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    // Para agregar la persona debemos informárselo a nuestra clase padre App component
    this.personaCreada.emit(persona1);
  }

}
