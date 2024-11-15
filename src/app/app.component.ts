import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from './footer/footer.component';
import {LecteurComponent} from './lecteur/lecteur.component';
import {HeaderComponent} from './header/header.component';
import {MusicLibraryComponent} from './music-library/music-library.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, LecteurComponent, HeaderComponent, MusicLibraryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RefontSpotify';
}
