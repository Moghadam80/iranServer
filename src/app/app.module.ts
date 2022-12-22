import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { EditItemComponent } from './shopping/edit-item/edit-item.component';
import { HttpClientModule } from '@angular/common/http';
import { ProcessesService } from './shopping/shopping.service';
import { LoadingBarModule } from '@ngx-loading-bar/core';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShoppingComponent,
    EditItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    LoadingBarModule
    
  ],
  providers: [
    ProcessesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
