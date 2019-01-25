import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { AnggotaModel } from './anggota.model';

@Injectable()
export class AnggotaService {
    
    constructor(private http: HttpClient) {}

    getListAnggota(): Observable<AnggotaModel[]> {
        return this.http.get<AnggotaModel[]>(environment.basePath + '/api/anggota/list');
    }

    infoServer(): Observable<Object[]> {
        return this.http.get<Object[]>(environment.basePath + '/api/v1/ping');
    }

    simpanKontak( kontak: AnggotaModel): Observable<AnggotaModel> {
        return this.http.post<AnggotaModel>(environment.basePath + '/api/anggota/save', kontak);
    }

    getAnggota(id: string): Observable<AnggotaModel> {
        return this.http.get<AnggotaModel>(environment.basePath + '/api/anggota/' + id);
    }

}