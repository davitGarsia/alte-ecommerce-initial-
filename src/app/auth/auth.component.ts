import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, throwError } from 'rxjs';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  loginMode = true;
  isLoading = false;

  constructor(private authService: AuthService) {}

  changeMode() {
    this.loginMode = !this.loginMode;
  }

  onSubmit(form: NgForm) {
    //if (!form.valid) return;
    const firstName = form.value.name;
    const lastName = form.value.surname;
    const email = form.value.email;
    const password = form.value.password;

    //let authObs: Observable<AuthResponseData>;

    this.isLoading = true;

    if (this.loginMode) {
      this.authService.login(email, password).subscribe((resData) => {
        console.log(resData);
        this.isLoading = false;
      });
    } else {
      this.authService
        .signup(firstName, lastName, email, password)
        .subscribe((resData) => {
          console.log(resData);
          this.isLoading = false;
        });
    }
    form.reset();
  }
}
