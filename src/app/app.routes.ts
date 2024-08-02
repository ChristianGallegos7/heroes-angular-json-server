import { Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/pages/ErrorPage/ErrorPage.component';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.routes').then(m => m.authRoutes)
    },
    {
        path: 'heroes',
        loadChildren: () => import('./heroes/heroes.routes').then(m => m.heroesRoutes)
    },
    {
        path: '404',
        component: ErrorPageComponent
    },
    {
        path: '',
        redirectTo: 'heroes',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '404'
    }
];
