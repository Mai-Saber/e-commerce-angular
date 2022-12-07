import { Component } from '@angular/core';
import {FormGroup, FormControl ,Validators} from "@angular/forms"
import { Router } from '@angular/router';
import { TokenService } from '../token.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  constructor(private router: Router, public _tokenService:TokenService) { };

  account = new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl("",Validators.required)
  }
  )
  token:any=''

  handleSubmit() {
    if (this.account.valid) {
      this.router.navigate(['/home']);
      sessionStorage.setItem('account', JSON.stringify(this.account));

      // get token
      const base_url = "https:url";
      const url = base_url + `/auth/login`;
      const data = this.account
      this._tokenService.getToken(url, data).subscribe((data) => {
        this.token = data;
      })
      if (this.token !== "") {
        sessionStorage.setItem('token', this.token)
      } else {
        this.router.navigate(['/login'])
      }


    }
  }
}
