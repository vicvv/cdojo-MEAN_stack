import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ShintoService {
  coinValue: number = 1;
  totalCoins: number = 0;
  currentTransaction: any;
  constructor() { }

  buy(coin){
    this.totalCoins += coin;
    console.log('total coins:', this.totalCoins);
    return this.totalCoins;
  }

  getCoinCurrentValue() {
    console.log('I am in coint current value');
    return this.coinValue;
  }

  getBalance() {
    console.log('Get balance');
    return this.totalCoins;
  }

  addCoins(coin) {
    this.totalCoins += coin;
    return this.totalCoins;
  }
}
