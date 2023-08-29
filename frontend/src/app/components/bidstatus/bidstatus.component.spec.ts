import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidstatusComponent } from './bidstatus.component';

describe('BidstatusComponent', () => {
  let component: BidstatusComponent;
  let fixture: ComponentFixture<BidstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidstatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BidstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
