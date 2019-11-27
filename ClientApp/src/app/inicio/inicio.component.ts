import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  login()
  {
      this.authService.login('boris', '123456');
  }

  logout() {
      this.authService.logout();
  }
  
  ngOnInit() {
  }

}
