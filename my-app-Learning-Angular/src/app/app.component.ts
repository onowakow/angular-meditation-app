import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello Angular 10';
  hero = 'BillyBob';
  onLike() {
    window.alert(`I like ${this.hero}`);
    this.hero = 'Boothstomper';
  }
}
