import { Component, Input, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicService } from '../music.service';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class MusicPlayerComponent implements OnChanges {
  @Input() currentSong: any;
  @ViewChild('audio', { static: false }) audioRef!: ElementRef<HTMLAudioElement>;
  isLooping = false;
  isShuffling = false;

  constructor(private musicService: MusicService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['currentSong'] && this.currentSong) {
      setTimeout(() => this.playCurrentSong(), 0);
    }
  }

  playCurrentSong() {
    const audioElement = this.audioRef?.nativeElement;
    if (!audioElement) return;
    audioElement.src = this.currentSong.url;
    audioElement.load();
    audioElement.play();

    if (this.isShuffling) {
      audioElement.onended = () => this.playRandomSong();
    } else {
      audioElement.onended = null;
    }
  }

  toggleLoop() {
    this.isLooping = !this.isLooping;
    this.audioRef.nativeElement.loop = this.isLooping;
  }

  toggleShuffle() {
    this.isShuffling = !this.isShuffling;
    if (this.isShuffling) {
      this.playRandomSong();
    }
  }

  playRandomSong() {
    const nextSong = this.musicService.getRandomSong(this.currentSong.id);
    this.currentSong = nextSong;
    this.playCurrentSong();
  }
}
