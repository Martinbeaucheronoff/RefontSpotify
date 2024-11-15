import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-music-library',
  templateUrl: './music-library.component.html',
  standalone: true,
  imports: [
    NgForOf
  ],
  styleUrls: ['./music-library.component.css']
})
export class MusicLibraryComponent {
  // Exemple de données : liste des musiques
  songs = [
    { title: 'Song 1', artist: 'Artist 1', album: 'Album 1', duration: '3:45' },
    { title: 'Song 2', artist: 'Artist 2', album: 'Album 2', duration: '4:12' },
    { title: 'Song 3', artist: 'Artist 3', album: 'Album 3', duration: '2:58' },
  ];

  // Méthode pour jouer une musique (exemple)
  playSong(song: any): void {
    console.log(`Playing ${song.title} by ${song.artist}`);
    // Ajoutez ici la logique pour jouer la musique (via une API ou un lecteur intégré)
  }
}
