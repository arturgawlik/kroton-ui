import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import 'firebase/auth';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private fireAuth: AngularFireAuth, 
    private router: Router, private notification: NzNotificationService) {
  }

  ngOnInit() {
    this.initForm();
    this.notification.info( 'Notification Title',
    'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    {
      nzPlacement: 'bottomRight',
    })
  }

  initForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  loginFormSubmit() {
    if (this.loginForm.valid) {
      this.fireAuth.signInWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password)
      .then(r => {
        this.router.navigate(['/']);
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  loginBtnClick() {
    this.loginFormSubmit();
  }

  loginWithGoogleBtnClick() {
    this.fireAuth.signInWithPopup(new auth.GoogleAuthProvider())
    .then(r => {
      this.router.navigate(['/']);
    })
    .catch(err => {
      let msg = 'Something goes wrong... :(';
      if (err.message)
        msg = err.message;
      // this.snackBar.open(msg);
      
    });
  }

}
