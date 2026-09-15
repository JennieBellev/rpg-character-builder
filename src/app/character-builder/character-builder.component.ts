import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Character } from '../models/character';

@Component({
  selector: 'app-character-builder',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './character-builder.component.html',
  styleUrl: './character-builder.component.css'
})
export class CharacterBuilderComponent {
// Holds all the submitted characters
  characters: Character[] = [];

  // The current state of the form
  characterModel: Character = {
    name: '',
    characterClass: '',
    level: 1,
    veteran: false,
    startingHitPoints: 0
  };
  onSubmit() {
    // Calculate the hit points based on the lab requirements
    this.characterModel.startingHitPoints = this.characterModel.level + 10;

    // Push a copy of the character to the array
    this.characters.push({ ...this.characterModel });

    // Reset the form model back to default
    this.characterModel = {
      name: '',
      characterClass: '',
      level: 1,
      veteran: false,
      startingHitPoints: 0
    };
  }
}
