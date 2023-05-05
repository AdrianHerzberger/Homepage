import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  @ViewChild('elPolloLoco') elPolloLoco: any;
  @ViewChild('join') join: any;
  @ViewChild('crm') crm: any;
  hovered = false;

  zoomPolloLoco: string = /*html*/ `
    <div class="el-pollo-loco">
      <div class="zoom-ani">
        <img class="img-position" src="./assets/img/pollo_loco_view.png" alt="#">
      </div>
      <div class="layer"></div>
      <div class="button-aline">
        <button class="button-turquoise">Github</button>
        <button class="button-green">Live test</button>
      </div>
      <div class="discribtion-box">
          <div class="project-name"><h2>El Pollo Loco</h2></div>
          <div class="description-text"><p>Jump, run and game based on object-oriented approach. 
            Help Pepe to find coins and tabasco salsa to fight against the crazy hen.</p>
          </div>
          <div class="code-introduction">JavaScript | HTML | CSS</div>
      </div>
    </div>
  `;

  zoomOutPolloLoco: string = /*html*/ `
    <div class="img-aline"><img src="./assets/img/pollo_loco.png" alt="#"></div>
    <div class="drop-shadow"><img src="./assets/img/drop_shadow.png" alt="#"></div>
  `;

  zoomJoin: string = /*html*/ `
    <div class="join">
      <div class="zoom-ani">
        <img class="img-position" src="./assets/img/join_view.png" alt="#">
      </div>
      <div class="layer"></div>
      <div class="button-aline">
        <button class="button-turquoise">Github</button>
        <button class="button-green">Live test</button>
      </div>
      <div class="discribtion-box">
          <div class="project-name"><h2>Join</h2></div>
          <div class="description-text"><p>Task manager inspired by the Kanban System. 
            Create and organize tasks using drag and drop functions, assign users and categories. 
          </p>
          </div> 
          <div class="code-introduction">JavaScript | HTML | CSS</div>
      </div>
    </div>
  `;

  zoomOutJoin: string = /*html*/ `
    <div class="img-aline"><img src="./assets/img/join.png" alt="#"></div>
    <div class="drop-shadow"><img src="./assets/img/drop_shadow.png" alt="#"></div>
  `;

  zoomCrm: string = /*html*/ `
    <div class="crm">
      <div class="zoom-ani">
        <img class="img-position" src="./assets/img/crm_view.png" alt="#">
      </div>
      <div class="layer"></div>
      <div class="button-aline">
        <button class="button-turquoise">Github</button>
        <button class="button-green">Live test</button>
      </div>
      <div class="discribtion-box">
          <div class="project-name"><h2>Simple CRM</h2></div>
          <div class="description-text"><p>A very Simple Customer Relationship Management system working with CRUD functionality. 
          </p>
          </div> 
          <div class="code-introduction">Angular | Firebase</div>
      </div>
    </div>
  `;

  zoomOutCrm: string = /*html*/ `
    <div class="img-aline"><img src="./assets/img/crm.png" alt="#"></div>
    <div class="drop-shadow"><img src="./assets/img/drop_shadow.png" alt="#"></div>
  `;

  constructor() {

  }

  ngOnInit(): void {

  }

  over(event: MouseEvent) {
    this.hovered = true;
    if (event.target === this.elPolloLoco.nativeElement) {
      event.preventDefault();
      const zoomElPolloLoco = (event.target as HTMLElement);
      zoomElPolloLoco.innerHTML = this.zoomPolloLoco;
    }
    
    if (event.target === this.join.nativeElement) {
      event.preventDefault();
      const zoomJoin = (event.target as HTMLElement);
      zoomJoin.innerHTML = this.zoomJoin;
    }

    if (event.target === this.crm.nativeElement) {
      event.preventDefault();
      const zoomCrm = (event.target as HTMLElement);
      zoomCrm.innerHTML = this.zoomCrm;
    }
  }
  
  out(event: MouseEvent) {
    this.hovered = false;
    if (event.target === this.elPolloLoco.nativeElement) {
      const zoomElPolloLoco = (event.target as HTMLElement);
      zoomElPolloLoco.innerHTML = this.zoomOutPolloLoco;
    }
    
    if (event.target === this.join.nativeElement) {
      const zoomJoin = (event.target as HTMLElement);
      zoomJoin.innerHTML = this.zoomOutJoin;
    }

    if (event.target === this.crm.nativeElement) {
      const zoomCrm = (event.target as HTMLElement);
      zoomCrm.innerHTML = this.zoomOutCrm;
    }
  }
}
