import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-down',
  templateUrl: './down.component.html',
  styleUrls: ['./down.component.css']
})
export class DownComponent {
  constructor(public counterService: CounterService) {
  }

  public decrease(){
    this.counterService.decreaseCounter();
  }
}
