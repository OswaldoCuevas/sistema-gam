import { Routes } from '@angular/router';

export const routes: Routes = [
  {'path': 'patrocinadores',loadComponent: () => import('./application/patrocinadores/layout-patrocinadores/layout-patrocinadores.component').then(m => m.LayoutPatrocinadoresComponent)}
];
