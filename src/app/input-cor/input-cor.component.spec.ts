import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCorComponent } from './input-cor.component';

describe('InputCorComponent', () => {
  let component: InputCorComponent;
  let fixture: ComponentFixture<InputCorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputCorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
