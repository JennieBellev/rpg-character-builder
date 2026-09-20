import { AbilityRollerComponent } from './ability-roller/ability-roller.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClassesComponent } from './classes/classes.component';
import { ClassDetailComponent } from './class-detail/class-detail.component';
import { AboutComponent } from './about/about.component';
import { CharacterBuilderComponent } from './character-builder/character-builder.component';
import { CharacterProfileComponent } from './character-profile/character-profile.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'classes',
    component: ClassesComponent
  },
  {
    path: 'classes/:id',
    component: ClassDetailComponent
  },
  {
    path: 'character-builder',
    component: CharacterBuilderComponent
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'About the RPG Character Builder' }
  },
  { path: 'roll/:sides', component: AbilityRollerComponent },
  { path: 'roll', redirectTo: 'roll/6', pathMatch: 'full' },
  { path: 'builder', component: CharacterBuilderComponent },
  { path: 'profile', component: CharacterProfileComponent }
];
