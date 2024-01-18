import { ComponentFixture, TestBed } from '@angular/core/testing';

import { eventComponent } from './event.component';

describe('eventComponent', () => {
  let component: eventComponent;
  let fixture: ComponentFixture<eventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ eventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(eventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
