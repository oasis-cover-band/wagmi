import { TestBed } from '@angular/core/testing';

import { IsAccountService } from './is-account.service';

describe('IsAccountService', () => {
  let service: IsAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
