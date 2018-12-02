import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './security/not-found/not-found.component';
import { ViewGenomsComponent } from './pages/view-genoms/view-genoms.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ViewGenomsComponent,
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
