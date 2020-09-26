import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import 'firebase/auth';
import { transition, trigger, useAnimation } from '@angular/animations';
import { shakeItAnimation } from '../../utils/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('shake-it', [
      transition('* => *', [
        useAnimation(shakeItAnimation)
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  shakeCard = false;
  loginBtnLoading = false;
  loginWithGoogleBtnLoading = false;
  allertMsg = '';

  constructor(private fb: FormBuilder, private fireAuth: AngularFireAuth,
    private router: Router) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  get userNameValidateStatus(): string {
    let status = '';
    let username = this.loginForm.get('userName');
    if (username.touched || username.dirty) {
      status = 'success';
      if (!username.valid) {
        status = 'error';
      }
    }
    return status;
  }

  get passwordValidateStatus(): string {
    let status = '';
    let username = this.loginForm.get('password');
    if (username.touched || username.dirty) {
      status = 'success';
      if (!username.valid) {
        status = 'error';
      }
    }
    return status;
  }

  get userNameTip(): string {
    let tip = '';
    let username = this.loginForm.get('userName');
    if (!username.valid) {
      if (username.errors['required']) tip = 'Username is required!';
    }
    return tip;
  }

  get passwordTip(): string {
    let tip = '';
    let username = this.loginForm.get('password');
    if (!username.valid) {
      if (username.errors['required']) tip = 'Password is required!';
    }
    return tip;
  }

  loginFormSubmit() {
    if (this.loginForm.valid) {
      this.loginBtnLoading = true;
      this.fireAuth.signInWithEmailAndPassword(this.loginForm.value.userName, this.loginForm.value.password)
        .then(r => {
          this.router.navigate(['/']);
        })
        .catch(err => {
          let msg = 'Wrong username or password.';
          // if (err.message)
          //   msg = err.message;
          this.allertMsg = msg;
          this.cardShake();
          this.loginBtnLoading = false;
        });
    } else {
      this.loginForm.markAllAsTouched();
      this.cardShake();
    }
  }

  loginBtnClick() {
    this.loginFormSubmit();
  }

  loginWithGoogleBtnClick() {
    this.loginWithGoogleBtnLoading = true;
    this.fireAuth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(r => {
        this.router.navigate(['/home']);
      })
      .catch(err => {
        let msg = 'Something goes wrong... :(';
        if (err.message)
          msg = err.message;
        this.allertMsg = msg;
        this.loginWithGoogleBtnLoading = false;
        this.cardShake();
      });
  }

  cardShake() {
    this.shakeCard = !this.shakeCard;
  }
}
