import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor() {}

  @Input()
  data: any;

  image: string | undefined;
  public handleMissingImage() {
    this.image = '../../../../assets/images/default_photo.png';
  }
  ngOnInit(): void {
    this.image = this.data.vco_veiculos_foto.url_medium;
  }
}
