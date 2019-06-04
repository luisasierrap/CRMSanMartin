import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadircitaComponent } from './anadircita.component';

describe('AnadircitaComponent', () => {
  let component: AnadircitaComponent;
  let fixture: ComponentFixture<AnadircitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnadircitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadircitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
