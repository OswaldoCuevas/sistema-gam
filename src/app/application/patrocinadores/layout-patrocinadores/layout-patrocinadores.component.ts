import { Component } from '@angular/core';
import { FormularioPatrocinadoresComponent } from '../formulario-patrocinadores/formulario-patrocinadores.component';
import { TableModule } from 'primeng/table';
import { PatrocinadoresService } from '../patrocinadores.service';
import { MenuPopupComponent } from '../../../components/menu-popu/menu-popu/menu-popu.component';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-layout-patrocinadores',
  standalone: true,
  imports: [MenuPopupComponent,FormularioPatrocinadoresComponent,TableModule,CardModule],
  providers: [PatrocinadoresService],
  templateUrl: './layout-patrocinadores.component.html',
  styleUrl: './layout-patrocinadores.component.scss'
})
export class LayoutPatrocinadoresComponent {
  patrocinadores!:Array<any>;
  constructor(private patrocinadoresService: PatrocinadoresService) {
    this.patrocinadores = patrocinadoresService.getPatrocinadores();
  }
}
