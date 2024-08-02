import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login-layout-structure',
  templateUrl: './login-layout-structure.component.html',
  styleUrls: ['./login-layout-structure.component.scss'],
})
export class LoginLayoutStructureComponent {
  @Input() title: string = '';
}
