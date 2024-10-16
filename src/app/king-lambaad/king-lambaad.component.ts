import { Component } from '@angular/core';
import { CardLambaadService } from '../card-lambaad.service';

@Component({
  selector: 'app-king-lambaad',
  templateUrl: './king-lambaad.component.html',
  styleUrl: './king-lambaad.component.css'
})
export class KingLambaadComponent {

  lambaadTitle : string = "King of Diamonds";
  lambaadSuit : string = "Diamonds";
  lambaadImage : string = "./assets/images/king.png";
  lambaadDegree : number = 120;
  lambaadZero : number = 0;
  lambaadPlaceholder : number = 0;

  constructor(private cardService : CardLambaadService) {}

  /*lambaadRotate() {

    this.lambaadZero += this.lambaadDegree;
    this.cardService.lambaadChanges('king', this.lambaadZero);
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

