import { ViewportScroller } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-side',
  templateUrl: './main-side.component.html',
  styleUrls: ['./main-side.component.scss']
})
export class MainSideComponent implements OnInit {
  constructor(private scroller: ViewportScroller, private router: Router) {}

  ngOnInit() {
    this.router.navigate(["/"]);
  }

  scrollToAbout() {
    const about = document.getElementById("aboutMe");
    if (about) {
      about.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToSkills() {
    const skills = document.getElementById("skills");
    if (skills) {
      skills.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToPortfolio() {
    const skills = document.getElementById("portfolio");
    if (skills) {
      skills.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
