import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatSliderModule} from '@angular/material/slider';

@Component({
  selector: 'app-lecteur',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSliderModule
  ],
  templateUrl: './lecteur.component.html',
  styleUrl: './lecteur.component.css'
})
export class LecteurComponent {

}
