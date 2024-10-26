import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveUserComponent } from './reactive-user.component';

describe('ReactiveUserComponent', () => {
  let component: ReactiveUserComponent;
  let fixture: ComponentFixture<ReactiveUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReactiveUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
