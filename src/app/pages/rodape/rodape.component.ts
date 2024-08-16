import { Component } from '@angular/core';

@Component({
  selector: 'app-rodape',
 
  templateUrl: './rodape.component.html',
  styleUrl: './rodape.component.scss'
})
export class RodapeComponent {
  activeIcon: string = '';
  setActiveIcon(icon: string): void {
    this.activeIcon = icon;
  }
}
