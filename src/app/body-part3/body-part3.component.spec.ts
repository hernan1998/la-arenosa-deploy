import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyPart3Component } from './body-part3.component';

describe('BodyPart3Component', () => {
  let component: BodyPart3Component;
  let fixture: ComponentFixture<BodyPart3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyPart3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyPart3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
