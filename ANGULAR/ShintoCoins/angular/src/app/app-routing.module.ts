import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyComponent } from './buy/buy.component';
import { MineComponent } from './mine/mine.component';
import { SellComponent } from './sell/sell.component';
import { HomeComponent } from './home/home.component';
import { TransactionComponent } from './transaction/transaction.component';
import { LedgerComponent } from './ledger/ledger.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'mine', component: MineComponent},
  {path: 'buy', component: BuyComponent},
  {path: 'sell', component: SellComponent},
  {path: 'transaction:id', component: TransactionComponent},
  {path: 'ledger', component: LedgerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
