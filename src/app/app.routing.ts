import { Routes, RouterModule } from '@angular/router';
import { ListaTrabajosComponent } from './lista-trabajos/lista-trabajos.component';
import { FormComponent } from './form/form.component';
import { TrabajoInfoComponent } from './trabajo-info/trabajo-info.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'trabajos', pathMatch: 'full'},
    { path: 'trabajos', component: ListaTrabajosComponent },
    { path: 'form', component: FormComponent },
    { path: 'trabajo/:id', component: TrabajoInfoComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);