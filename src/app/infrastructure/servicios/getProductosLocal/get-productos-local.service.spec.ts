import { TestBed } from '@angular/core/testing';

import { GetProductosLocalService } from './get-productos-local.service';

describe('GetProductosLocalService', () => {
  let service: GetProductosLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetProductosLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
