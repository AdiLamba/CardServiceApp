import { Component, Input } from '@angular/core';
import { lambaadPersonal } from '../classes/A3Classlambaad';

@Component({
  selector: 'app-footer-lambaad',
  templateUrl: './footer-lambaad.component.html',
  styleUrl: './footer-lambaad.component.css'
})
export class FooterLambaadComponent {

  @Input() HFlambaad !: lambaadPersonal;
}
