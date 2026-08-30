import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  welcomeMessage: string = 'Build the hero behind your next adventure';
  subTitle: string = 'Choose a class, establish abilities, and record a profile.';
}
