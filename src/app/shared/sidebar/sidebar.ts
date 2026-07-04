import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
  label: string;
  path: string;
  icon: string;
  accent: string; // css class, see sidebar.css
  rotate: string; // tailwind rotate utility
}

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  mobileOpen = false;

  navItems: NavItem[] = [
    { label: 'Home', path: '/', icon: '🏠', accent: 'tab-sky', rotate: '-rotate-1' },
    { label: 'About', path: '/about', icon: '✏️', accent: 'tab-coral', rotate: 'rotate-1' },
    { label: 'Education', path: '/education', icon: '🎓', accent: 'tab-mint', rotate: '-rotate-2' },
    { label: 'Skill', path: '/skill', icon: '⚡', accent: 'tab-sticky', rotate: 'rotate-2' },
    { label: 'Project', path: '/projects', icon: '📌', accent: 'tab-violet', rotate: '-rotate-1' },
    { label: 'Contact Us', path: '/contact', icon: '✉️', accent: 'tab-royal', rotate: 'rotate-1' },
  ];

  closeMobile(): void {
    this.mobileOpen = false;
  }
}
