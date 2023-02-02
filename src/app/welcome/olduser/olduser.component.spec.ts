import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlduserComponent } from './olduser.component';

describe('OlduserComponent', () => {
  let component: OlduserComponent;
  let fixture: ComponentFixture<OlduserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlduserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
