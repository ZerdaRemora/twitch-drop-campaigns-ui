import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DropCampaign } from '../models/drop-campaign';

@Injectable({
  providedIn: 'root'
})
export class DropCampaignService {

  private endpointUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getActive(): Observable<DropCampaign[]> {
    return this.http.get<DropCampaign[]>(this.endpointUrl + "/active")
  }
}
