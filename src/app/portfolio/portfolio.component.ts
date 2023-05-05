import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit(): void {

  }

  over(event: MouseEvent) {
    const zoomView = this.elementRef.nativeElement.querySelector('#zoomView');
    this.renderer.addClass(zoomView, 'zoom-into-view');
  }

  out(event: MouseEvent) {
    const zoomView = (event.target as HTMLElement);
    zoomView.innerHTML = '';
    zoomView.innerHTML += /*html*/`
      
     
    `;
  }

}
