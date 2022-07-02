import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from './servives/services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tshirt';
  constructor(private router:Router, public userService: ServicesService) {
    
  }
}
