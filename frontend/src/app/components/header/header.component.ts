import { UserAuthenticationService } from './../../user-authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: UserAuthenticationService  ) { }

  ngOnInit() {
  }

}
