import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  model: any = {};
  messageError: string;

  constructor(private loginService: LoginService,
              private router: Router) {
  }

  ngOnInit(): void {
  }


    login(): void {
    this.loginService.login(this.model.username, this.model.password).subscribe(() => {this.reload()},
    error => {
      this.messageError = "Incorrect password or username";

    });
  }

  reload(): void{
    this.router.navigate(['/shop']).then(r => location.reload());
  }

  logout(): void {
    this.loginService.logout();
    this.router.navigate(['']);
  }
}

