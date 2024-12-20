import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true
})
export class HeaderComponent {
  @Output() searchQuery = new EventEmitter<string>();

  onSearch(event: any) {
    const query = event.target.value;
    this.searchQuery.emit(query);
  }
}
