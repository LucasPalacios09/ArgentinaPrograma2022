import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FichaComponent } from '../components/ficha/ficha.component';
import { PageAboutComponent } from '../components/page-about/page-about.component';
import { PageOneComponent } from '../components/page-one/page-one.component';
import { PageTwoComponent } from '../components/page-two/page-two.component';
import { Page404Component } from '../components/page404/page404.component';

const routes: Routes = [
  { path: 'inicio', component: PageOneComponent },
  { path: 'otra-pagina', component: PageTwoComponent },
  { path: 'sobre-nosotros', component: PageAboutComponent },
  { path: 'ficha-personaje/:nombre', component: FichaComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', component: Page404Component },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
