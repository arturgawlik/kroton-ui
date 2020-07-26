import { TestBed } from '@angular/core/testing';

import { UnAuthorizedShellGuard } from './un-authorized-shell.guard';

describe('AuthorizedShellGuard', () => {
  let guard: UnAuthorizedShellGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UnAuthorizedShellGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
