import { Injectable } from '@angular/core';
import { ItemPedido } from './produto';
import { Cardapio } from './cardapio';

@Injectable({
  providedIn: 'root'
})
export class CardapioServiceService {

  itens: ItemPedido[] = []

  constructor() {}

  adicionarProduto(cardapio: Cardapio){
    const item = this.itens.find(item => item.produto.descricao === cardapio.descricao)
    if(item){
      item.quantidade++;
    } else{
      this.itens.push({
        quantidade: 1, produto: cardapio
      })
    }
  }

  limparPedido() {
    this.itens = [];
  }

 get valorTotal(): number{
  let total = 0
  for (const item of this.itens) {
    total += item.quantidade * item.produto.preco;
  }
  return total;
  }

  get quantidadeTotal(): number {
    let total = 0;
    for (const item of this.itens) {
      total += item.quantidade;
    }
    return total;
  }
}


