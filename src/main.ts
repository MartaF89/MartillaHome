import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// ✅ Import Bootstrap JS (offcanvas, collapse, modal, ecc.)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
