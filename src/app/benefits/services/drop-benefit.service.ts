import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DropBenefit } from '../models/drop-benefit';

@Injectable({
  providedIn: 'root'
})
export class DropBenefitService {

  private endpointUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getBenefits(campaignId: String): Observable<DropBenefit[]> {
    return this.http.get<DropBenefit[]>(this.endpointUrl + "/benefitsfor?campaignId=" + campaignId)
  }
}
