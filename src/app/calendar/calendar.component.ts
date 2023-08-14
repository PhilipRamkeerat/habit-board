import { Component, OnInit } from '@angular/core';
import { HabitsService } from '../habits.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  dates: string[] = [];

  constructor(private habitsService: HabitsService) { }

  ngOnInit(): void {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    // getMonth() retorna de 0 a 11
    const currentMonth = currentDate.getMonth() + 1;

    // O último dia do mês anterior é o total de dias do mês atual
    const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();

    for (let j = 1; j <= daysInMonth; j++) {
      this.dates.push(`${currentYear}-${currentMonth.toString().padStart(2, '0')}-${j.toString().padStart(2, '0')}`);
    }
  }

  mark(habit: 'minoxidil' | 'english', date: string) {
    this.habitsService.markHabit(habit, date);
  }

  check(habit: 'minoxidil' | 'english', date: string): boolean {
    return this.habitsService.checkHabit(habit, date);
  }

}
