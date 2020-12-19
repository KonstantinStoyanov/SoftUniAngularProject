import { ComponentFixture, TestBed } from '@angular/core/testing';

import { getPictureComponent } from './getPicture.component';

describe('getPictureComponent', () => {
  let component: getPictureComponent;
  let fixture: ComponentFixture<getPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ getPictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(getPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
