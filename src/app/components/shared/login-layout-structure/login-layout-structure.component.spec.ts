import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLayoutStructureComponent } from './login-layout-structure.component';

describe('LoginLayoutStructureComponent', () => {
  let component: LoginLayoutStructureComponent;
  let fixture: ComponentFixture<LoginLayoutStructureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginLayoutStructureComponent]
    });
    fixture = TestBed.createComponent(LoginLayoutStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
