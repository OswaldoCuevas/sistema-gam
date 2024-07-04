import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPatrocinadoresComponent } from './layout-patrocinadores.component';

describe('LayoutPatrocinadoresComponent', () => {
  let component: LayoutPatrocinadoresComponent;
  let fixture: ComponentFixture<LayoutPatrocinadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutPatrocinadoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutPatrocinadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
