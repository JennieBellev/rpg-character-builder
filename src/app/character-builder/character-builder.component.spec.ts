import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CharacterBuilderComponent } from './character-builder.component';

describe('CharacterBuilderComponent', () => {
  let component: CharacterBuilderComponent;
  let fixture: ComponentFixture<CharacterBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterBuilderComponent, FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test 1: Two-way binding
  it('should establish two-way binding with default model values', () => {
    expect(component.characterModel.level).toBe(1);
    expect(component.characterModel.veteran).toBeFalse();
  });

  // Test 2: Invalid submission state
  it('should prevent invalid submission when required fields are empty', async () => {
    await fixture.whenStable();
    const formElement = fixture.debugElement.nativeElement.querySelector('form');
    // The form should be invalid because name and class are empty
    expect(formElement.checkValidity()).toBeFalse();
  });

  // Test 3: Stored output and calculated hit points
  it('should calculate starting hit points and store the character', () => {
    component.characterModel.name = 'Aria';
    component.characterModel.characterClass = 'Wizard';
    component.characterModel.level = 3;

    component.onSubmit();

    expect(component.characters.length).toBe(1);
    expect(component.characters[0].name).toBe('Aria');
    expect(component.characters[0].startingHitPoints).toBe(13); // 10 + 3
  });

  // Test 4: Reset behavior
  it('should reset the model state after a successful submission', () => {
    component.characterModel.name = 'Gimli';
    component.characterModel.level = 5;

    component.onSubmit();

    // Model should revert back to initial state
    expect(component.characterModel.name).toBe('');
    expect(component.characterModel.level).toBe(1);
  });
});
