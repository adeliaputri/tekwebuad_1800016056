import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HalamanBaruComponent } from './halaman-baru.component';

describe('HalamanBaruComponent', () => {
  let component: HalamanBaruComponent;
  let fixture: ComponentFixture<HalamanBaruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HalamanBaruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HalamanBaruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
