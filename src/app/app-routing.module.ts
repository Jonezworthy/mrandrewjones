import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
    { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
    { path: 'tech', loadChildren: () => import('./pages/technologies/technologies.module').then(m => m.TechnologiesModule) },
    { path: 'portfolio', loadChildren: () => import('./pages/portfolio/portfolio.module').then(m => m.PortfolioModule) },
    { path: 'work', loadChildren: () => import('./pages/work/work.module').then(m => m.WorkModule) },
    { path: 'education', loadChildren: () => import('./pages/education/education.module').then(m => m.EducationModule) },
    { path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) },
    { path: 'contact', loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule) },
    { path: 'game', loadChildren: () => import('./pages/game/game.module').then(m => m.GameModule) },
    // 
    { path: '**', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
