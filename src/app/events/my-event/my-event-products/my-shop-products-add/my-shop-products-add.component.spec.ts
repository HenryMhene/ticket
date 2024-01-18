import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyeventProductsAddComponent } from './my-event-products-add.component';

describe('MyeventProductsAddComponent', () => {
  let component: MyeventProductsAddComponent;
  let fixture: ComponentFixture<MyeventProductsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyeventProductsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyeventProductsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
