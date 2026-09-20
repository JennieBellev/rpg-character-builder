import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { CharacterProfileComponent } from './character-profile.component';

describe('CharacterProfileComponent', () => {
  let component: CharacterProfileComponent;
  let fixture: ComponentFixture<CharacterProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterProfileComponent, ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test 1: Invalid initial state
  it('should have an invalid form on initial load', () => {
    expect(component.profileForm.valid).toBeFalse();
  });

  // Test 2: Valid state after input
  it('should be valid when required fields are filled', () => {
    component.profileForm.controls['backstory'].setValue('Raised near the old forest.');
    component.profileForm.controls['alignment'].setValue('Neutral Good');
    component.profileForm.controls['homeland'].setValue('Northreach');

    // Simulate checking the first skill box (Arcana)
    component.skillsArray.at(0).setValue(true);

    expect(component.profileForm.valid).toBeTrue();
  });

  // Test 3: Skill transformation
  it('should transform boolean array into skill labels on submit', () => {
    component.profileForm.controls['backstory'].setValue('Raised near the old forest.');
    component.profileForm.controls['alignment'].setValue('Neutral Good');
    component.profileForm.controls['homeland'].setValue('Northreach');

    // Check 'Arcana' (index 0) and 'Athletics' (index 2)
    component.skillsArray.at(0).setValue(true);
    component.skillsArray.at(2).setValue(true);

    // Runs the submit function
    component.onSubmit();

    // Check that the data was transformed from [true, false, true, false] to words
    expect(component.profiles.length).toBe(1);
    expect(component.profiles[0].skills).toEqual(['Arcana', 'Athletics']);
  });

  // Test 4: Stored rendered output
  it('should display the saved profile in the DOM', () => {
    // Manually push a profile into the array
    component.profiles.push({
      backstory: 'Raised near the old forest.',
      alignment: 'Neutral Good',
      homeland: 'Northreach',
      skills: ['Arcana', 'Survival']
    });

    // Tell Angular to update the HTML screen
    fixture.detectChanges();

    // Grab the profile list container from the HTML
    const profileList = fixture.debugElement.query(By.css('#profile-list')).nativeElement;

    // Prove the data is actually showing up on the page
    expect(profileList.textContent).toContain('Northreach');
    expect(profileList.textContent).toContain('Arcana, Survival');
  });
});
