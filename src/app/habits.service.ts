import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HabitsService {
  private habitsData: { minoxidil: string[], english: string[] } = {
    minoxidil: [],
    english: []
  }

  constructor() {
    const storedData = localStorage.getItem('habitsData');
    if (storedData) {
      this.habitsData = JSON.parse(storedData);
    }
  }

  markHabit(habit: 'minoxidil' | 'english', date: string) {
    if (this.habitsData[habit].includes(date)) {
      console.log('Foi removido por que a data já é existente');
      const index = this.habitsData[habit].indexOf(date);
      this.habitsData[habit].splice(index, 1);
    } else {
      console.log('Nova data não existente inserida');

      this.habitsData[habit].push(date);
    }
    localStorage.setItem('habitsData', JSON.stringify(this.habitsData));
  }

  checkHabit(habit: 'minoxidil' | 'english', date: string): boolean {
    return this.habitsData[habit].includes(date);
  }

  getHabits(): any {
    return this.habitsData;
  }
}
