import { Component } from '@angular/core';

@Component({
  selector: 'app-meter',
  templateUrl: './meter.component.html',
  styleUrls: ['./app.component.css']
})
export class MeterComponent {
  title = 'ContadorEnergia';
  energy: number = 3;
  round: number = 1;
  slp: number = 0;
  wins: number = 0;

  addEnergy(quantity: number) {
    this.energy = this.energy + quantity;
  }

  removeEnergy(quantity: number) {
    this.energy = this.energy - quantity;
  }

  nextRound() {
    this.addEnergy(2);
    this.round ++;
  }

  newMatch() {
    this.round = 1;
    this.energy = 3;
  }

  addSLP(quantity: number) {
    this.slp = this.slp + quantity;
    this.wins ++;
  }

}
