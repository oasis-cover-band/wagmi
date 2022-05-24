import { TestBed } from '@angular/core/testing';

import { SubgraphService } from './subgraph.service';

describe('SubgraphService', () => {
  let service: SubgraphService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubgraphService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
