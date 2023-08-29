import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedauctionsComponent } from './finishedauctions.component';

describe('FinishedauctionsComponent', () => {
  let component: FinishedauctionsComponent;
  let fixture: ComponentFixture<FinishedauctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishedauctionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishedauctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
