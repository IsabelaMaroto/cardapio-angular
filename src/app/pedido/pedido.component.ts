import { Component} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CardapioServiceService} from '../cardapio.service.service';


@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
})

export class PedidoComponent {

  constructor(public servico: CardapioServiceService, titleService: Title ){
    titleService.setTitle("Pedido - NgFood")
  }

  
}
