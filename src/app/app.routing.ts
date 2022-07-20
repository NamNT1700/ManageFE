import { Route } from "@angular/router";
import { AppComponent } from "./app.component";
import { MainLayoutComponent } from "./main-layout/main-layout.component";
import { OverviewComponent } from "./overview/overview.component";


export const appRoutes: Route[] = [
    // set default page to redirect
    {
        path: '', pathMatch: 'full', redirectTo: 'overview'
    },
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: 'overview',
                loadChildren: () => import('../app/overview/overview.module').then(m => m.OverviewModule),
            },
            {
                path: 'allwance',
                loadChildren: () => import('../app/allwance/allwance.module').then(m => m.AllwanceModule),
            }
        ]
    },
    
]