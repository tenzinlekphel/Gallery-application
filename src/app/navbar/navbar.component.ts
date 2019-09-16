import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title: 'Gallery';
  user: Observable<firebase.User>;
  constructor(private authService: AuthenticationService, private route: Router) { }

  ngOnInit() {
    this.user = this.authService.authUser();
  }


  logOut() {
    this.authService.logout().then(onResolve => this.route.navigate['/']);

  }

}
