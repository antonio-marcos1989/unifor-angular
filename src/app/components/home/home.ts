import { Component } from '@angular/core';
import {FeatureCard} from '../feature-card/feature-card';

interface Feature {
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  imports: [
    FeatureCard
  ],
  styleUrls: ['./home.css']
})
export class Home {

  appName = 'Minha Landing Angular';

  features: Feature[] = [
    {
      title: 'Fácil de usar',
      description: 'Interface simples e direta para quem está começando.'
    },
    {
      title: 'Seguro',
      description: 'Construído com boas práticas e framework robusto.'
    },
    {
      title: 'Escalável',
      description: 'Organizado em componentes e pronto para crescer.'
    }
  ];
}
