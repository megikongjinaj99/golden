import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveauctionsComponent } from './activeauctions.component';

describe('ActiveauctionsComponent', () => {
  let component: ActiveauctionsComponent;
  let fixture: ComponentFixture<ActiveauctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveauctionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveauctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
