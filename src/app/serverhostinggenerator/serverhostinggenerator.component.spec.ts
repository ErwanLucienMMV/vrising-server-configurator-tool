import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerhostinggeneratorComponent } from './serverhostinggenerator.component';

describe('ServerhostinggeneratorComponent', () => {
  let component: ServerhostinggeneratorComponent;
  let fixture: ComponentFixture<ServerhostinggeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServerhostinggeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerhostinggeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
