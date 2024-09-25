import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignoutgComponent } from './signoutg.component';

describe('SignoutgComponent', () => {
  let component: SignoutgComponent;
  let fixture: ComponentFixture<SignoutgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignoutgComponent]
    });
    fixture = TestBed.createComponent(SignoutgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
