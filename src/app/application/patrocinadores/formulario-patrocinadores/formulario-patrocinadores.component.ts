import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
@Component({
  selector: 'app-formulario-patrocinadores',
  standalone: true,
  imports: [ ButtonModule,CardModule],
  templateUrl: './formulario-patrocinadores.component.html',
  styleUrl: './formulario-patrocinadores.component.scss'
})
export class FormularioPatrocinadoresComponent {

}
