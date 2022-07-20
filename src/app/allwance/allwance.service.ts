import { Injectable } from '@angular/core';
import { HttpClientService } from '../http/http-client.service';
import { UrlDefine } from '../api/urlDefine';
import { AllwanceData, ApiResponse, RequestTable } from 'src/type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllwanceService {

  constructor(
    private _httpClientService: HttpClientService
  ) { }
  GetAllUser(request:RequestTable):Observable<ApiResponse<AllwanceData[]>>{
    const url = `${UrlDefine.protocol}${UrlDefine.manageDomain}${UrlDefine.manageAPI.allwance.getAll}`;
    return this._httpClientService.post<ApiResponse<AllwanceData[]>>(url,request);
  }
}
