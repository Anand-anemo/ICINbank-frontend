import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from 'src/app/_model/user';
import { AuthService } from 'src/app/_services/auth.service';
import { LoginService } from 'src/app/_services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  returnUrl!: string;
  isLoginError : boolean = false;
  
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private loginService : LoginService,
    private authService : AuthService){}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

   // for accessing the form fields
   get fval() { return this.loginForm.controls; }

   onFormSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    
    this.loading = true;
    const result:Login= Object.assign({}, this.loginForm.value);
    this.loginService.loginUser(result.username,result.password).subscribe(
      (data : any) =>{
        localStorage.setItem('login',data.loginStatus);
        localStorage.setItem('username',data.username);
        if(data.loginStatus==true){
          Swal.fire({
            icon: 'success',
            title: 'Login successful',
            showConfirmButton: false,
            timer: 2000
          })
          this.router.navigate(['/home']);
        }
        else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: data.responseMessage,
          })
         this.router.navigate(['/login']);   
         this.loading = false;
        }
      },
    (err : HttpErrorResponse)=>{
      this.isLoginError = true;
    });

    const logindata = new Login();
    this.authService.authenticate(this.isLoginError);
        
  }

}
