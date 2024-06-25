import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginform!: FormGroup;

  @Output() hideChange = new EventEmitter<boolean>();

  isHidden: boolean = true;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginform = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  onSubmit() {
    if (this.loginform.valid) {
      console.log('Login form submitted:', this.loginform.value);
      // Perform login logic here (e.g., authentication)

      // Redirect to home page upon successful login
      this.router.navigate(['/']);
    } else {
      console.error('Login form is invalid.');
    }
  }

  toggleVisibility() {
    this.hideChange.emit(this.isHidden);
  }
}
