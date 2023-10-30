import { Injectable } from '@angular/core';

const DEFAULT_COUNTER_NUMBER = 0;
const ACTIONS_THRESHOLD = 30;
@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counter: number;
  private actionNumber =0;
  private multiplier = 1;
  private lastAction: LastAction = LastAction.undefined;
  constructor() {
    const storedCounter = localStorage.getItem('contador');
    this.counter = storedCounter ? parseInt(storedCounter, 10) : DEFAULT_COUNTER_NUMBER;
  }

  public increaseCounter() {
    if (this.lastAction === LastAction.decrease) {
      this.resetActionNumber();
      this.resetMultiplier();
    }
    this.manageMultiplier();
    this.counter+=this.multiplier;
    this.lastAction = LastAction.increase;

    localStorage.setItem('contador', this.counter.toString());
  }

  public decreaseCounter() {
    if (this.lastAction === LastAction.increase) {
      this.resetActionNumber();
      this.resetMultiplier();
    }
    this.manageMultiplier();
    this.counter-=this.multiplier;
    this.lastAction = LastAction.decrease;

    localStorage.setItem('contador', this.counter.toString());
  }

  public manageMultiplier(){
    if (this.actionNumber < ACTIONS_THRESHOLD){
      this.actionNumber++;
    }else {
      this.multiplier*=2;
      this.resetActionNumber();
    }
  }

  public resetCounter() {
    this.counter = DEFAULT_COUNTER_NUMBER;

    localStorage.setItem('contador', this.counter.toString());
  }

  public resetMultiplier() {
    this.multiplier = 1;
  }

  public resetActionNumber() {
    this.actionNumber = 0;
  }

  public getCount(): number{
    return this.counter;
  }
}

export enum LastAction {
  increase,
  decrease,
  undefined
}
