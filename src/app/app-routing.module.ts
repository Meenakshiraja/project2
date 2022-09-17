import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingComponent } from './billing/billing.component';
import { CartComponent } from './cart/cart.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { OrdersummaryComponent } from './ordersummary/ordersummary.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductComponent } from './product/product.component';
import { ProductviewComponent } from './productview/productview.component';
import { ProfileComponent } from './profile/profile.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

const routes: Routes = [
  {path:'',component:ProductComponent},
  {path:'cart',component:CartComponent},
  {path:'profile',component:ProfileComponent},
  {path:'orderhistory',component:OrderHistoryComponent},
  {path:'bill',component:BillingComponent},
  {path:'payment',component:PaymentComponent},
  {path:'ordersummary',component:OrdersummaryComponent},
  {path:'thanks',component:ThankyouComponent},
  {path:'productview/:id',component:ProductviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
