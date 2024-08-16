import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemandasService {
  private demandas: any[] = [];

  constructor() { }

  addDemanda(demanda: any) {
    this.demandas.push(demanda);
  }

  getDemandas() {
    return this.demandas;
  }
}
