import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { HttpService } from './http.service';
import { StorageService } from './storage.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { AuthConstants } from '../config/auth-constants';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData$ = new BehaviorSubject<any>('');

  constructor(
    private afAuth: AngularFireAuth,
    private httpService: HttpService, 
    private storageService: StorageService, 
    private router: Router
    ) { }

  getUserData() {
    this.storageService.get(AuthConstants.uid).then(res => {
      this.userData$.next(res);
    })
  }

  // login (postData: any): Observable<any> {
  //   return this.httpService.post('login', postData)
  // }

  // signup (postData: any): Observable<any> {
  //   return this.httpService.post('signup', postData)
  // }

  place_order (postData: any): Observable<any> {
    return this.httpService.post('main:place_order', postData)
  }

  count (postData: any): Observable<any> {
    return this.httpService.post('dh-staff-main',postData);
  }

  signout () {
    this.storageService.removeItem(AuthConstants.uid).then(res => {
      this.userData$.next('');
      this.router.navigate(['signin']);
    })
  }
}
