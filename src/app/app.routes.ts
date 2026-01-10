import { Routes } from '@angular/router';
export const routes: Routes = [
    {path: '', redirectTo: 'users', pathMatch: 'full' },
    {path: 'users', loadComponent() {return import('./features/components-pages/users-list/users-list').then(m => m.UsersList)} },
    {path: 'user/:id', loadComponent() {return import('./features/components-pages/user-details-page/user-details-page').then(m => m.UserDetailsPage)} },
];
