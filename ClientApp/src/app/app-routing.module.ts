import { ViewGenesComponent } from './pages/view-genes/view-genes.component';
import { NotFoundComponent } from './security/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewGenomsComponent } from './pages/view-genoms/view-genoms.component';
import { UploadGenomsComponent } from './pages/upload-genoms/upload-genoms.component';
import { ViewEffectsComponent } from './pages/view-effects/view-effects.component';

const routes: Routes = [
  {
    path: 'view-genoms',
    component: ViewGenomsComponent
  },
  {
    path: 'upload-genoms',
    component: UploadGenomsComponent
  },
  {
    path: 'view-genes',
    component: ViewGenesComponent
  },
  {
    path: '',
    redirectTo: 'view-genoms',
    pathMatch: 'full'
  },
  {
    path: 'view-genes/view-effects',
    component: ViewEffectsComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
