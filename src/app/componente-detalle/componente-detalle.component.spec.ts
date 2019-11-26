import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteDetalleComponent } from './componente-detalle.component';

describe('ComponenteDetalleComponent', () => {
  let component: ComponenteDetalleComponent;
  let fixture: ComponentFixture<ComponenteDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
