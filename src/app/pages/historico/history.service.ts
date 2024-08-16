import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private historyKey = 'history';

  constructor() { }

  getHistory(): any[] {
    const history = localStorage.getItem(this.historyKey);
    return history ? JSON.parse(history) : [];
  }

  addEntry(entry: any): void {
    const history = this.getHistory();
    history.push(entry);
    localStorage.setItem(this.historyKey, JSON.stringify(history));
  }
}
