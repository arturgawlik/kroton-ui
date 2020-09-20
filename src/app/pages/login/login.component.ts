import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import 'firebase/auth';
import { NotyficationsService } from 'src/app/utils/services/notyfication';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;
  cardShakeClass = false;
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
      userName: ['', { validators: [Validators.required, Validators.email], updateOn: 'blur' }],
      password: ['', { validators: [Validators.required], updateOn: 'blur' }]
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
      if (username.errors['email']) tip = 'This is not valid email!';
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
          let msg = 'Something goes wrong... :(';
          if (err.message)
            msg = err.message;
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
    this.cardShakeClass = true;
    setTimeout(() => this.cardShakeClass = false, 300);
  }

}
