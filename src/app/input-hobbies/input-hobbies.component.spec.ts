import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputHobbiesComponent } from './input-hobbies.component';

describe('InputHobbiesComponent', () => {
  let component: InputHobbiesComponent;
  let fixture: ComponentFixture<InputHobbiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputHobbiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputHobbiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
