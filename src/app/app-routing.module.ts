import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ShowUserComponent } from './show-user/show-user.component';
import { UserComponentComponent } from './user-component/user-component.component';

const routes: Routes = [
  { path: "users", component: UserComponentComponent},
  { path: "users/:id", component: ShowUserComponent },
  { path: "create-user", component: CreateUserComponent },
  { path: "users/edit/:id", component: EditUserComponent },
  { path: "products/:id", component: ProductAlertsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
