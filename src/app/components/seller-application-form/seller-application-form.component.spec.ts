import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerApplicationFormComponent } from './seller-application-form.component';

describe('SellerApplicationFormComponent', () => {
  let component: SellerApplicationFormComponent;
  let fixture: ComponentFixture<SellerApplicationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerApplicationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerApplicationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
