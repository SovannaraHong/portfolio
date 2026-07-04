import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layouts/layout/layout').then((m) => m.Layout),
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadComponent: () => import('./features/home/home').then((m) => m.Home),
      },
      {
        path: 'about',
        loadComponent: () => import('./features/about/about').then((m) => m.About),
      },
      {
        path: 'education',
        loadComponent: () => import('./features/education/education').then((m) => m.Education),
      },
      {
        path: 'skill',
        loadComponent: () => import('./features/skill/skill').then((m) => m.Skill),
      },
    ],
  },
];
