import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  categories = [
    {
      cate: 'RESUME',
      link: '/resume/Hong-Sovannara-CV.pdf',
      icon: '      fa-solid fa-envelope',
    },
    {
      cate: 'GITHUB',
      link: 'https://github.com/SovannaraHong',
      icon: ' fa-brands fa-github',
    },
    {
      cate: 'FACEBOOK',
      link: 'https://www.facebook.com/share/17w88PMyfJ/?mibextid=wwXIfr',
      icon: '     fa-brands fa-facebook',
    },
    {
      cate: 'TIKTOK',
      link: 'https://www.tiktok.com/@akira1269',
      icon: '    fa-brands fa-tiktok',
    },
    {
      cate: 'TELEGRAM',
      link: 'https://t.me/akiradev0099',
      icon: '   fa-brands fa-telegram',
    },
  ];
}
