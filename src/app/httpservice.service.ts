
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
 
import { Injectable } from '@angular/core';
 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { map, catchError} from 'rxjs/operators';
 
// import { repos } from './repos';
 
@Injectable({
  providedIn: 'root'
})
export class HTTPServiceService {
 
  baseURL: string = "https://jsonplaceholder.typicode.com/posts";
 
  constructor(private http: HttpClient) {
  }
 
  getRepos(): Observable<any> {
    return this.http.get(this.baseURL)
  }


 
}
