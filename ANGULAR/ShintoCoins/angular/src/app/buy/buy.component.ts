import { Component, OnInit } from '@angular/core';
import { Shintoservice } from '../shinto.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  cointOwned: number;
  userInput: number;

  constructor(private _shintoservice: Shintoservice) { }

  ngOnInit() {
  }

  buyCoin(){
    let currentVal = this._shintoservice.getCoinValue();
    this._shintoservice.increaseShintoCoinValue(this.userInput);
    this._shintoservice.AddCoin(this.userInput);
    this._shintoservice.generateTran('Buy',this.userInput,currentVal);
    this.coinOwned = this._shintoservice.getBalance();
    this.currentVal = this._shintoservice.getCurrentValue();
    console.log('how much I have: ',this.coinOwned);
  }

}
