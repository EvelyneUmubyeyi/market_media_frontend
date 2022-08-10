import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerDescriptionComponent } from './seller-description.component';

describe('SellerDescriptionComponent', () => {
  let component: SellerDescriptionComponent;
  let fixture: ComponentFixture<SellerDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
