import { Injectable,Inject } from '@angular/core';

import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Calificador } from '../models/calificador';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CalificadorService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string ) { }

  /** POST: add a new task to the server */
  add(calificador: Calificador): Observable<Calificador> {
    return this.http.post<Calificador>(this.baseUrl+'api/Calificador', calificador, httpOptions).pipe(
      tap((newCalificador: Calificador) => this.log(`Calificador agregado`)),
      catchError(this.handleError<Calificador>('AddCalificador'))
    )
  }

  /** GET Task from the server */
  getAll():Observable<Calificador[]>
  {
    return this.http.get<Calificador[]>(this.baseUrl+'api/Calificador').pipe(
    tap(/*=>this.log('Se Consulta la información')*/),
    catchError(this.handleError<Calificador[]>('getAll',[]))
    );
  }

  /** GET task by id. Will 404 if id not found */
  get(id: number): Observable<Calificador>
  {
    const url = `${this.baseUrl + 'api/Calificador'}/${id}`;
    return this.http.get<Calificador>(url).pipe(
    tap(_ => this.log(`fetched calificador id=${id}`)),
    catchError(this.handleError<Calificador>(`getPregunta id=${id}`))
    );
  }

  /** PUT: update the Task on the server */
  update (calificador: Calificador): Observable<any> {
    const url =`${this.baseUrl + 'api/Calificador'}/${calificador.id}`;
    return this.http.put(url, calificador, httpOptions).pipe(
    tap(_ => this.log(`updated calificador id=${calificador.id}`)),
    catchError(this.handleError<any>('calificador'))
    );
  }

  /** DELETE: delete the task from the server */
  delete (calificador: Calificador | number): Observable<Calificador> {
    const id = typeof calificador === 'number' ? calificador : calificador.id;
    const url =
    
    `${this.baseUrl + 'api/Calificador'}/${id}`;
    
    return this.http.delete<Calificador>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted calificador id=${id}`)),
    catchError(this.handleError<Calificador>('delete Calificador'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
    console.error(error);
    this.log(`${operation} failed: ${error.message}`);
    return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    alert(`DocenteService: ${message}`);
  }

}
