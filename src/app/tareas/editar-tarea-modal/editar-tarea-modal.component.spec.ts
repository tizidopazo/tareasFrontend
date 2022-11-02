import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTareaModalComponent } from './editar-tarea-modal.component';

describe('EditarTareaModalComponent', () => {
  let component: EditarTareaModalComponent;
  let fixture: ComponentFixture<EditarTareaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarTareaModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarTareaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
