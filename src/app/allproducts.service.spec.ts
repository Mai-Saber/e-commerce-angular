import { TestBed } from '@angular/core/testing';

import { AllProductsService } from './allproducts.service';

describe('AllproductsService', () => {
  let service: AllProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
