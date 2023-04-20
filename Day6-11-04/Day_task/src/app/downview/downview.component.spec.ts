import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownviewComponent } from './downview.component';

describe('DownviewComponent', () => {
  let component: DownviewComponent;
  let fixture: ComponentFixture<DownviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
