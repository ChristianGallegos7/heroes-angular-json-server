import { Routes } from "@angular/router";
import { LayoutPageComponent } from "./layout-page/layout-page.component";
import { NewPageComponent } from "./new-page/new-page.component";
import { SearchPageComponent } from "./search-page/search-page.component";
import { HeroePageComponent } from "./heroe-page/heroe-page.component";
import { ListPageComponent } from "./list-page/list-page.component";

//localhost:4200/heroes/
export const heroesRoutes: Routes = [
    {
        path: '',
        component: LayoutPageComponent,
        children: [
            { path: 'new-hero', component: NewPageComponent },
            { path: 'search', component: SearchPageComponent },
            { path: 'edit/:id', component: NewPageComponent },
            { path: 'list', component: ListPageComponent },
            { path: ':id', component: HeroePageComponent },
            { path: '**', redirectTo: 'list' }
        ]
    }
]