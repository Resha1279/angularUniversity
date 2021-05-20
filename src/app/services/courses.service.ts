import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }


  loadCourses(): Observable<Course[]>{
    const params = new HttpParams()
    .set("page", "1")
    .set("pageSize", "5")//for how many items in one page?????not working

    return this.http.get<Course[]>('/api/courses', {params})
  }
}
