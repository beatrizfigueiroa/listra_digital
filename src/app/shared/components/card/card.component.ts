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

  formatedPrice: any;

  image: string | undefined;
  public handleMissingImage() {
    this.image = '../../../../assets/images/default_photo.png';
  }
  ngOnInit(): void {
    this.image = this.data.vco_veiculos_foto.url_medium;

    this.formatedPrice = this.formatter.format(this.data.int_preco_cliente);
  }

  formatter = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
}
