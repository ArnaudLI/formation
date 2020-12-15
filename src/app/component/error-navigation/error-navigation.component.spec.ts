import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorNavigationComponent } from './error-navigation.component';

describe('ErrorNavigationComponent', () => {
  let component: ErrorNavigationComponent;
  let fixture: ComponentFixture<ErrorNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
