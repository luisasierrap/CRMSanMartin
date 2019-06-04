import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarcitaComponent } from './modificarcita.component';

describe('ModificarcitaComponent', () => {
  let component: ModificarcitaComponent;
  let fixture: ComponentFixture<ModificarcitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarcitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarcitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
