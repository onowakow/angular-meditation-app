import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionLoggerComponent } from './session-logger.component';

describe('SessionLoggerComponent', () => {
  let component: SessionLoggerComponent;
  let fixture: ComponentFixture<SessionLoggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionLoggerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
