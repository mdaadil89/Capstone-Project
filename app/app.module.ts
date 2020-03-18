import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductsModule} from './products/products.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { ProductsService } from './products/products.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({

  imports: [BrowserModule,NgbModule,
    ProductsModule,
    AppRoutingModule,
    BrowserAnimationsModule],

  declarations: [
    AppComponent,
    AboutComponent,
    LoginComponent,
    PageNotFoundComponent
  ],

    providers:[ProductsService],

  
  bootstrap: [AppComponent]
})
export class AppModule { }
