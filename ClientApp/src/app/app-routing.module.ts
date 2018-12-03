import { NotFoundComponent } from './security/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewGenomsComponent } from './pages/view-genoms/view-genoms.component';
import { UploadGenomsComponent } from './pages/upload-genoms/upload-genoms.component';

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
    path: '',
    redirectTo: 'view-genoms',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
