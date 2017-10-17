import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMedianComponent } from './get-median.component';

describe('GetMedianComponent', () => {
  let component: GetMedianComponent;
  let fixture: ComponentFixture<GetMedianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetMedianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetMedianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
