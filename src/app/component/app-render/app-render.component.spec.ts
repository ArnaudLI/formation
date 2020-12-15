import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRenderComponent } from './app-render.component';

describe('AppRenderComponent', () => {
  let component: AppRenderComponent;
  let fixture: ComponentFixture<AppRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppRenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
