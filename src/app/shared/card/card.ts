import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface DocSection {
  heading: string;
  items: string[];
}

export interface ProjectDocs {
  intro: string;
  sections: DocSection[];
  stack: string[]; // tech used, rendered as chips
  closing?: string;
}

export interface Project {
  name: string;
  category: string;
  initials: string;
  description: string;
  stack: string[];
  logo?: string;
  docs?: ProjectDocs;
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
  protected readonly activeDocs = signal<Project | null>(null);

  openDocs(project: Project) {
    this.activeDocs.set(project);
  }

  closeDocs() {
    this.activeDocs.set(null);
  }

  protected readonly projects: Project[] = [
    {
      name: 'PHONE-SHOP-SYSTEM',
      category: 'Web App',
      initials: 'PH',
      description: 'Designed the UX/UI system for web app then built the Full-Stack-Developer .',
      stack: ['Figma', 'Angular', 'Tailwind', 'Spring-boot', 'Spring-Security', 'JWT', 'Posgres'],
      accent: 'coral',
      docs: {
        intro:
          'A full-stack Phone Shop Management System that simulates a real mobile phone retail business, covering everything from supplier import to final sale.',
        sections: [
          {
            heading: 'Key features',
            items: [
              'Product management (add, update, delete, search)',
              'Brand and model management',
              'Product variants (color, RAM, storage)',
              'IMEI management for each individual device',
              'Stock and inventory tracking',
              'Customer and order management',
              'Sales and invoice processing',
              'Import products and update inventory',
              'Authentication and role-based authorization',
              'RESTful API integration between frontend and backend',
            ],
          },
          {
            heading: 'Business knowledge gained',
            items: [
              'Managing unique IMEI numbers for every phone',
              'Handling variants such as color, RAM, and storage capacity',
              'Recording imported products from suppliers',
              'Tracking inventory and stock movement',
              'Processing customer purchases and generating invoices',
              'Understanding the full sales workflow, from import to sale',
            ],
          },
        ],
        stack: [
          'Angular',
          'Spring Boot',
          'Spring Security',
          'JWT',
          'Oracle',
          'REST API',
          'Git & GitHub',
        ],
        closing:
          'This project strengthened full-stack development skills while giving practical knowledge of mobile phone retail operations and inventory management.',
      },
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
      docs: {
        intro:
          'A full-stack Coffee Shop Management System designed to streamline daily café operations, covering everything from menu setup to sales reporting.',
        sections: [
          {
            heading: 'Key features',
            items: [
              'Product and menu management',
              'Category management (coffee, tea, smoothies, desserts, etc.)',
              'Product variants (size, hot/iced, sugar level, add-ons)',
              'Inventory and ingredient stock management',
              'Customer and order management',
              'Point of sale (POS) system',
              'Discount and promotion management',
              'Sales reporting and analytics',
              'Image upload and storage using AWS S3',
              'Authentication and role-based authorization',
              'RESTful API integration between frontend and backend',
            ],
          },
          {
            heading: 'Business knowledge gained',
            items: [
              'Managing menu items and product categories',
              'Handling variants such as size, hot/iced options, sugar levels, and toppings',
              'Managing ingredient inventory and monitoring stock availability',
              'Processing customer orders efficiently through a POS system',
              'Applying discounts and promotional offers',
              'Tracking daily sales and generating business reports',
              'Understanding the full workflow, from inventory to customer service and sales',
            ],
          },
        ],
        stack: [
          'Angular',
          'Spring Boot',
          'Spring Security',
          'JWT',
          'Oracle',
          'AWS S3',
          'REST API',
          'Git & GitHub',
        ],
        closing:
          'This project strengthened full-stack development skills while giving practical knowledge of coffee shop operations, inventory management, sales processing, and customer service workflows.',
      },
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
