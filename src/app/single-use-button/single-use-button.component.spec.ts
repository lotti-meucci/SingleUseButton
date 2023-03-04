import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleUseButtonComponent } from './single-use-button.component';

describe('SingleUseButtonComponent', () => {
  let component: SingleUseButtonComponent;
  let fixture: ComponentFixture<SingleUseButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleUseButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleUseButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
