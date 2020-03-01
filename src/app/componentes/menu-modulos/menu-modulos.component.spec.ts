import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuModulosComponent } from './menu-modulos.component';

describe('MenuModulosComponent', () => {
  let component: MenuModulosComponent;
  let fixture: ComponentFixture<MenuModulosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuModulosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuModulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
