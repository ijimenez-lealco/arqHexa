import { TestBed } from '@angular/core/testing';

import { GetProductosStrapiService } from './get-productos-strapi.service';

describe('GetProductosStrapiService', () => {
  let service: GetProductosStrapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetProductosStrapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
