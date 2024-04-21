import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeModule } from './modules/home/home.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, AppRoutingModule, HomeModule],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
