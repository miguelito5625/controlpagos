import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuModuloClienteComponent } from './menu-modulo-cliente.component';

describe('MenuModuloClienteComponent', () => {
  let component: MenuModuloClienteComponent;
  let fixture: ComponentFixture<MenuModuloClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuModuloClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuModuloClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
