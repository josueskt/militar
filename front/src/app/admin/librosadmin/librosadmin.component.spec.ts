import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosadminComponent } from './librosadmin.component';

describe('LibrosadminComponent', () => {
  let component: LibrosadminComponent;
  let fixture: ComponentFixture<LibrosadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibrosadminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibrosadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
