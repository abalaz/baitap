import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/servives/services.service';

interface inf4 {
  id: number;
  name: string;
  gmail:any;
  pass:any;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  Users : inf4[]=[
    {
      id: 1,
      name: "nguyengiahuy",
      gmail: "nggiahuy0904",
      pass: "12345332",
    },
    {
      id: 2,
      name: "nguyenthikimthien",
      gmail: "ntkthien1801",
      pass: "123",
    },
    {
      id: 3,
      name: "tranthanhman",
      gmail: "man1233",
      pass: "1234",
    },
  ]


  constructor(private router:Router, public  userService:ServicesService) { }

  ngOnInit(): void {
    
  }

  loginUser(e:any): void{
    e.preventDefault();
    let fUser = e.target.id.value;
    let fPass = e.target.pass.value;
    console.log(fUser,fPass);

    const isExistUser = this.Users.find(item => item.gmail === fUser && item.pass === fPass);
    if (isExistUser) {
      alert("Đăng Nhập Thành Công !");
      this.router.navigate(['home']);
      localStorage.setItem('isLoginIn', 'false');
    } else {
      alert("Đăng Nhập Thất bại !");
      this.userService.setLoggedIn(false);
    }

  }

}
