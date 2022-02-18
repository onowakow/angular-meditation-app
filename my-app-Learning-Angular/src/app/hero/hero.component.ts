import {
  SimpleChanges,
  OnChanges,
  Component,
  Output,
  EventEmitter,
  Input,
  OnInit,
  SimpleChange,
} from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnChanges, OnInit {
  @Output() liked = new EventEmitter();
  @Input() name: string;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    const hero = changes['name'];
    const oldValue = hero.previousValue;
    const newValue = hero.currentValue;
    if (!hero.isFirstChange()) {
      console.log(`Hero changed from ${oldValue} to ${newValue}`);
    }
  }
}
