import { Component, OnInit } from '@angular/core';
import  * as M from "materialize-css";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var navbar = document.querySelectorAll('.sidenav');
    var navBarInstance = M.Sidenav.init(navbar, {});

  }

}
