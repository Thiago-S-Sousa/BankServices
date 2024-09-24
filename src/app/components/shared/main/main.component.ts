import { Component } from '@angular/core';
import {
  faArrowRightFromBracket,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  faArrowRightFromBracket = faArrowRightFromBracket;
  faXmark = faXmark;

  openNav: boolean = false;
  exit: boolean = true;

  toggleNav() {
    this.openNav = !this.openNav;
  }

  toggleExit() {
    this.exit = !this.exit;
  }
}
