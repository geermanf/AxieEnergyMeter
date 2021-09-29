import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-meter',
  templateUrl: './meter.component.html',
  styleUrls: ['./app.component.css'],
})
export class MeterComponent {
  @ViewChild('energyMeter')
  energyMeter!: ElementRef;
  @ViewChild('slpMeter')
  slpMeter!: ElementRef;

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
    this.round++;
  }

  newMatch() {
    this.round = 1;
    this.energy = 3;
  }

  addSLP(quantity: number) {
    this.slp = this.slp + quantity;
    this.wins++;
  }

  scrollToBottom(): void {
    window.scrollTo(0,document.body.scrollHeight);
  }

  scrollToTop(): void {
    var limit = Math.max( document.body.scrollHeight, document.body.offsetHeight, 
      document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );

    window.scrollTo(0,0);
  }
}
