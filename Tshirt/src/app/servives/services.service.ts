import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  isSelectedRoute = 'home';
  private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');
  
  constructor() { }

  navigate(direction: string){
    this.isSelectedRoute = direction;
  }

  setLoggedIn(value :boolean){
    this.loggedInStatus = value;
    localStorage.setItem('loggedIn','true');
  }

}
