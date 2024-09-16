import { Target } from '@angular/compiler';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  isNavbarContentOpen:any

  openNavbarContent(section:any){

    this.isNavbarContentOpen=true;
    this.currentSection=section;

  }
  closeNavbarContent(){
    this.isNavbarContentOpen=false;
  }
  navigateTo(path:any){

  }
  
  currentSection:any

  @HostListener('document:click',[`$event`])
  onDocumentClick(event:MouseEvent){
    const modalContainer = document.querySelector(".modal-container");  // Correct selector
    const openButtons = document.querySelectorAll(".open-button");      // Correct selector
    
    let clickInsideButton=false;

    openButtons.forEach((button:Element)=>{
      if(button.contains(event.target as Node)){
        clickInsideButton=true
      }
    })

    if(modalContainer && !clickInsideButton && this.isNavbarContentOpen){
      this.closeNavbarContent();
    }

  }
 
}
