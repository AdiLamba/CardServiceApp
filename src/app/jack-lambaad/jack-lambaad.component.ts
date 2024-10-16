import { Component } from '@angular/core';
import { CardLambaadService } from '../card-lambaad.service';

@Component({
  selector: 'app-jack-lambaad',
  templateUrl: './jack-lambaad.component.html',
  styleUrl: './jack-lambaad.component.css'
})
export class JackLambaadComponent {

  lambaadTitle : string = "Jack of Clubs";
  lambaadSuit : string = "Clubs";
  lambaadImage : string = "./assets/images/jack.png";
  lambaadDegree : number = 280;
  lambaadZero : number = 0;
  lambaadPlaceholder : number = 0;

  constructor (private cardService : CardLambaadService) {}

  /*lambaadRotate() {
    this.lambaadZero += this.lambaadDegree;
    this.cardService.lambaadChanges('jack', this.lambaadZero);
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


