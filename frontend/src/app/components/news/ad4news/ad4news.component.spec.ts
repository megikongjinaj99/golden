import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ad4newsComponent } from './ad4news.component';

describe('Ad4newsComponent', () => {
  let component: Ad4newsComponent;
  let fixture: ComponentFixture<Ad4newsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ad4newsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ad4newsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
