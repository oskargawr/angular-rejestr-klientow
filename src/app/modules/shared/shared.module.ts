import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './components/alert/alert.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AlertComponent],
  imports: [CommonModule],
  exports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AlertComponent,
    HttpClientModule,
  ],
})
export class SharedModule {}
