import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyeventProductsListComponent } from './my-event-products-list.component';

describe('MyeventProductsListComponent', () => {
  let component: MyeventProductsListComponent;
  let fixture: ComponentFixture<MyeventProductsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyeventProductsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyeventProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
