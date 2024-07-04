import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPatrocinadoresComponent } from './formulario-patrocinadores.component';

describe('FormularioPatrocinadoresComponent', () => {
  let component: FormularioPatrocinadoresComponent;
  let fixture: ComponentFixture<FormularioPatrocinadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioPatrocinadoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioPatrocinadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
