import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctiondetailpageComponent } from './auctiondetailpage.component';

describe('AuctiondetailpageComponent', () => {
  let component: AuctiondetailpageComponent;
  let fixture: ComponentFixture<AuctiondetailpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuctiondetailpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctiondetailpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
