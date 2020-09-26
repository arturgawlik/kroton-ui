import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { shakeItAnimation } from 'src/app/utils/animations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [
    trigger('shake-it', [
      transition('* => *', [
        useAnimation(shakeItAnimation)
      ])
    ])
  ]
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  shakeCard = false;
  registerBtnLoading = false;
  allertMsg = '';

  constructor(private fb: FormBuilder, private fireAuth: AngularFireAuth,
    private router: Router) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      passwordRepeat: ['', [Validators.required, this.confirmationValidator]],
    });
  }

  get emailValidateStatus(): string {
    return this.validateStatus('email');
  }

  get passwordValidateStatus(): string {
    return this.validateStatus('password');
  }

  get passwordRepeatValidateStatus(): string {
    return this.validateStatus('passwordRepeat');
  }

  private validateStatus(field: string) {
    let status = '';
    let formControl = this.registerForm.get(field);
    if (formControl.touched || formControl.dirty) {
      status = 'success';
      if (!formControl.valid) {
        status = 'error';
      }
    }
    return status;
  }

  get emailTip(): string {
    return this.validateTip('email', 'Email');
  }

  get passwordTip(): string {
    return this.validateTip('password', 'Password');
  }

  get passwordRepeatTip(): string {
    return this.validateTip('passwordRepeat', 'Repeat password');
  }

  private validateTip(field: string, fieldName: string) {
    let tip = '';
    let formControl = this.registerForm.get(field);
    if (!formControl.valid) {
      if (formControl.errors['required']) tip = `${fieldName} is required!`;
      if (formControl.errors['email']) tip = 'This is not valid email!';
      if (formControl.errors['confirm']) tip = 'Repeat password must match Password filed!';
    }
    return tip;
  }

  registerFormSubmit() {
    if (this.registerForm.valid) {
      this.registerBtnLoading = true;
      this.fireAuth.createUserWithEmailAndPassword(this.registerForm.value.email, this.registerForm.value.password)
        .then(r => {
          this.router.navigate(['/']);
        })
        .catch(err => {
          let msg = 'Something goes wrong... :(';
          if (err.message)
            msg = err.message;
          this.allertMsg = msg;
          this.cardShake();
          this.registerBtnLoading = false;
        });
    } else {
      this.registerForm.markAllAsTouched();
      this.cardShake();
    }
  }

  cardShake() {
    this.shakeCard = !this.shakeCard;
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.registerForm.controls.password.value) {
      return { confirm: true };
    }
    return {};
  };


}
