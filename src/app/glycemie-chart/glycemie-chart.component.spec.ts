import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlycemieChartComponent } from './glycemie-chart.component';

describe('GlycemieChartComponent', () => {
  let component: GlycemieChartComponent;
  let fixture: ComponentFixture<GlycemieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlycemieChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GlycemieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
