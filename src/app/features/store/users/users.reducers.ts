import { createReducer, on } from "@ngrx/store";
import { intialUserState } from "./users.state";
import { selectAllUsers, selectAllUsersFailure, selectAllUsersSucess } from "./users.actions";


export const selectAllUsersReducer = createReducer(
    intialUserState,
    on(selectAllUsers, (state)=> (
        {...state,
         loading:true,
         error:null
        }
    )),

    on(selectAllUsersSucess,(state,{ users, total, skip, limit })=>({
            ...state,
            users,
            total,
            skip,
            limit,
            loading:false

        })
    ),
     on(selectAllUsersFailure,(state,{error})=>(
        {
            ...state,
            error,
            loading:false
        }
     ))
)