import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tareasService } from './tareas.service';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { EditarTareaModalComponent } from './editar-tarea-modal/editar-tarea-modal.component';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'],
})
export class TareasComponent implements OnInit {
  constructor(private tareasServ: tareasService, public dialog: MatDialog) {}
  displayedColumns: string[] = ['id', 'tarea', 'tiempo', 'accion', 'accion2'];
  dataSource: any;

  ngOnInit(): void {
    this.tareasServ.getTareas().subscribe((data: any) => {
      this.dataSource = data;
    });
  }

  borrarTarea(id_tarea: number) {
    this.tareasServ.deleteTarea(id_tarea).subscribe((response) => {
      Swal.fire({
        title: 'Exito',
        text: response.msg,
        icon: 'success',
      }).then(() => {
        this.ngOnInit();
      });
    });
  }

  editarTarea(id_tarea: number) {
    this.tareasServ.getTarea(id_tarea).subscribe((tareaRecibida) => {
      const dialogRef = this.dialog.open(EditarTareaModalComponent, {
        width: '250px',
        data: tareaRecibida,
      });
      dialogRef.afterClosed().subscribe((tareaEditada) => {
        if (tareaEditada != undefined) {
          this.tareasServ
            .editTarea(id_tarea, tareaEditada)
            .subscribe((response) => {
              Swal.fire({
                title: 'Exito',
                text: response.msg,
                icon: 'success',
              }).then(() => {
                this.ngOnInit();
              });
            });
        }
      });
    });
  }

  async nuevaTarea() {
    let nuevaT: any = {};
    await Swal.fire({
      title: 'Crear nueva Tarea',
      input: 'text',
      inputLabel: 'Ingresar nombre de la tarea',
      inputPlaceholder: 'Ex. Pintar',
    }).then(async (result) => {
      if (result.isConfirmed) {
        nuevaT.nombre = result.value;
        await Swal.fire({
          title: 'Crear nueva Tarea',
          input: 'text',
          inputLabel: 'Ingresar tiempo estimado de la tarea',
          inputPlaceholder: 'Ex. 60 seg',
        }).then(async (result) => {
          if (result.isConfirmed) {
            nuevaT.tiempo = result.value;
            this.tareasServ.crearTarea(nuevaT).subscribe((response) => {
              Swal.fire({
                title: 'Exito',
                text: response.msg,
                icon: 'success',
              }).then(() => {
                this.ngOnInit();
              });
            });
          }
        });
      }
    });
  }
}
