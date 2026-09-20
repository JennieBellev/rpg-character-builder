import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { CharacterProfile, ProfileOption } from '../models/character-profile';

@Component({
  selector: 'app-character-profile',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './character-profile.component.html',
  styleUrl: './character-profile.component.css'
})
export class CharacterProfileComponent {
  profileForm: FormGroup;
  profiles: CharacterProfile[] = [];

  // 1. Typed option data for the form
  homelands: ProfileOption[] = [
    { id: 'h1', label: 'Northreach' },
    { id: 'h2', label: 'Sun-scorched Sands' },
    { id: 'h3', label: 'Eldergrove' }
  ];

  skills: ProfileOption[] = [
    { id: 's1', label: 'Arcana' },
    { id: 's2', label: 'Survival' },
    { id: 's3', label: 'Athletics' },
    { id: 's4', label: 'Stealth' }
  ];

  constructor(private fb: FormBuilder) {
    // 2. Building the Reactive Form
    this.profileForm = this.fb.group({
      backstory: ['', Validators.required],
      alignment: ['', Validators.required],
      homeland: ['', Validators.required],
      // 3. The FormArray for dynamic checkboxes
      skills: this.fb.array(
        this.skills.map(() => this.fb.control(false))
      )
    });
  }

  // 4. A helper to easily grab the skills array for the HTML later
  get skillsArray() {
    return this.profileForm.get('skills') as FormArray;
  }
  onSubmit() {
    // Only proceed if the form has no errors
    if (this.profileForm.valid) {

      // Get the raw data from the form
      const formValues = this.profileForm.value;

      // Transform the [true, false, true] array into actual skill labels
      const selectedSkills = formValues.skills
        .map((isChecked: boolean, index: number) => isChecked ? this.skills[index].label : null)
        .filter((skill: string | null) => skill !== null);

      // Assemble the final, clean CharacterProfile object
      const newProfile: CharacterProfile = {
        backstory: formValues.backstory,
        alignment: formValues.alignment,
        homeland: formValues.homeland,
        skills: selectedSkills
      };

      // Save it to the profiles array and clear the form for the next user
      this.profiles.push(newProfile);
      this.profileForm.reset();
    }
  }
}
