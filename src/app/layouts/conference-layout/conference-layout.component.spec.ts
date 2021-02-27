import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceLayoutComponent } from './conference-layout.component';

describe('ConferenceLayoutComponent', () => {
  let component: ConferenceLayoutComponent;
  let fixture: ComponentFixture<ConferenceLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferenceLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
