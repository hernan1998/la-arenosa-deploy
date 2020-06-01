import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyPart1Component } from './body-part1.component';

describe('BodyPart1Component', () => {
  let component: BodyPart1Component;
  let fixture: ComponentFixture<BodyPart1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyPart1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyPart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
