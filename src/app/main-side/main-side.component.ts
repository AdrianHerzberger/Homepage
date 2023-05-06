import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-main-side',
  templateUrl: './main-side.component.html',
  styleUrls: ['./main-side.component.scss']
})
export class MainSideComponent implements AfterViewInit {
  @ViewChild('about', { read: ElementRef })
  aboutComponent!: ElementRef;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.el.nativeElement.scrollTo({
      behavior: 'smooth',
      top: 0
    });
  }

  scrollToAbout() {
    this.el.nativeElement.scrollTo({
      behavior: 'smooth',
      top: this.aboutComponent.nativeElement.offsetTop
    });
  }
}
