import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HansonComponent } from './hanson.component';

describe('HansonComponent', () => {
  let component: HansonComponent;
  let fixture: ComponentFixture<HansonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HansonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HansonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
