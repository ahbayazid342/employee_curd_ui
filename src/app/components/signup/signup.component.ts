import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm !: FormGroup;
  constructor (private fb:FormBuilder, private authService:AuthService) {
  }
  
  ngOnInit(): void {
    this.signupForm = this.fb.group ({
      name: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],
    })
  }

  onSignUp () {
    console.log(this.signupForm.value);
    if (this.signupForm.valid) {
      
      this.authService.signup(this.signupForm.value)
        .subscribe ({
          next: (res) => {
            alert (res.message)
          },
          error: (err) => {
            alert (err.message)
          }
        })
    } else console.log("Failed");
    
  }

}
