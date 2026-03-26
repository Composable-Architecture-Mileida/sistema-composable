import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseNotification } from './base-notification';

describe('BaseNotification', () => {
  let component: BaseNotification;
  let fixture: ComponentFixture<BaseNotification>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseNotification],
    }).compileComponents();

    fixture = TestBed.createComponent(BaseNotification);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
