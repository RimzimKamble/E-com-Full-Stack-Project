import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Module/feature/components/home/home.component';
import { MainCarouselComponent } from './Module/feature/components/home/main-carousel/main-carousel.component';
import { RouterModule } from '@angular/router';
import { HomeProductCardComponent } from './Module/feature/components/home/home-product-card/home-product-card.component';
import { ProductSliderComponent } from './Module/feature/components/home/product-slider/product-slider.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'
import { MatMenuModule } from '@angular/material/menu';
import { FooterComponent } from './Module/shared/components/footer/footer.component'
import { FeatureModule } from './Module/feature/feature.module';
import { NavContentComponent } from './Module/shared/components/navbar/nav-content/nav-content.component';
import { NavbarComponent } from './Module/shared/components/navbar/navbar.component';
import { SharedModule } from './Module/shared/shared.module';



@NgModule({
  declarations: [
   AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    SharedModule,
    FeatureModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
