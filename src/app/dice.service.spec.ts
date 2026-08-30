import { TestBed } from '@angular/core/testing';
import { DiceService } from './dice.service';

describe('DiceService', () => {
  let service: DiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Test 1: Service output remains inside the inclusive range
  it('should return an integer within the range 1 through sides inclusive', () => {
    const sides = 6;
    for (let i = 0; i < 50; i++) {
      const result = service.roll(sides);
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(sides);
      expect(Number.isInteger(result)).toBeTrue();
    }
  });

  // Test 2: Invalid service input throws RangeError
  it('should throw RangeError when sides is less than 2 or not an integer', () => {
    expect(() => service.roll(1)).toThrowError(RangeError);
    expect(() => service.roll(0)).toThrowError(RangeError);
    expect(() => service.roll(-4)).toThrowError(RangeError);
    expect(() => service.roll(3.5)).toThrowError(RangeError);
  });
});
