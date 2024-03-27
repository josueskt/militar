import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecionesadminComponent } from './secionesadmin.component';

describe('SecionesadminComponent', () => {
  let component: SecionesadminComponent;
  let fixture: ComponentFixture<SecionesadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecionesadminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecionesadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
