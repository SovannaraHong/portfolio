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
@Component({
  selector: 'app-education',
  imports: [CommonModule, RevealDirective],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education {
  readonly year = signal(new Date().getFullYear());

  traits = ['Creative', 'Curious', 'Meticulous'];

  education = [
    {
      year: '2024 ',
      title: `Bacherlor’s degree in Management information
				System (MIS) -Junior Year
`,
      detail: 'SETEC Institute,Phnom Penh',
    },
    {
      year: '2017-2023 ',
      title: 'Baccalaureate at DEYDOS HIGH SCHOOL, KOMPONG CHAM',
      detail: 'Angular, Tailwind Css & Web Ecommerce',
    },
    {
      year: '2020',
      title: 'Diploma at DEYDOS HIGH SCHOOL, KOMPONG CHAM ',
      detail: 'DEYDOS HIGH SCHOOL',
    },
  ];

  skills = [
    'Component Architecture',
    'Motion & Micro-interactions',
    'Accessibility',
    'Design Systems',
  ];

  software = [
    { label: 'Ts', name: 'TypeScript', color: 'text-royal', tileBg: 'rgba(36, 81, 224, 0.12)' },
    { label: 'Ng', name: 'Angular', color: 'text-coral', tileBg: 'rgba(239, 122, 92, 0.14)' },
    { label: 'Tw', name: 'Tailwind', color: 'text-mint', tileBg: 'rgba(63, 174, 155, 0.14)' },
    { label: 'Fg', name: 'Figma', color: 'text-violet', tileBg: 'rgba(139, 95, 191, 0.14)' },
  ];

  clients = [
    {
      name: 'Pka E-commerce | Frontend Developer',
      note: 'Using React js ,Tailwind Css',
      source: 'MIDERM PROJECT',
      classes: 'bg-sticky/90',
    },
    {
      name: 'Zando-Clone',
      note: 'Using React js, Tailwind Css',
      source: 'FINAL PROJECT',
      classes: 'bg-coral/20 border border-coral/40',
    },
    {
      name: 'Guest House | Backend Developer',
      note: 'Using Java(Spring-boot)',
      source: 'MIDTERM PROJECT',
      classes: 'bg-skytag/25 border border-skytag/50',
    },
    {
      name: 'PhoneShop System | FullStack Developer',
      note: 'Using using Spring Boot (REST API), Angular, JWT Authentication, and PostgreSQL. ',
      source: 'FINAL PROJECT',
      classes: 'bg-skytag/25 border border-skytag/50',
    },
    {
      name: 'CoffeeShop System | FullStack Developer',
      note: 'Using using Spring Boot (REST API), Angular, JWT Authentication, and Oracle. ',
      source: 'FINAL PROJECT',
      classes: 'bg-skytag/25 border border-skytag/50',
    },
  ];
}
