import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BranchServiceService {

  constructor(private http:HttpClient) { }

  getBranch() {
    return this.http.get("http://localhost:8080/findallbranch")

  }
  addBranch(branch:any) {
    return this.http.post("http://localhost:8080/savebranch",branch)
  }

  

}
