import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-editar-tarea-modal',
  templateUrl: './editar-tarea-modal.component.html',
  styleUrls: ['./editar-tarea-modal.component.css'],
})
export class EditarTareaModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EditarTareaModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  cancelModal() {
    this.dialogRef.close();
  }
}
