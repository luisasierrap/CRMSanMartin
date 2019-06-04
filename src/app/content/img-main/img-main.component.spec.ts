import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgMainComponent } from './img-main.component';

describe('ImgMainComponent', () => {
  let component: ImgMainComponent;
  let fixture: ComponentFixture<ImgMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
