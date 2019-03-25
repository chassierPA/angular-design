import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticNavbarComponent } from './static-navbar.component';

describe('StaticNavbarComponent', () => {
  let component: StaticNavbarComponent;
  let fixture: ComponentFixture<StaticNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
