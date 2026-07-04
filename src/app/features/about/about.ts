import { Component, Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sidebar } from '../../shared/sidebar/sidebar';

/**
 * Lightweight scroll-reveal directive.
 * Add [appReveal] to any element, optionally [revealDelay]="150" (ms).
 * No external animation deps — just IntersectionObserver + CSS transition
 * (see .reveal-init / .reveal-visible in about.css).
 */
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
  selector: 'app-about',
  imports: [CommonModule, RevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
