import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { selectAllUsers, selectAllUsersFailure, selectAllUsersSucess } from "./users.actions";
import { ManageUsers } from "../../../core/services/manage-users";
import { catchError, map, mergeMap } from "rxjs/operators";
import { of } from "rxjs";

export const SelectAllUsersEffect = createEffect(
  (actions$ = inject(Actions), manageUsers = inject(ManageUsers)) => {
    return actions$.pipe(
      ofType(selectAllUsers),
      mergeMap(({ page, limit }) =>
        manageUsers.getUsers(page, limit).pipe(
          map((res) =>
            selectAllUsersSucess({
              users: res.users,
              total: res.total,
              skip: res.skip,
              limit: res.limit,
            })
          ),
          catchError((error) =>
            of(selectAllUsersFailure({ error: error.message }))
          )
        )
      )
    );
  },
  { functional: true } // Functional Effect
);