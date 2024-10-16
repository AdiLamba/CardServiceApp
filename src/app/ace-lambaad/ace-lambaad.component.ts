import { Component } from '@angular/core';
import { CardLambaadService } from '../card-lambaad.service';

@Component({
  selector: 'app-ace-lambaad',
  templateUrl: './ace-lambaad.component.html',
  styleUrl: './ace-lambaad.component.css'
})
export class AceLambaadComponent {

  lambaadTitle : string = "Ace of Spades";
  lambaadSuit : string = "Spades";
  lambaadImage : string = "./assets/images/ace.png";
  lambaadDegree : number = 60;
  lambaadZero : number = 0;
  lambaadPlaceholder : number = 0;

  constructor (private cardService : CardLambaadService) {}
/*
  lambaadRotate() {
    this.lambaadZero += this.lambaadDegree;
    this.cardService.lambaadChanges('ace', this.lambaadZero);
  }

  lambaadReset(){
    this.lambaadZero = 0;
    this.cardService.lambaadChanges('ace', this.lambaadZero);
  }*/

  lambaadRotate(lambaadPlaceholder : number){
    if (lambaadPlaceholder === 0) {
      this.lambaadPlaceholder = this.lambaadZero;
    } else {
      this.lambaadPlaceholder += this.lambaadDegree;
    }
    this.cardService.lambaadChanges(this.lambaadSuit, this.lambaadPlaceholder);
  }
}
