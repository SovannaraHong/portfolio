import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Project {
  name: string;
  category: string;
  initials: string;
  description: string;
  stack: string[];
  logo?: string;
  accent: 'coral' | 'lime' | 'teal';
  link: string;
  status?: 'live' | 'in-progress';
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  protected readonly projects: Project[] = [
    {
      name: 'PHONE-SHOP-SYSTEM',
      category: 'Web App',
      initials: 'PH',
      description: 'Designed the UX/UI system for web app then built the Full-Stack-Developer .',
      stack: ['Figma', 'Angular', 'Tailwind', 'Spring-boot', 'Spring-Security', 'JWT', 'Posgres'],
      accent: 'coral',
      logo: '/icon/log/phoneshop.jpg',
      link: 'https://github.com/SovannaraHong/phone_shop',
      status: 'live',
    },
    {
      name: 'COFFEE-SHOP',
      category: 'Web App',
      initials: 'CE',
      description: 'Designed the UX/UI system for web app then built the Full-Stack-Developer .',
      stack: ['Figma', 'Angular', 'Tailwind', 'Spring-boot', 'Spring-Security', 'JWT', 'Oracle'],
      accent: 'lime',
      logo: '/icon/log/coffee.jpg',
      link: 'https://github.com/SovannaraHong/coffee-shop-system',
      status: 'in-progress',
    },
    {
      name: 'ZENDO-CLONE',
      category: 'Web App',
      initials: 'TE',
      description:
        'Designed the UX/UI system for web and mobile, then built the full frontend experience from the ground up.',
      stack: ['Figma', 'React', 'Tailwind'],
      accent: 'teal',
      logo: '/icon/log/zando.png',
      link: 'https://zando-clone-five.vercel.app/',
      status: 'live',
    },
    {
      name: 'PKA-CLONE',
      category: 'Web App',
      initials: 'PK',
      description:
        'Designed the UX/UI system for web and mobile, then built the full frontend experience from the ground up.',
      stack: ['Figma', 'React', 'Tailwind'],
      accent: 'coral',
      logo: '/icon/log/p5.png',
      link: 'https://pka-ecommerce.vercel.app/',
      status: 'live',
    },
    {
      name: 'GUEST HOUSE',
      category: 'API',
      initials: 'AP',
      description: 'Building Api ',
      stack: ['Spring-boot', 'Spring-Security', 'JWT', 'Posgres'],
      accent: 'lime',
      link: '#',
      status: 'in-progress',
    },
  ];
}
