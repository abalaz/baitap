import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/servives/services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router, public userService: ServicesService) {
    
  }

  ngOnInit(): void {
  }
  getlogin(direction: string):void{
    this.userService.navigate(direction);
    this.router.navigate([direction]);
    this.router.navigate([''])
    localStorage.clear();
  }
}
