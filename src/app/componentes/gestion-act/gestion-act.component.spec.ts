import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionActComponent } from './gestion-act.component';

describe('GestionActComponent', () => {
  let component: GestionActComponent;
  let fixture: ComponentFixture<GestionActComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionActComponent]
    });
    fixture = TestBed.createComponent(GestionActComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
