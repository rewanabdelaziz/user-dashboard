import { createAction, props } from "@ngrx/store";
import { User } from "../../../core/models/user";

export const selectAllUsers = createAction(
    "[allUsers] loaded start",
    props<{page:number; limit:number}>())


export const selectAllUsersSucess = createAction(
    "[allUsers] loaded success",
    props<{users: User[];total:number;skip:number; limit:number}>())

    
export const selectAllUsersFailure = createAction(
    "[allUsers] loading failure",
    props<{error:string}>())