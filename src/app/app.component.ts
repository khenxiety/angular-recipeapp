import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'recipe';
  
  scrollup:boolean=false;

  

  constructor() { }

  @HostListener('window:scroll', ['$event'])onScroll(event: Event) {
    console.log('scrolled!!', window.pageYOffset);


    if (window.pageYOffset > 50) {
      this.scrollup = true;

      // document.getElementById('test')!.style.display = 'block';
    } else if(window.pageYOffset==0){
      this.scrollup = false;
      // document.getElementById('test')!.style.display = 'none';
    }
  
  }


  

}
