import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { Sidebar } from '../../shared/sidebar/sidebar';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  imports: [Sidebar, RouterOutlet, CommonModule],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout implements OnInit, OnDestroy {
  count = signal(0);
  loading = signal(true);
  fadeOut = signal(false);

  private intervalId?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // Skip the animation entirely, jump straight to the app.
      this.count.set(100);
      this.finish();
      return;
    }

    const totalDurationMs = 3000;
    const totalSteps = 100;
    const stepMs = totalDurationMs / totalSteps;

    this.intervalId = setInterval(() => {
      this.count.update((value) => value + 1);
      if (this.count() >= totalSteps) {
        this.finish();
      }
    }, stepMs);
  }

  private finish(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.fadeOut.set(true);
    // let the fade-out transition finish before unmounting the loader
    setTimeout(() => this.loading.set(false), 500);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
