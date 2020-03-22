import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {


  registerForm:FormGroup;
  submitted = false;
  loading = false;
  
  constructor(private _fb: FormBuilder,
    private router: Router) { 
    
  }

  ngOnInit() {

    this.registerForm = this._fb.group({

      mailid: ['', [Validators.required ]],
      password: ['', [Validators.required , Validators.minLength(6)]],
      firstname: ['', [Validators.required ]],
      lastname: ['', [Validators.required]],
      location: ['', [Validators.required]],
      mobile: ['', [Validators.required, ]],
  });

  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    this.loading = true;
    // this.loading = true;
    // this.userService.register(this.registerForm.value)
    //     .pipe(first())
    //     .subscribe(
    //         data => {
    //             this.alertService.success('Registration successful', true);
    //             this.router.navigate(['/login']);
    //         },
    //         error => {
    //             this.alertService.error(error);
    //             this.loading = false;
    //         });
}

}
