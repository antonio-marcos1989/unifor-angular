import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.html',
  styleUrls: ['./feature-card.css']
})
export class FeatureCard {
  @Input() title: string = '';
  @Input() description: string = '';
}
