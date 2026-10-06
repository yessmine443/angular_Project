import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MemberModel } from '../models/member';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  private readonly url = 'http://localhost:3000/members';

  constructor(private http: HttpClient) {}

  // READ : tous les membres
  GetAllMembers() {
    return this.http.get<MemberModel[]>(this.url);
  }

  // CREATE : POST
  addMember(member: Partial<MemberModel>) {
    return this.http.post<void>(this.url, member);
  }

  // READ : un membre par id (mode update)
  getMemberById(id: string) {
    return this.http.get<MemberModel>(`${this.url}/${id}`);
  }

  // UPDATE : PUT
  updateMember(id: string, member: Partial<MemberModel>) {
    return this.http.put<void>(`${this.url}/${id}`, member);
  }

  // DELETE
  deleteMember(id: string) {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}