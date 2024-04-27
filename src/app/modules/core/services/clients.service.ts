import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Observable, map } from 'rxjs';
import {
  Client,
  ClientResponse,
  GetClientsResponse,
  PostClient,
} from '../models/client.model';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getClients(
    pageIndex: number,
    itemsPerPage: number,
    sortDirection: string,
    sortColumnName: string,
  ): Observable<GetClientsResponse> {
    let params;
    if (sortColumnName) {
      params = new HttpParams()
        .append('_page', pageIndex)
        .append('_limit', itemsPerPage)
        .append('_sort', sortColumnName)
        .append('_order', sortDirection);
    } else {
      params = new HttpParams()
        .append('_page', pageIndex)
        .append('_limit', itemsPerPage);
    }
    return this.http
      .get<ClientResponse[]>(`${this.apiUrl}/clients`, {
        observe: 'response',
        params,
      })
      .pipe(
        map((response) => {
          if (!response.body) {
            return { clients: [], totalCount: 0 };
          }
          const clientsArr: Client[] = response.body.map(
            ({ id, firstname, surname, email, phone, address, postcode }) =>
              new Client(
                id,
                firstname,
                surname,
                email,
                phone,
                address,
                postcode,
              ),
          );

          return {
            clients: clientsArr,
            totalCount: Number(response.headers.get('X-Total-Count')),
          };
        }),
      );
  }

  postClient(clientData: PostClient): Observable<Client> {
    return this.http
      .post<ClientResponse>(`${this.apiUrl}/clients`, clientData)
      .pipe(
        map(
          ({ id, firstname, surname, email, phone, address, postcode }) =>
            new Client(id, firstname, surname, email, phone, address, postcode),
        ),
      );
  }
}
