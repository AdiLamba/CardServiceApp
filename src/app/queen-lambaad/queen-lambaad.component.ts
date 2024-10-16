import { Component } from '@angular/core';
import { CardLambaadService } from '../card-lambaad.service';

@Component({
  selector: 'app-queen-lambaad',
  templateUrl: './queen-lambaad.component.html',
  styleUrl: './queen-lambaad.component.css'
})
export class QueenLambaadComponent {

  lambaadTitle : string = "Queen of Hearts";
  lambaadSuit : string = "Hearts";
  lambaadImage : string = "./assets/images/queen.png";
  lambaadDegree : number = 240;
  lambaadZero : number = 0;
  lambaadPlaceholder : number = 0;

  constructor(private cardService : CardLambaadService) {}

 /* lambaadRotate() {
    this.lambaadZero += this.lambaadDegree;
    this.cardService.lambaadChanges('queen', this.lambaadZero);
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




