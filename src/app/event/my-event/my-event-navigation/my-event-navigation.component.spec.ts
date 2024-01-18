import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEventNavigationComponent } from './my-event-navigation.component';

describe('MyEventNavigationComponent', () => {
  let component: MyEventNavigationComponent;
  let fixture: ComponentFixture<MyEventNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyEventNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyEventNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
