import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsdetailpageComponent } from './newsdetailpage.component';

describe('NewsdetailpageComponent', () => {
  let component: NewsdetailpageComponent;
  let fixture: ComponentFixture<NewsdetailpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsdetailpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsdetailpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
