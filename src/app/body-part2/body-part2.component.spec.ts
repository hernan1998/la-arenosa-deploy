import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyPart2Component } from './body-part2.component';

describe('BodyPart2Component', () => {
  let component: BodyPart2Component;
  let fixture: ComponentFixture<BodyPart2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyPart2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyPart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
