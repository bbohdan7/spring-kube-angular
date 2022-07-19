import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { HelloworldDirective } from './helloworld.directive';
import { AlignCenterDirective } from './align-center.directive';
import { ShowUserComponent } from './show-user/show-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    UserComponentComponent,
    ProductAlertsComponent,
    HelloworldDirective,
    AlignCenterDirective,
    ShowUserComponent,
    EditUserComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
