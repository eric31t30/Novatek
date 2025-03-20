import { Component } from '@angular/core';
import { ServiceListComponent } from '../service-list/service-list.component';
import { ClientsComponent } from '../clients/clients.component';
import { ProjectContactComponent } from '../project-contact/project-contact.component';
import { FooterComponent } from '../../home/footer/footer.component';

@Component({
  selector: 'app-services',
  imports: [ServiceListComponent, ClientsComponent, ProjectContactComponent, FooterComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
