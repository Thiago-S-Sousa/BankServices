import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faArrowTurnUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login-layout-structure',
  templateUrl: './login-layout-structure.component.html',
  styleUrls: ['./login-layout-structure.component.scss'],
})
export class LoginLayoutStructureComponent {
  @Input() subTitle: string = '';
  @Input() problem: string = '';
  @Input() solution: string = '';
  @Input() link: string = '';
  @Input() disabledBtn: boolean = true;
  @Output('submit') onSubmit = new EventEmitter();
  @Output('navigate') onNavigate = new EventEmitter();

  faArrowTurnUp = faArrowTurnUp;

  submit() {
    this.onSubmit.emit();
  }

  navigate() {
    this.onNavigate.emit();
  }
}
