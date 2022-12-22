import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide: Boolean = true;
  isMobile: boolean = false;


  constructor() {
    this.loginForm = this.createLoginForm();

  }

  ngOnInit() {
    this.checkIsMobile()
  }

  /**
   *
   *
   * @return {*} 
   * @memberof LoginComponent
   */
  createLoginForm() {
    return new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.min(3)]),
      password: new FormControl(null, [Validators.required, Validators.min(6), Validators.max(12)])
    })
  }

  /**
   *
   *
   * @memberof LoginComponent
   */
  checkIsMobile() {
    if (window.innerWidth < 768) {
      this.isMobile = true

    } else {
      this.isMobile = false

    }

  }

  /**
   *
   *
   * @memberof LoginComponent
   */
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkIsMobile()


  }


}
