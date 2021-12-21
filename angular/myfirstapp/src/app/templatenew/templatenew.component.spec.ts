import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatenewComponent } from './templatenew.component';

describe('TemplatenewComponent', () => {
  let component: TemplatenewComponent;
  let fixture: ComponentFixture<TemplatenewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatenewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatenewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
