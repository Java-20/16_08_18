import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ItemsComponent } from './items/items.component';
import { LoginComponent } from './login/login.component';
import { SecretComponent } from './secret/secret.component';
import {RouterModule, Routes} from '@angular/router';
import { InfoComponent } from './info/info.component';


const routes: Routes = [
  {path:'', component:MainComponent},
  {path:'items', component:ItemsComponent, children:[
      {path:':title/:time', component: InfoComponent}
    ]},
  {path:'login',component:LoginComponent},
  {path:'secret',component:SecretComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ItemsComponent,
    LoginComponent,
    SecretComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
