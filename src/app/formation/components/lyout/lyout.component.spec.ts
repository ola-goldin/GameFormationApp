import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LyoutComponent } from './lyout.component';

describe('LyoutComponent', () => {
  let component: LyoutComponent;
  let fixture: ComponentFixture<LyoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LyoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LyoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
