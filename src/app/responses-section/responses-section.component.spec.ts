import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsesSectionComponent } from './responses-section.component';

describe('ResponsesSectionComponent', () => {
  let component: ResponsesSectionComponent;
  let fixture: ComponentFixture<ResponsesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsesSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
