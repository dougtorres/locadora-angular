import { Routes, RouterModule } from '@angular/router';
import { CadastrarCarroComponent } from './cadastrar-carro/cadastrar-carro.component';
import { ModuleWithProviders } from '@angular/core';
import { ContentComponent } from './content/content.component';

const APP_ROUTES: Routes = [

  {path: '', component: ContentComponent},
{path: 'cadastrar/carro', component: CadastrarCarroComponent}

]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
