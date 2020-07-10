import { TestBed } from '@angular/core/testing';

import { AuthorizedShellGuard } from './authorized-shell.guard';

describe('AuthorizedShellGuard', () => {
  let guard: AuthorizedShellGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthorizedShellGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
