import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrollup-button',
  templateUrl: './scrollup-button.component.html',
  styleUrls: ['./scrollup-button.component.scss']
})
export class ScrollupButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  goUp(){
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

}
