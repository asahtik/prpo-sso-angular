import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Profesor } from '../models/profesor';
import { Student } from '../models/student';
import { Termin } from '../models/termin';
import { Prijava } from '../models/prijava';

@Injectable({
  providedIn: 'root'
})
export class MeetupService {

  constructor(private http: HttpClient) { }

  public getProfesorji(): Promise<Profesor[]> {
    const url: string = "http://localhost:8080/v1/profesorji";
    return this.http.get(url).toPromise().then(data => data as Profesor[]).catch(this.handleError);
  }

  public getProfesorById(id: number): Promise<Profesor> {
    const url: string = `http://localhost:8080/v1/profesorji/${id}`;
    return this.http.get(url).toPromise().then(data => data as Profesor).catch(this.handleError);
  }

  public getStudenti(): Promise<Student[]> {
    const url: string = "http://localhost:8080/v1/studenti";
    return this.http.get(url).toPromise().then(data => data as Student[]).catch(this.handleError);
  }

  public getStudentById(id: number): Promise<Student> {
    const url: string = `http://localhost:8080/v1/studenti/${id}`;
    return this.http.get(url).toPromise().then(data => data as Student).catch(this.handleError);
  }

  public getTermini(): Promise<Termin[]> {
    const url: string = "http://localhost:8080/v1/termini";
    return this.http.get(url).toPromise().then(data => data as Termin[]).catch(this.handleError);
  }

  public getTerminById(id: number): Promise<Termin> {
    const url: string = `http://localhost:8080/v1/termini/${id}`;
    return this.http.get(url).toPromise().then(data => data as Termin).catch(this.handleError);
  }

  public getPrijave(): Promise<Prijava[]> {
    const url: string = "http://localhost:8080/v1/prijave";
    return this.http.get(url).toPromise().then(data => data as Prijava[]).catch(this.handleError);
  }

  public getPrijavaById(id: number): Promise<Prijava> {
    const url: string = `http://localhost:8080/v1/prijave/${id}`;
    return this.http.get(url).toPromise().then(data => data as Prijava).catch(this.handleError);
  }

  public postPrijava(p: Prijava): Promise<Prijava> {
    const url: string = "http://localhost:8080/v1/prijave";
    const properties = {
      headers: new HttpHeaders({
        'Content-Type': 'application/si.fri.prpo.govorilneure.entitete.Prijava+json',
      })
    };
    return this.http.post(url, p, properties).toPromise().then(data => data as Prijava).catch(this.handleError);
  }

  public putPrijava(p: Prijava): Promise<Prijava> {
    const url: string = "http://localhost:8080/v1/prijave";
    const properties = {
      headers: new HttpHeaders({
        'Content-Type': 'application/si.fri.prpo.govorilneure.entitete.Prijava+json',
      })
    };
    return this.http.put(url, p, properties).toPromise().then(data => data as Prijava).catch(this.handleError);
  }

  public removePrijava(id: number): Promise<Prijava> {
    const url: string = `http://localhost:8080/v1/prijave/${id}`;
    return this.http.delete(url).toPromise().catch(this.handleError);
  }

  private handleError(err: any): Promise<any> {
    console.error(err);
    return Promise.reject(err);
  }

}
