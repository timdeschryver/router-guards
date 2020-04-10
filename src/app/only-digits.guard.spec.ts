import { TestBed } from '@angular/core/testing';

import { OnlyDigitsGuard } from './only-digits.guard';

describe('OnlyDigitsGuard', () => {
  let guard: OnlyDigitsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OnlyDigitsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
