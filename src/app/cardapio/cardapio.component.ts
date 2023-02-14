import { Component, OnInit, Output } from '@angular/core';
import { Cardapio } from '../cardapio';
import { CardapioServiceService } from '../cardapio.service.service';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

const urlBase = 'http://localhost:3000'

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
})
export class CardapioComponent implements OnInit{

  cardapio: Cardapio[] = [];

  constructor(private http: HttpClient, public cardapioService: CardapioServiceService, titleService: Title){
    titleService.setTitle("Cardápio - NgFood")
  }


  ngOnInit(): void{
    this.http.get<Cardapio[]>(`${urlBase}/cardapio`).subscribe(cardapio => {
      console.log(cardapio)
      this.cardapio = cardapio;
    })

  };
  
}
