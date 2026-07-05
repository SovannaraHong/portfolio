import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
  label: string;
  path: string;
  icon: 'home' | 'skill' | 'folder' | 'briefcase' | 'wrench' | 'edit';
}

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  navItems: NavItem[] = [
    { label: 'Home', path: '/', icon: 'home' },
    { label: 'About', path: '/about', icon: 'edit' },
    { label: 'Education', path: '/education', icon: 'briefcase' },
    { label: 'Skill', path: '/skill', icon: 'skill' },
    { label: 'Project', path: '/project', icon: 'folder' },
    { label: 'Contact Us', path: '/contact', icon: 'wrench' },
  ];
}
