import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyeventProductsComponent } from './my-event-products.component';

describe('MyeventProductsComponent', () => {
  let component: MyeventProductsComponent;
  let fixture: ComponentFixture<MyeventProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyeventProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyeventProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
