import { Component, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { MusicService } from '../music.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class MusicListComponent implements OnChanges {
  @Input() searchQuery: string = '';
  @Output() songSelected = new EventEmitter<any>();
  musicLibrary: any[] = [];
  selectedSongId: number | null = null;

  constructor(private musicService: MusicService) {
    this.musicLibrary = this.musicService.getMusicLibrary();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['searchQuery']) {
      this.musicLibrary = this.musicService.getMusicLibrary(this.searchQuery);
    }
  }

  onSelect(song: any) {
    this.selectedSongId = song.id;
    this.songSelected.emit(song);
  }
}
