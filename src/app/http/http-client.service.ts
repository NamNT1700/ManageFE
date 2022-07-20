import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, retry, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class HttpClientService {
    private readonly _retryTime = 2;

    constructor(
        private _httpClient: HttpClient
    
      ) { }

    get<T>(url: string): Observable<T> {
        return this._httpClient.get<T>(url)
        .pipe(
            retry(0),
            catchError(err => {
                return this.handleError(err);
            })
        )
    }

    post<T>(url: string, data: any): Observable<T> {
        return this._httpClient.post<T>(url, data)
        .pipe(
            retry(this._retryTime),
            catchError(err => {
                return this.handleError(err);
            })
        )
    }

    put<T>(url: string, data: any): Observable<T> {
        return this._httpClient.put<T>(url, data)
        .pipe(
            retry(0),
            catchError(err => {
                return this.handleError(err);
            })
        )
    }

    delete<T>(url: string, data: any): Observable<T> {
        return this._httpClient.delete<T>(url,{body: data})
        .pipe(
            retry(0),
            catchError(err => {
                return this.handleError(err);
            })
        )
    }

    handleError(err: HttpErrorResponse) {
        console.warn(err.status);
        return throwError(err);
    }

}