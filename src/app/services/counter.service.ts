import { Injectable } from '@angular/core';

const DEFAULT_COUNTER_NUMBER = 0;
const ACTIONS_THRESHOLD = 30;
@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counter: number = DEFAULT_COUNTER_NUMBER;
  private actionNumber =0;
  private multiplier = 1;
  private lastAction: LastAction = LastAction.undefined;
  constructor() { }

  public increaseCounter() {
    if (this.lastAction === LastAction.decrease) {
      this.resetActionNumber();
      this.resetMultiplier();
    }
    this.manageMultiplier();
    this.counter+=this.multiplier;
    this.lastAction = LastAction.increase;
  }

  public decreaseCounter() {
    if (this.lastAction === LastAction.increase) {
      this.resetActionNumber();
      this.resetMultiplier();
    }
    this.manageMultiplier();
    this.counter-=this.multiplier;
    this.lastAction = LastAction.decrease;
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
