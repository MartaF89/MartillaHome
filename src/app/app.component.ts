import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'MartillaHome';
  selectedImage: string | null = null;

  openImage(url: string) {
    this.selectedImage = url;
  }

  closeImage() {
    this.selectedImage = null;
  }
  // In AppComponent o nel componente che gestisce la gallery
  subImages: string[] = [
    '/bagno.webp',
    '/balcone.webp',
    '/cucina.webp',
    '/soggiorno.webp',
  ];
  aboutImages: string[] = [
    '/colazione.jpg',
    '/chi-siamo2.webp',
    '/chi-siamo3.webp',
  ];

  slideIndex = 0;
  visibleCount = 2;

  get visibleSubImages() {
    return this.subImages.slice(
      this.slideIndex,
      this.slideIndex + this.visibleCount
    );
  }

  slideLeft() {
    if (this.slideIndex > 0) {
      this.slideIndex--;
    }
  }

  slideRight() {
    if (this.slideIndex + this.visibleCount < this.subImages.length) {
      this.slideIndex++;
    }
  }
}
