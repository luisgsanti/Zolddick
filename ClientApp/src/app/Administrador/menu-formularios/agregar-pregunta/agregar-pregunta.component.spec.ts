import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPreguntaComponent } from './agregar-pregunta.component';

describe('AgregarPreguntaComponent', () => {
  let component: AgregarPreguntaComponent;
  let fixture: ComponentFixture<AgregarPreguntaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarPreguntaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarPreguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
