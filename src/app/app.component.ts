import { Component } from '@angular/core';
import  * as M from "materialize-css";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CRMSanMartin';

  ngOnInit(): void {
    let elems = document.querySelectorAll('.carousel');
    let instances = M.Carousel.init(elems, {});
    var navbar = document.querySelectorAll('.sidenav');
    var navBarInstance = M.Sidenav.init(navbar, {});
  }

}
