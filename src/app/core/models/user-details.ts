import { User } from "./user";

export interface UserDetails extends User {
    age:number;
    gender: string;
    email: string;
    phone: string;
    company?:{
        name: string;
        department: string;
        title: string;
    }
    address: {
        city: string;
        state: string;
        country: string;
    };
}
