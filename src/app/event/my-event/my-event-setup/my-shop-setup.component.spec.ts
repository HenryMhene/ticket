import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyeventSetupComponent } from './my-event-setup.component';

describe('MyeventSetupComponent', () => {
  let component: MyeventSetupComponent;
  let fixture: ComponentFixture<MyeventSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyeventSetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyeventSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
