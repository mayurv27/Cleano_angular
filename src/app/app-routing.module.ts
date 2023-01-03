import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { VarifyEmailComponent } from './pages/varify-email/varify-email.component';
import { CartComponent } from './sharepage/cart/cart.component';
import { CheckoutComponent } from './sharepage/checkout/checkout.component';
import { OrderplaceComponent } from './sharepage/orderplace/orderplace.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'menu',component:MenuComponent },
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'varifyemail',component:VarifyEmailComponent},
  {path:'cart',component:CartComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'order',component:OrderplaceComponent},
 {path:'contactus',component:ContactusComponent},
 {path:'summary',component:SummaryComponent}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
