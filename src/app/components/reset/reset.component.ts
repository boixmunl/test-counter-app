import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent {
  birthDate: string;
  today: Date = new Date();
  minAge = 18;

  constructor(public counterService: CounterService) {
    this.birthDate = '';
  }

  private parseDate(dateString: string): Date{
      return new Date(dateString);
  }

  resetCounter(): void {
    const birthDate = this.parseDate(this.birthDate)
    if (this.birthDate) {
      const age = this.calculateAge(birthDate);

      if (age >= this.minAge) {
        this.counterService.resetCounter();
        this.counterService.resetMultiplier();
      } else {
        alert('You must be over 18 years old to reset the counter.');
      }
    } else {
      alert('Enter your date of birth.');
    }
  }

  private calculateAge(birthDate: Date): number {
    const birthYear = birthDate.getFullYear();
    const currentYear = this.today.getFullYear();
    return currentYear - birthYear;
  }
}
