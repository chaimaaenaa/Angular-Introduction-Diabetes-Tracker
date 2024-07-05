import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlycemieUpdateComponent } from './glycemie-update.component';

describe('GlycemieUpdateComponent', () => {
  let component: GlycemieUpdateComponent;
  let fixture: ComponentFixture<GlycemieUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlycemieUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GlycemieUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
