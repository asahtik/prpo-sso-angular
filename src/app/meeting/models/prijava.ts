import { Student } from "./student";
import { Termin } from "./termin";

export class Prijava {
    id?: number;
    timestamp?: number;
    potrjena?: boolean;
    email: string;
    termin: Termin;
    student: Student;
}
