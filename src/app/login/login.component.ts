import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Router, Params } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
  tryLogin() {
    var email = $('#inputEmail').val();
    var password = $('#inputPassword').val();
    this.authService.doLogin(email, password).then(
      (res) => {
        this.router.navigate(['/perfil']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
