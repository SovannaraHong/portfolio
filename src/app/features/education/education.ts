import { CommonModule } from '@angular/common';
import { Component, Directive, ElementRef, Input, OnDestroy, OnInit, signal } from '@angular/core';

@Directive({
  selector: '[appReveal]',
})
export class RevealDirective implements OnInit, OnDestroy {
  @Input() revealDelay = 0;
  private observer?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const node = this.el.nativeElement;
    node.style.setProperty('--reveal-delay', `${this.revealDelay}ms`);
    node.classList.add('reveal-init');

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.classList.add('reveal-visible');
            this.observer?.unobserve(node);
          }
        });
      },
      { threshold: 0.15 },
    );
    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}

type Accent = 'coral' | 'lime' | 'teal' | 'violet';

@Component({
  selector: 'app-education',
  imports: [CommonModule, RevealDirective],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education {
  readonly year = signal(new Date().getFullYear());

  education: { year: string; title: string; detail: string; accent: Accent }[] = [
    {
      year: '2024',
      title: `Bachelor's degree in Management Information System (MIS) — Junior Year`,
      detail: 'SETEC Institute, Phnom Penh',
      accent: 'coral',
    },
    {
      year: '2017–2023',
      title: 'Baccalaureate, DEYDOS High School',
      detail: 'Kompong Cham',
      accent: 'teal',
    },
    {
      year: '2020',
      title: 'Diploma, DEYDOS High School',
      detail: 'Kompong Cham',
      accent: 'violet',
    },
  ];

  clients: {
    name: string;
    initials: string;
    logo?: string;
    note: string;
    source: string;
    status: 'done' | 'in-progress';
    accent: Accent;
  }[] = [
    {
      name: 'Pka E-commerce — Frontend Developer',
      initials: 'PK',
      logo: '/icon/log/p5.png',
      note: 'React, Tailwind CSS',
      source: 'Midterm project',
      status: 'done',
      accent: 'coral',
    },
    {
      name: 'Zando Clone',
      initials: 'ZC',
      logo: '/icon/log/zando.png',
      note: 'React, Tailwind CSS',
      source: 'Final project',
      status: 'done',
      accent: 'teal',
    },
    {
      name: 'Guest House — Backend Developer',
      initials: 'GH',
      note: 'Java, Spring Boot',
      source: 'Midterm project',
      status: 'in-progress',
      accent: 'violet',
    },
    {
      name: 'PhoneShop System — Full-Stack Developer',
      initials: 'PS',
      logo: '/icon/log/phoneshop.jpg',
      note: 'Spring Boot (REST API), Angular, JWT, PostgreSQL',
      source: 'Final project',
      status: 'done',
      accent: 'lime',
    },
    {
      name: 'CoffeeShop System — Full-Stack Developer',
      initials: 'CS',
      logo: '/icon/log/coffee.jpg',
      note: 'Spring Boot (REST API), Angular, JWT, Oracle',
      source: 'Final project',
      status: 'in-progress',
      accent: 'coral',
    },
  ];
}
