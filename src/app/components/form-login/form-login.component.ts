import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css'],
})
export class FormLoginComponent implements OnInit {
  form: FormGroup;
  //validator: Validators;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(12),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  public get getPassword() {
    return this.form.get('password');
  }

  public get getUsername() {
    return this.form.get('username');
  }

  public get getEmail() {
    return this.form.get('email');
  }

  onEnviar(event: Event) {
    event.preventDefault;
    if (this.form.valid) {
      alert('Todo salio bien');
    } else {
      this.form.markAllAsTouched;
    }
  }

  ngOnInit(): void {}
}
