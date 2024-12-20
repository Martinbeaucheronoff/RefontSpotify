import { Component } from '@angular/core';
import { MusicListComponent } from './music-list/music-list.component';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [MusicListComponent, MusicPlayerComponent, HeaderComponent, FooterComponent],
})
export class AppComponent {
  selectedSong: any;
  searchQuery: string = '';

  updateSearch(query: string) {
    this.searchQuery = query;
  }
}
