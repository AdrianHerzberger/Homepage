import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  hovered = false;

  zoomIntoView: string = /*html*/`
    <div class="zoom-into-view">
      <div class="zoom-ani">
        <img src="./assets/img/pollo_loco_view.png" alt="#">
      </div>
      <div class="button-aline">
        <button>Github</button>
        <button>Live test</button>
      </div>
      <div class="discribtion-box">  
      </div>
    </div>
  `;

  constructor() {

  }

  ngOnInit(): void {

  }

  over(event: MouseEvent) {
    this.hovered = true;
    const zoomView = (event.target as HTMLElement);
    //zoomView.innerHTML = this.zoomIntoView;
  }

  out(event: MouseEvent) {
    this.hovered = false;
    const zoomView = (event.target as HTMLElement);
    //zoomView.innerHTML = '';
    //zoomView.innerHTML += /*html*/`
      
     
//`;
  }

}
