import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CharacterClass } from '../models/character-class';

@Component({
  selector: 'app-classes',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.css'
})
export class ClassesComponent {
  characterClasses: CharacterClass[] = [
    { id: 'fighter', name: 'Fighter', description: 'Durable melee' },
    { id: 'wizard', name: 'Wizard', description: 'Arcane magic' },
    { id: 'rogue', name: 'Rogue', description: 'Stealth' }
  ];
}
