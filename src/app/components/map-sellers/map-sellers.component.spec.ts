import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapSellersComponent } from './map-sellers.component';

describe('MapSellersComponent', () => {
  let component: MapSellersComponent;
  let fixture: ComponentFixture<MapSellersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapSellersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapSellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
