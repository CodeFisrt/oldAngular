import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrucuralDirComponent } from './strucural-dir.component';

describe('StrucuralDirComponent', () => {
  let component: StrucuralDirComponent;
  let fixture: ComponentFixture<StrucuralDirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StrucuralDirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrucuralDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
