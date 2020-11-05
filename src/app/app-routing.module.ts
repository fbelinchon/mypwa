import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/user/auth.guard';

const routes: Routes = [
  { path: 'tabs', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
  canActivate: [AuthGuard] },
  { path: 'addMessage', loadChildren: () => import('./alta-mensaje/alta-mensaje.module').then(m => m.AltaMensajePageModule),
  canActivate: [AuthGuard] },
  { path: 'personas', loadChildren: () => import('./people/people.module').then(m => m.PeoplePageModule),
  canActivate: [AuthGuard]
  },
  { path: 'userRegistered', loadChildren: () => import('./userRegistered/userRegistered.module').then(m => m.RegisteredPageModule),
  canActivate: [AuthGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'addProvider',
    loadChildren: () => import('./provider/provider.module').then(m => m.ProviderPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'message/:id',
    loadChildren: () => import('./view-message/view-message.module').then( m => m.ViewMessagePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  {
    path: 'pedidos',
    loadChildren: () => import('./pedidos/pedidos.module').then( m => m.PedidosPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'personas-detalle',
    loadChildren: () => import('./personas-detalle/personas-detalle.module').then( m => m.PersonasDetallePageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
  },
  {
    path: 'registered',
    loadChildren: () => import('./userRegistered/userRegistered.module').then( m => m.RegisteredPageModule)
  },
  {
    path: 'alta-mensaje',
    loadChildren: () => import('./alta-mensaje/alta-mensaje.module').then( m => m.AltaMensajePageModule)
  },
  {
    path: 'message-list',
    loadChildren: () => import('./message-list/message-list.module').then( m => m.MessageListPageModule)
  },
  {
    path: 'photo-gallery',
    loadChildren: () => import('./photo-gallery/photo-gallery.module').then( m => m.PhotoGalleryPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'provider',
    loadChildren: () => import('./provider/provider.module').then( m => m.ProviderPageModule)
  },






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
