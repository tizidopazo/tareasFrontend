import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class tareasService {
  constructor(private http: HttpClient) {}
  URL_BACKEND = 'http://localhost:3000';
  getTareas(): Observable<any> {
    return this.http.get(`${this.URL_BACKEND}/tareas`);
    //SIMULACION DE COMUNICACION CON API BACKEND
  }

  getTarea(id_tarea: number): Observable<any> {
    return this.http.get(`${this.URL_BACKEND}/tareas/${id_tarea}`);
  }

  deleteTarea(id_tarea: number): Observable<any> {
    return this.http.delete(`${this.URL_BACKEND}/tareas/eliminar/${id_tarea}`);
  }

  editTarea(id_tarea: number, tarea: any): Observable<any> {
    return this.http.put(
      `${this.URL_BACKEND}/tareas/editar/${id_tarea}`,
      tarea
    );
  }

  crearTarea(tarea: any): Observable<any> {
    return this.http.post(`${this.URL_BACKEND}/tareas/crear`, tarea);
  }
}
