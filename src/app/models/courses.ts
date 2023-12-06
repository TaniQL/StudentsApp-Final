import { Students } from "./students";

export interface Course {
    name: string;
    dateStart: Date;
    dateEnd: Date;
    teacher:string;
    id: string;
    description?: string;
    units?: number;
    Students?: Students[]
}

