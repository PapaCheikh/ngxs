import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'men',
    },
    {
        path: 'men',
        loadComponent: () => import('./Component/men/men.component').then(c => c.MenComponent),
    },
    {
        path: 'women',
        loadComponent: () => import('./Component/women/women.component').then(c => c.WomenComponent),
    }
];
