import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MusicService {
  private musicLibrary = [
    { id: 1, title: 'Reflet', artist: 'Mwa', url: 'assets/music/Reflet.mp3' },
    { id: 2, title: 'Ma Meilleur Ennemie', artist: 'Stromae, Pomme', url: 'assets/music/Ma Meilleure Ennemie-Stromae.mp3' },
    { id: 3, title: 'FMB supremacy', artist: 'Dizzy Crush', url: 'assets/music/femboy supremacy.mp3' },
  ];

  getMusicLibrary(query: string = '') {
    return this.musicLibrary.filter((song) =>
      song.title.toLowerCase().includes(query.toLowerCase())
    );
  }

  getRandomSong(currentSongId: number) {
    const availableSongs = this.musicLibrary.filter(song => song.id !== currentSongId);
    return availableSongs[Math.floor(Math.random() * availableSongs.length)];
  }
}
