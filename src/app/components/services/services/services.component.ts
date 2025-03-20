import { Component } from '@angular/core';
import { ServiceListComponent } from '../service-list/service-list.component';
import { ClientsComponent } from '../clients/clients.component';

@Component({
  selector: 'app-services',
  imports: [ServiceListComponent, ClientsComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
