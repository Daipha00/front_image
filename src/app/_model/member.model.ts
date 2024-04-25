import { FileHandle } from "./file-handle.model";


export interface Member{
    memberName: String,
    gender: String,
    dob: number,
    issueDate: number,
    expiryDate: number,
    memberImage: FileHandle[]

}