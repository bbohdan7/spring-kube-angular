import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { UserComponentComponent } from './user-component/user-component.component';

const routes: Routes = [
  {path: "users", component: UserComponentComponent},
  {path: "products/:id", component: ProductAlertsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
