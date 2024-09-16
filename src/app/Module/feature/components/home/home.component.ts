import { Component } from '@angular/core';
import { menJeans } from '../../../../../Data/Men/men_jeans';

import { lengha_page1 } from '../../../../../Data/Women/LenghaCholi';
import { mensShoesPage1 } from '../../../../../Data/shoes';
import { mens_kurta } from '../../../../../Data/Men/men_kurta';
import { gounsPage1 } from '../../../../../Data/Gouns/gouns';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  menJeans:any
  womenGouns:any
  lehengaCholi:any
  menskurta:any
  mensShoes:any

  ngOnInit(){
    this.menJeans=menJeans.slice(0,4)
    this.womenGouns=gounsPage1.slice(0,4)
    this.lehengaCholi=lengha_page1.slice(0,4)
    this.mensShoes=mensShoesPage1.slice(0,4)
    this.menskurta=mens_kurta.slice(0,4)
  }
}
