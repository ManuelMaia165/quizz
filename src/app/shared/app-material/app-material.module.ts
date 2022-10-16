
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  exports: [
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class AppMaterialModule {  }
