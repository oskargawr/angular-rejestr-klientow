import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterLink } from '@angular/router';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterLink, MaterialModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
