import { CommonModule } from '@angular/common';
import { Component, Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';

interface Tool {
  name: string;
  logo: string;
  color: string;
}

interface ToolGroup {
  title: string;
  chipClass: string; // matches your existing chip-* palette
  tools: Tool[];
}

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
  selector: 'app-skill',
  imports: [CommonModule, RevealDirective],
  templateUrl: './skill.html',
  styleUrl: './skill.css',
})
export class Skill {
  groups: ToolGroup[] = [
    {
      title: 'Frontend',
      chipClass: 'chip-blue',
      tools: [
        { name: 'HTML5', logo: '/icon/logoTech/html5.png', color: '#E34F26' },
        { name: 'CSS3', logo: '/icon/logoTech/css3.png', color: '#1572B6' },
        { name: 'JavaScript', logo: '/icon/logoTech/javascript.png', color: '#F7DF1E' },
        { name: 'TypeScript', logo: '/icon/logoTech/typescript.png', color: '#3178C6' },
        { name: 'Tailwind CSS', logo: '/icon/logoTech/tailwindcss.png', color: '#06B6D4' },
        { name: 'Bootstrap', logo: '/icon/logoTech/bootstrap.png', color: '#7952B3' },
        { name: 'Angular', logo: '/icon/logoTech/angular.png', color: '#DD0031' },
        { name: 'React', logo: '/icon/logoTech/react.png', color: '#61DAFB' },
        { name: 'Vue.js', logo: '/icon/logoTech/vuejs.png', color: '#42B883' },
      ],
    },
    {
      title: 'Backend',
      chipClass: 'chip-coral',
      tools: [
        { name: 'Java', logo: '/icon/logoTech/java.png', color: '#f89820' },
        { name: 'Spring Boot', logo: '/icon/logoTech/springboot.png', color: '#6DB33F' },
        { name: 'Laravel', logo: '/icon/logoTech/laravel.png', color: '#FF2D20' },
        { name: 'PHP', logo: '/icon/logoTech/php.png', color: '#777BB4' },
        { name: 'Hibernate', logo: '/icon/logoTech/hibernate.png', color: '#59666C' },
      ],
    },
    {
      title: 'Database',
      chipClass: 'chip-teal',
      tools: [
        { name: 'MySQL', logo: '/icon/logoTech/mysql.png', color: '#4479A1' },
        { name: 'PostgreSQL', logo: '/icon/logoTech/postgresql.png', color: '#336791' },
        { name: 'MongoDB', logo: '/icon/logoTech/mongodb.png', color: '#47A248' },
        { name: 'Oracle', logo: '/icon/logoTech/oracle.png', color: '#F80000' },
        { name: 'Liquibase', logo: '/icon/logoTech/liquibase.png', color: '#2962FF' },
      ],
    },
    {
      title: 'Tools & DevOps',
      chipClass: 'chip-yellow',
      tools: [
        { name: 'Git', logo: '/icon/logoTech/git.png', color: '#F05032' },
        { name: 'GitHub', logo: '/icon/logoTech/github.png', color: '#181717' },
        { name: 'Docker', logo: '/icon/logoTech/docker.png', color: '#2496ED' },
        { name: 'AWS', logo: '/icon/logoTech/aws.png', color: '#232F3E' },
        { name: 'Postman', logo: '/icon/logoTech/postman.png', color: '#FF6C37' },
        { name: 'JUnit', logo: '/icon/logoTech/junit.png', color: '#25A162' },
        { name: 'IntelliJ', logo: '/icon/logoTech/intellij.png', color: '#000000' },
        { name: 'WebStorm', logo: '/icon/logoTech/webstorm.png', color: '#07C3F2' },
      ],
    },
    {
      title: 'Design',
      chipClass: 'chip-violet',
      tools: [
        { name: 'Photoshop', logo: '/icon/logoTech/photoshop.png', color: '#31A8FF' },
        { name: 'Illustrator', logo: '/icon/logoTech/illustrator.png', color: '#FF9A00' },
        { name: 'Premiere Pro', logo: '/icon/logoTech/premierepro.png', color: '#9999FF' },
        { name: 'After Effects', logo: '/icon/logoTech/aftereffects.png', color: '#9999FF' },
      ],
    },
  ];
}
