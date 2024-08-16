import { Component } from '@angular/core';
import { DemandasService } from '../demandas/demandas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrl: './historico.component.scss'
})
export class HistoricoComponent {
historyData: any;
searchTerm: string = '';
filteredEntries = []; // Substitua pelo seu array de entradas filtradas

entries: any[] = [];
  demandasService: any;

  constructor(private  router: Router, demandasService: DemandasService) { }

  ngOnInit() {
    this.entries = this.demandasService.getDemandas();
    const savedData = localStorage.getItem('savedData');
    if (savedData) {
      this.historyData = JSON.parse(savedData);
  }
  }
  goBack() {
    console.log('Botão de voltar clicado');
    this.router.navigate(['/demandas']);
  }

onSearch(event: Event) {
  const input = event.target as HTMLInputElement;
  this.searchTerm = input.value;
}


toggleDetails(entry: any) {
  entry.showDetails = !entry.showDetails;
  // Atualiza diretamente a visibilidade no DOM
  const detailsElement = document.getElementById(entry.date);
  if (detailsElement) {
    detailsElement.style.display = entry.showDetails ? 'block' : 'none';
  }
}

  

}
