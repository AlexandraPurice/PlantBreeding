import { FormComponent } from './pages/upload-genoms/add-genom/form.component';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './security/not-found/not-found.component';
import { ViewGenomsComponent } from './pages/view-genoms/view-genoms.component';
import { UploadGenomsComponent } from './pages/upload-genoms/upload-genoms.component';
import { NavigationMenuComponent } from './shared/navigation-menu/navigation-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ViewGenomsComponent,
    UploadGenomsComponent,
    FormComponent,
    NavigationMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
