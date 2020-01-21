import { PersonasService } from './../personas.service';
import { LoggingService } from './../LoggingService.service';
import { Persona } from './../persona.model';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  // Vamos a enviar información al componente padre
  // @Output() personaCreada = new EventEmitter<Persona>(); // Debe ser de @angular/core
  // nombreInput: string;
  // apellidoInput: string;

  @ViewChild('nombreInput') nombreInput: ElementRef;
  @ViewChild('apellidoInput') apellidoInput: ElementRef;

  constructor(private loggingService: LoggingService,
              private personasService: PersonasService) { }

  ngOnInit() {
  }

  onAgregarPersona(){
    // Estamos usando referencia local con viewChild
    const persona1 = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
    // Para agregar la persona debemos informárselo a nuestra clase padre App component
    // this.loggingService.enviaMensajeAConsola(`enviamos persona ${persona1.nombre} ${persona1.apellido}`);
    // this.personaCreada.emit(persona1);
    this.personasService.agregarPersona(persona1);
  }

}
