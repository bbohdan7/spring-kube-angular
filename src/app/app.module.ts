import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { HelloworldDirective } from './helloworld.directive';
import { AlignCenterDirective } from './align-center.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserComponentComponent,
    ProductAlertsComponent,
    HelloworldDirective,
    AlignCenterDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
