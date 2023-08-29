import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionspageComponent } from './auctionspage.component';

describe('AuctionspageComponent', () => {
  let component: AuctionspageComponent;
  let fixture: ComponentFixture<AuctionspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuctionspageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
