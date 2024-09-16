import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavContentComponent } from './components/navbar/nav-content/nav-content.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { ProductCardComponent } from './components/product-card/product-card.component';



@NgModule({
  declarations: [
    NavbarComponent,
    NavContentComponent,
    FooterComponent,
    ProductCardComponent

  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
  ],
  exports:[
    NavbarComponent,
    NavContentComponent,
    FooterComponent,
    ProductCardComponent
  ]
})
export class SharedModule { }
