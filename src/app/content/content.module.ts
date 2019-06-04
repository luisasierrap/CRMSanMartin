import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgMainComponent } from './img-main/img-main.component';

@NgModule({
  declarations: [ImgMainComponent],
  imports: [
    CommonModule
  ],
  exports:[
    ImgMainComponent
  ]
})
export class ContentModule { }
