import { Component, OnInit } from '@angular/core';
import  * as M from "materialize-css";


@Component({
  selector: 'app-img-main',
  templateUrl: './img-main.component.html',
  styleUrls: ['./img-main.component.css']
})
export class ImgMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let elems = document.querySelectorAll('.carousel');
    let instances = M.Carousel.init(elems, {});

  }

}
