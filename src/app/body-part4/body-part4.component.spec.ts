import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyPart4Component } from './body-part4.component';

describe('BodyPart4Component', () => {
  let component: BodyPart4Component;
  let fixture: ComponentFixture<BodyPart4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyPart4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyPart4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
