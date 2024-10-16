import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardLambaadService {

  constructor() { }

  /*lambaadChanges(buttonId : any, degreesToTurn : number) {
    const card = document.getElementById(buttonId);
    if (card) {
      let turnCard;
      switch (buttonId){
        case 'ace' : turnCard = 60;
        break;
        case 'king' : turnCard = 120;
        break;
        case 'queen' : turnCard = 240;
        break;
        case 'jack' : turnCard = 280;
        break;
        default : turnCard += degreesToTurn;
      }
      card.style.transform = `rotate(${turnCard}deg)`;
      card.style.transitionDuration = '3s';
    } 
    
  }*/

  lambaadChanges(buttonId : any, degreesToTurn : number) {
    const card = document.getElementById(buttonId);
    if (card) {
      card.style.transform = `rotate(${degreesToTurn}deg)`;
      card.style.transitionDuration = '3s';
    }
  }
}
