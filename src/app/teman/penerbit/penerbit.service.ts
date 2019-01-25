import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { PenerbitModel } from './penerbit.model';

@Injectable()
export class PenerbitService {
    
    constructor(private http: HttpClient) {}

    getListPenerbit(): Observable<PenerbitModel[]> {
        return this.http.get<PenerbitModel[]>(environment.basePath + '/api/penerbit/list');
    }

    // infoServer(): Observable<Object[]> {
    //     return this.http.get<Object[]>(environment.basePath + '/api/v1/ping');
    // }

    simpanKontak( kontak: PenerbitModel): Observable<PenerbitModel> {
        return this.http.post<PenerbitModel>(environment.basePath + '/api/penerbit/save', kontak);
    }

    // getAnggota(id: string): Observable<AnggotaModel> {
    //     return this.http.get<AnggotaModel>(environment.basePath + '/api/anggota/{id}');
    // }

}