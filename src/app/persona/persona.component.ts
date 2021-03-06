import { PersonasService } from './../personas.service';
import { Persona } from './../persona.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  // Vamos a recibir información del componente padre
  @Input() persona: Persona;
  @Input() indice: number;

  constructor(private personasService: PersonasService) { }

  ngOnInit() {
  }

  emitirSaludo(){
    this.personasService.saludar.emit(this.indice);
  }

}
