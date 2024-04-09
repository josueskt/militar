import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriallibroComponent } from './historiallibro.component';

describe('HistoriallibroComponent', () => {
  let component: HistoriallibroComponent;
  let fixture: ComponentFixture<HistoriallibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoriallibroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoriallibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
