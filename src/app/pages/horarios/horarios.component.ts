import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-horarios',
  standalone: true,
  imports: [MatSlideToggleModule],
  templateUrl: './horarios.component.html',
  styleUrl: './horarios.component.scss'
})
export class HorariosComponent {
  activeIcon: string = 'relogio';
  searchTerm: string = ''; 
  constructor(private router: Router) {}

  setActiveIcon(icon: string): void {
    this.activeIcon = icon;
  }

  onSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchTerm = input.value;
  }
  irParaOutraPagina() {
    this.router.navigate(['/add-horarios']); // Substitua '/outra-pagina' pela rota desejada
  }
}
