import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DiceService } from '../dice.service';

@Component({
  selector: 'app-ability-roller',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ability-roller.component.html',
  styleUrls: ['./ability-roller.component.css']
})
export class AbilityRollerComponent implements OnInit {
  sides: number = 6;
  rollResult: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private diceService: DiceService
  ) {}

  ngOnInit(): void {
    const routeSides = this.route.snapshot.paramMap.get('sides');
    const parsed = Number(routeSides);

    if (!routeSides || isNaN(parsed) || !Number.isInteger(parsed) || parsed < 2) {
      this.sides = 6;
      console.warn(`Invalid sides parameter "${routeSides}". Defaulting to 6.`);
    } else {
      this.sides = parsed;
    }
  }

  rollAbility(): void {
    this.rollResult = this.diceService.roll(this.sides);
  }
}
