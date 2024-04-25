import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandle } from '../_model/file-handle.model';
import { Member } from '../_model/member.model';
import { NgForm } from '@angular/forms';
import { response } from 'express';
import { error } from 'console';
import { HttpErrorResponse } from '@angular/common/http';
import { MemberService } from '../_services/member.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.css'
})
export class ManageComponent implements OnInit{

  member: Member = {
    memberImage: [],
    memberName: "",
    gender: "",
    dob: 0,
    issueDate: 0,
    expiryDate: 0
  }

  constructor(private memberService: MemberService, private sanitizer: DomSanitizer){
  }

  ngOnInit(): void {
  
  }

  addnewMember(memberForm: NgForm) {
    const memberFormData = this.prepareFormData(this.member);

    this.memberService.addnewMember(memberFormData).subscribe(
      (response: Member) => {
        memberForm.reset();
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  prepareFormData(member:Member): FormData {
    const formData = new FormData();

    formData.append(
      'member', 
      new Blob([JSON.stringify(member)], {type: 'application/json'})
    );

    for (var i = 0; i < member.memberImage.length; i++){
      formData.append(
        'memberImage',
        member.memberImage[i].file,
        member.memberImage[i].file.name
      )
    }

    return formData;
  }

onFileSelected(event: any) {
if(event.target.files){
  const file = event.target.files[0];

  const fileHandle: FileHandle = {
    file: file,
    url: this.sanitizer.bypassSecurityTrustUrl(
      window.URL.createObjectURL(file)
    )
  }

this.member.memberImage.push(fileHandle);

}
}

}
