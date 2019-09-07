import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpHeaders, HttpBackend, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import {of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AuthService } from '../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    users : User[];
    authForm : any;
  
    private url = 'http://localhost:8080';
  
    
  
    constructor(
      private http: HttpClient,
      private app : AuthService
    ) { }
  
    getUsers() : Observable<User[]>{
      const headers = new HttpHeaders().set('X-Auth-Token',this.app.getAuth());

      return this.http.get<User[]>(this.url+'/api/user/list',{
        headers : headers
      }).pipe(
        catchError(this.handleError<User[]>('getUsers', []))
      );
    }
  
    getUser(id:string): Observable<User>{
      return this.http.get<User>(this.url +'/user/edit/'+id+'').pipe(
        catchError(this.handleError<User>('getUser id = ${id}'))
      );
    }
  
    addUser(user:User) : Observable<any> {
      const body ={
        id: user.id,
        password : user.password,
        permission_level : user.permission_level,
        note : user.note
      };
  
      alert("add");
      return this.http.post(this.url+'/user/add',body);
    }
  
    deleteUser(userId:string): any {
      const body = {
          id : userId
      }
      return this.http.post(this.url+'/user/delete',body).pipe(
        catchError(this.handleError<User>('deleteUser id = ${id}'))
      );
    }
  
  
    updateUser(user: User): Observable<any>{
      const id = user.id;
      
      return this.http.post<User>(this.url+'/user/update', user).pipe(
        catchError(this.handleError<User>('setUser id = ' + id))
      );
    }
  
    private handleError<T> (operation = 'operation', result? : T){
      return(error : any) : Observable<T> => {
        console.error(error);
        console.log(operation+' field : '+error.message+'');
        return of(result as T);
      };
    }
}
