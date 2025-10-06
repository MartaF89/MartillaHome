import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  offcanvasOpen = false;
  constructor(
    private offcanvasService: NgbOffcanvas,
    private viewportScroller: ViewportScroller
  ) {} //Qui inietto il servizio di ng-bootstrap che gestisce gli offcanvas.
  openOffcanvas(content: any) {
    this.offcanvasOpen = true;
    this.offcanvasService
      .open(content, { position: 'start' }) //apre il contenuto selezionato nel template,con ngTemplate, facendolo apparire da sinistra(start)
      .result.finally(() => {
        this.offcanvasOpen = false;
      });
  }
  scrollTo(sectionId: string, offcanvas?: any) {
    this.viewportScroller.scrollToAnchor(sectionId);
    if (offcanvas) {
      offcanvas.dismiss();
    }
  }
}
// Quando chiamo offcanvasService.open(...), Angular restituisce un oggetto OffcanvasRef, che ha una proprietà ->.result. Questa è una Promise che si risolve quando l’offcanvas viene chiuso.
// quindi al click sul bottone che ChildrenOutletContexts(dismiss) ri risolve la promise con result e si attiva finally() che in questo caso riporta l'offcanvasopen a false
//per content si fa riferimento a cio che è nel ng Template partendo da qui:  <ng-template #offcanvasTemplate let-offcanvas> fino alla chiusura del tag
