import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPopuComponent } from './menu-popu.component';

describe('MenuPopuComponent', () => {
  let component: MenuPopuComponent;
  let fixture: ComponentFixture<MenuPopuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuPopuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuPopuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
