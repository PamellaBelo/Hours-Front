import { Component } from '@angular/core';


@Component({
  selector: 'app-home',

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  activeIcon: string = 'home';
 
 
  setActiveIcon(icon: string): void {
    this.activeIcon = icon;
  }

}