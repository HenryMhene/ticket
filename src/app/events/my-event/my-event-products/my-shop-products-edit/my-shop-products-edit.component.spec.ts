import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyeventProductsEditComponent } from './my-event-products-edit.component';

describe('MyeventProductsEditComponent', () => {
  let component: MyeventProductsEditComponent;
  let fixture: ComponentFixture<MyeventProductsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyeventProductsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyeventProductsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
