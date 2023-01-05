import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    MatIconModule,
  ],
  exports: [
    CardComponent,
  ]
})
export class CardModule { }
