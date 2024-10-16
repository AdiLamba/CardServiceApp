import { Component, Input } from '@angular/core';
import { lambaadPersonal } from '../classes/A3Classlambaad';

@Component({
  selector: 'app-header-lambaad',
  templateUrl: './header-lambaad.component.html',
  styleUrl: './header-lambaad.component.css'
})
export class HeaderLambaadComponent {

  @Input() HFlambaad !: lambaadPersonal;

}
