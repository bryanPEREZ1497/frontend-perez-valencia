import { ProjectModel } from "./project.model";
export interface AuthorModel {
    email?: string;
    identification?: string;
    names?: string;
    phone?: string;
    age?: number;
    project?: ProjectModel;
}