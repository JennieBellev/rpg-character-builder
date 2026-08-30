import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { AbilityRollerComponent } from './ability-roller.component';
import { DiceService } from '../dice.service';

describe('AbilityRollerComponent', () => {
  let component: AbilityRollerComponent;
  let fixture: ComponentFixture<AbilityRollerComponent>;
  let diceServiceSpy: jasmine.SpyObj<DiceService>;

  const setupComponent = (paramSides: string | null) => {
    diceServiceSpy = jasmine.createSpyObj('DiceService', ['roll']);
    diceServiceSpy.roll.and.returnValue(4);

    TestBed.configureTestingModule({
      imports: [AbilityRollerComponent],
      providers: [
        { provide: DiceService, useValue: diceServiceSpy },
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({
              get: (key: string) => (key === 'sides' ? paramSides : null)
            }),
            snapshot: {
              paramMap: {
                get: (key: string) => (key === 'sides' ? paramSides : null)
              }
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AbilityRollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  };

  // Test 3: The component calls a spied DiceService
  it('should call DiceService.roll when roll button is clicked', () => {
    setupComponent('20');
    const button = fixture.nativeElement.querySelector('[data-testid="roll-button"]');
    button.click();
    fixture.detectChanges();

    expect(diceServiceSpy.roll).toHaveBeenCalledWith(20);
    const resultElement = fixture.nativeElement.querySelector('[data-testid="roll-result"]');
    expect(resultElement.textContent).toContain('4');
  });

  // Test 4: Invalid route input uses 6 and writes one warning
  it('should default to 6 and log console.warn on invalid route param', () => {
    spyOn(console, 'warn');
    setupComponent('invalid-sides');

    expect(component.sides).toBe(6);
    expect(console.warn).toHaveBeenCalledTimes(1);

    component.rollAbility();
    expect(diceServiceSpy.roll).toHaveBeenCalledWith(6);
  });
});
