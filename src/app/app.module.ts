import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { RatingModule } from 'ng-starrating';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './components/pages/cart/cart.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { SearchComponent } from './components/common/search/search.component';
import { TagsComponent } from './components/common/tags/tags.component';
import { CartTitleComponent } from './components/pages/cart-title/cart-title.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CartComponent,
    FoodPageComponent,
    NotFoundComponent,
    SearchComponent,
    TagsComponent,
    CartTitleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RatingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
