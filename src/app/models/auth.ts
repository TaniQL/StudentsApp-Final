import { User } from "./user";

export interface Auth {
    auth: boolean;
    user?: User;
}