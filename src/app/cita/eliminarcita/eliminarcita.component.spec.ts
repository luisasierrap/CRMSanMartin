import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarcitaComponent } from './eliminarcita.component';

describe('EliminarcitaComponent', () => {
  let component: EliminarcitaComponent;
  let fixture: ComponentFixture<EliminarcitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarcitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarcitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
