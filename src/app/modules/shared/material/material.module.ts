import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [MatIconModule, MatButtonModule, MatToolbarModule],
  exports: [MatIconModule, MatButtonModule, MatToolbarModule],
})
export class MaterialModule {}
