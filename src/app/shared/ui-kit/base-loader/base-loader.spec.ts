import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseLoader } from './base-loader';

describe('BaseLoader', () => {
  let component: BaseLoader;
  let fixture: ComponentFixture<BaseLoader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseLoader],
    }).compileComponents();

    fixture = TestBed.createComponent(BaseLoader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
