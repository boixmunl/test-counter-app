import { TestBed } from '@angular/core/testing';

import { CounterService } from './counter.service';

describe('CounterService', () => {
  let service: CounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should increase counter', () => {
    service.increaseCounter();
    expect(service.getCount()).toBe(1); // Assuming DEFAULT_COUNTER_NUMBER is 1
  });

  it('should increase x2 counter after 30 increases ', () => {
    for (let i = 0; i < 30; i++) {
      service.increaseCounter();
    }
    expect(service.getCount()).toBe(30);
    service.increaseCounter();
    expect(service.getCount()).toBe(32); // Assuming DEFAULT_COUNTER_NUMBER is 1
  });

  it('should decrease counter', () => {
    service.decreaseCounter();
    expect(service.getCount()).toBe(-1);
  });

  it('should decrease x2 counter after 30 decreases ', () => {
    for (let i = 0; i < 30; i++) {
      service.decreaseCounter();
    }
    expect(service.getCount()).toBe(-30);
    service.decreaseCounter();
    expect(service.getCount()).toBe(-32); // Assuming DEFAULT_COUNTER_NUMBER is 1
  });

  it('should reset counter', () => {
    service.increaseCounter();
    service.resetCounter();
    expect(service.getCount()).toBe(0);
  });
});
