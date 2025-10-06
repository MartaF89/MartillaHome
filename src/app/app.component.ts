import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    CommonModule,
    ReactiveFormsModule,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'MartillaHome';
  selectedImage: string | null = null;
  contactForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    messaggio: new FormControl('', Validators.required),
  });
  //getter per comodita
  get nome() {
    return this.contactForm.get('nome');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get messaggio() {
    return this.contactForm.get('messaggio');
  }
  inviaMessaggio() {
    console.log(this.contactForm.value);
    if (this.contactForm.valid) {
      alert('Messaggio inviato!');
      this.contactForm.reset();
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
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
    '/pulizie.webp',
    '/cartina.png',
    '/spa.jpg',
  ];
  serviziImages: string[] = ['/PARCHEGGIOJPG.jpg', '/ristoranti.jpeg'];

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
