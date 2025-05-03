import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServergamesettinggeneratorComponent } from './servergamesettinggenerator.component';

describe('ServergamesettinggeneratorComponent', () => {
  let component: ServergamesettinggeneratorComponent;
  let fixture: ComponentFixture<ServergamesettinggeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServergamesettinggeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServergamesettinggeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
