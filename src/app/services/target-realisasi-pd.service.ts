import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TargetRealisasiPdService {
  

  constructor(private config: ConfigService, private http: HttpClient) { }

  getTargetRealisasiPd(): Observable<any> {
    return this.http.post<any>(this.config.url + "/api/pd/get-target-in-current-year", {});
  }

}
