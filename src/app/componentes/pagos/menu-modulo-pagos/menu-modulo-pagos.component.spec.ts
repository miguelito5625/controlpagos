import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuModuloPagosComponent } from './menu-modulo-pagos.component';

describe('MenuModuloPagosComponent', () => {
  let component: MenuModuloPagosComponent;
  let fixture: ComponentFixture<MenuModuloPagosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuModuloPagosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuModuloPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
