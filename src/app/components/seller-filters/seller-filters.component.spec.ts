import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerFiltersComponent } from './seller-filters.component';

describe('SellerFiltersComponent', () => {
  let component: SellerFiltersComponent;
  let fixture: ComponentFixture<SellerFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
