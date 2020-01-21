import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';
import { Injectable } from '@angular/core';

@Injectable()
export class PersonasService {
    personas: Persona[] = [
        new Persona('Juan', 'Perez'),
        new Persona('Laura', 'Juarez')
    ];

    constructor(private loggingService: LoggingService) {}

    agregarPersona(persona: Persona) {
        this.loggingService.enviaMensajeAConsola(`agregamos persona ${persona.nombre}`);
        this.personas.push(persona);
      }
}