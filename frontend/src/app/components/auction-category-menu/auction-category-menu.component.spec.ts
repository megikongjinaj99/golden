import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionCategoryMenuComponent } from './auction-category-menu.component';

describe('AuctionCategoryMenuComponent', () => {
  let component: AuctionCategoryMenuComponent;
  let fixture: ComponentFixture<AuctionCategoryMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuctionCategoryMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionCategoryMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
