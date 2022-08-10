import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerApplicationsComponent } from './seller-applications.component';

describe('SellerApplicationsComponent', () => {
  let component: SellerApplicationsComponent;
  let fixture: ComponentFixture<SellerApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerApplicationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
