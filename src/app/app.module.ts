import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ViewItemComponent } from './view-item/view-item.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule ,Routes,Route, ROUTES} from '@angular/router';
import { FormsModule } from '@angular/forms';

const myRoute : Routes=[
  {path:"",component:AddItemComponent},
  {path:"add",component:AddItemComponent},
  {path:"view",component:ViewItemComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    ViewItemComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
