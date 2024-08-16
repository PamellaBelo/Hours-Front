import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DemandasService } from './demandas.service';

@Component({
  selector: 'app-demandas',
  
  templateUrl: './demandas.component.html',
  styleUrl: './demandas.component.scss'
})
export class DemandasComponent {
  activeIcon: string = 'lista';
  selectedPeriod: string = '';
  selectedImpediment: string = '';
  data: any = {}; // Para armazenar dados
  date: string = '';
  period: string = '';
  details: string = '';
  demandasService: any;

  @ViewChild('dateInput') dateInput!: ElementRef;
  @ViewChild('periodInput') periodInput!: ElementRef;
  @ViewChild('detailsInput') detailsInput!: ElementRef;

  constructor(private router: Router, demandasService: DemandasService) {}

  setActiveIcon(icon: string): void {
    this.activeIcon = icon;
  }

  saveData() {
    const date = (this.dateInput.nativeElement as HTMLInputElement).value;
    const period = (this.periodInput.nativeElement as HTMLInputElement).value;
    const details = (this.detailsInput.nativeElement as HTMLTextAreaElement).value;

    if (date && period && details) {
      const newDemanda = {
        date,
        period,
        details,
        showDetails: false // Inicialmente, detalhes não são mostrados
      };
      this.demandasService.addDemanda(newDemanda);

      // Optionally, you could navigate to the history page here
      // this.router.navigate(['/historico']);

      // Clear form fields after saving
      (this.dateInput.nativeElement as HTMLInputElement).value = '';
      (this.periodInput.nativeElement as HTMLInputElement).value = '';
      (this.detailsInput.nativeElement as HTMLTextAreaElement).value = '';
    } else {
      alert('Preencha todos os campos.');
    }
  }

  goToHistory(): void {
    this.router.navigate(['/history']);
  }

  selectPeriod(period: string): void {
    this.selectedPeriod = period;
  }

  selectImpediment(impediment: string): void {
    this.selectedImpediment = impediment;
  }


  updateButtonStates() {
    // Atualiza a aparência dos botões com base na seleção atual
    const periodButtons = document.querySelectorAll('.period-button');
    periodButtons.forEach(button => {
      button.classList.toggle('active', (button as HTMLButtonElement).innerText.toLowerCase() === this.selectedPeriod);
    });

    const impedimentButtons = document.querySelectorAll('.impediment-button');
    impedimentButtons.forEach(button => {
      button.classList.toggle('selected', (button as HTMLButtonElement).innerText.toLowerCase() === this.selectedImpediment);
    });
  }


}

