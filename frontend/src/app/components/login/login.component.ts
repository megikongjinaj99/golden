import { Component, OnInit } from '@angular/core';
import { OktaAuthModule } from '@okta/okta-angular';
import myAppConfig from 'src/app/config/my-app-config';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  oktaSignin: any;

  constructor(private oktaAuthService: OktaAuthModule) { }

  ngOnInit(): void {
  }

}
