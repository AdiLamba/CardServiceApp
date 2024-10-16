import { Component } from '@angular/core';
import { lambaadPersonal } from './classes/A3Classlambaad';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'A3lambaad';

  profileLambaad : lambaadPersonal = {

    lambaadFullName: "Aditya Lamba",
    lambaadSheridanId: 991702428,
    lambaadSheridanEmail: "lambaad@sheridancollege.ca",
    lambaadSheridanLogin: "lambaad"
};
}

