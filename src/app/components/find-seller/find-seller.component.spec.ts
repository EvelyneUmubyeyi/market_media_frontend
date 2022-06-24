import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindSellerComponent } from './find-seller.component';

describe('FindSellerComponent', () => {
  let component: FindSellerComponent;
  let fixture: ComponentFixture<FindSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindSellerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
