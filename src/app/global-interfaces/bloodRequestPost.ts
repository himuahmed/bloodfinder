import { Person } from "../app-person/interfaces/person";

export interface BloodRequestPost {
    UserId:string;
    BloodGroup:string;
    Description:string;
    createdAt: Date;
    Person:Person
}