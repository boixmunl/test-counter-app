import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-up',
  templateUrl: './up.component.html',
  styleUrls: ['./up.component.css']
})
export class UpComponent {

  constructor(public counterService: CounterService) {
  }

  public increase(){
    this.counterService.increaseCounter();
  }
}
