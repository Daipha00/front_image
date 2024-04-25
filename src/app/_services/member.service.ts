import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from '../_model/member.model';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private httpClient: HttpClient) { }

  public addnewMember(member: FormData) {
    return this.httpClient.post<Member>("http://localhost:9090/addMember", member)
  }
}
