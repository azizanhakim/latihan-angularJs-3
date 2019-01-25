import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenerbitAddComponent } from './penerbit-add.component';

describe('PenerbitAddComponent', () => {
  let component: PenerbitAddComponent;
  let fixture: ComponentFixture<PenerbitAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenerbitAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenerbitAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
