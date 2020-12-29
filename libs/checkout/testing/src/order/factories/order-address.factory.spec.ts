import { TestBed } from '@angular/core/testing';

import { DaffOrderAddressFactory } from './order-address.factory';
import { DaffOrderAddress } from '@daffodil/checkout';

describe('Checkout | Testing | Order | Factories | OrderAddressFactory', () => {

  let orderAddressFactory: DaffOrderAddressFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffOrderAddressFactory]
    });

    orderAddressFactory = TestBed.inject(DaffOrderAddressFactory);
  });

  it('should be created', () => {
    expect(orderAddressFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffOrderAddress;

    beforeEach(() => {
      result = orderAddressFactory.create();
    });

    xit('should return a DaffOrderAddress with all required fields defined', () => {

    });
  });

  describe('createMany', () => {
    let result: DaffOrderAddress[];

    it('should create as many order addresses as desired', () => {
      result = orderAddressFactory.createMany(2);
      expect(result.length).toEqual(2);

      result = orderAddressFactory.createMany(3);
      expect(result.length).toEqual(3);
    })
  })
});
