import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { About } from "./features/about/about";
import { Layout } from "./layouts/layout/layout";
import { Sidebar } from "./shared/sidebar/sidebar";

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('hong_sovannara_portfolio');
}
