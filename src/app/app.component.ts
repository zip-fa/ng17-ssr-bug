import { Component, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformServer } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng17-ssr-bug';

  constructor() {
    if(isPlatformServer(inject(PLATFORM_ID))) {
      return;
    }

    console.log('i am browser');

    setTimeout(() => console.log('hi from browser'), 11000);
  }
}
