import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { ProfileComponent } from './profile/profile.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CartdataService } from './cartdata.service';
import { FormsModule } from '@angular/forms';
import { BillingComponent } from './billing/billing.component';
import { PaymentComponent } from './payment/payment.component';
import { OrdersummaryComponent } from './ordersummary/ordersummary.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { ProductviewComponent } from './productview/productview.component';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ProductComponent,
    ProfileComponent,
    OrderHistoryComponent,
    BillingComponent,
    PaymentComponent,
    OrdersummaryComponent,
    ThankyouComponent,
    ProductviewComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    MdbCarouselModule
  ],
  providers: [CartdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
