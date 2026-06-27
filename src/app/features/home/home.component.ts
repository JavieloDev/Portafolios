import {Component, ViewEncapsulation} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [
    RouterLink
  ],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  contactConfig = {
    whatsapp: {
      number: '5353282657',
      message: 'Hola, estoy interesado en tus servicios de desarrollo web.'
    },
    email: {
      address: 'javieloDev@gmail.com',
      subject: 'Solicitud de servicios de desarrollo web',
      body: `Hola, me interesa contratar tus servicios. Me gustaría saber más información sobre tarifas y disponibilidad.
            Descripción del proyecto:
            Tu nombre:
            Tu teléfono:`
    },
    linkedin: {
      url: 'https://www.linkedin.com/in/javier-alejandro-fajín-valladares-14572429b'
    }
  };

  get whatsappUrl(): string {
    const message = encodeURIComponent(this.contactConfig.whatsapp.message);
    return `https://wa.me/${this.contactConfig.whatsapp.number}?text=${message}`;
  }

  get emailUrl(): string {
    const subject = encodeURIComponent(this.contactConfig.email.subject);
    const body = encodeURIComponent(this.contactConfig.email.body);
    return `mailto:${this.contactConfig.email.address}?subject=${subject}&body=${body}`;
  }

  get linkedInURL(): string {
    return this.contactConfig.linkedin.url;
  }
}
