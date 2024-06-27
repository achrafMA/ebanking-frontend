import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  implements OnInit{
  formLogin! : FormGroup;
  constructor(private fb : FormBuilder,private authservice: AuthService,
              private router : Router) { }
  ngOnInit():void{
    this.formLogin=this.fb.group({
      username: this.fb.control(""),
      password: this.fb.control("")
    })
  }

  handleLogin() {
    let username = this.formLogin.value.username;
    let pwd = this.formLogin.value.password;
    this.authservice.login(username,pwd).subscribe({
      next : data =>{
        this.authservice.loadProfile(data);
        this.router.navigateByUrl("/admin")
      },
      error : err =>{
        console.log(err);
      }
    })
  }
}
