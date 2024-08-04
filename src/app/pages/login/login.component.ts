import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private router: Router,
    private userService: UserService,
    private toastr: ToastrService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  getErrorMessageEmail(userEmail: string) {
    const user = this.loginForm.get(userEmail);

    if (user?.hasError('required')) {
      return 'Enter your email';
    }

    return user?.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessagePassword(userPassword: string) {
    const user = this.loginForm.get(userPassword);

    if (user?.hasError('required')) {
      return 'Enter your password';
    }

    return user?.hasError('minlength') ? 'Minimum 6 characters' : '';
  }

  submit() {
    this.userService
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe({
        next: () => this.toastr.success('Login successfully!'),
        error: () => this.toastr.error('Unexpected error! Try again later.'),
      });
  }
}
