import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstantesadminComponent } from './estantesadmin.component';

describe('EstantesadminComponent', () => {
  let component: EstantesadminComponent;
  let fixture: ComponentFixture<EstantesadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstantesadminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstantesadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
