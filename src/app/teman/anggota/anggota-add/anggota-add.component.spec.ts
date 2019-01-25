import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnggotaAddComponent } from './anggota-add.component';

describe('AnggotaAddComponent', () => {
  let component: AnggotaAddComponent;
  let fixture: ComponentFixture<AnggotaAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnggotaAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnggotaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
