import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { selectAllUsersReducer } from './features/store/users/users.reducers';
import { SelectAllUsersEffect } from './features/store/users/users.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideStore({
      users:selectAllUsersReducer,
    }),
    provideEffects({
      selectUsers:SelectAllUsersEffect
    }
  )
]
};
