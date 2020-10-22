import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'personas',
        children: [
          {
            path: '',
            loadChildren: () => import('../people/people.module').then(m => m.PeoplePageModule)
          },
          { path: 'message/:id', loadChildren: () => import('../view-message/view-message.module').then(m => m.ViewMessagePageModule) }
        ],
      },
      {
        path: 'addMessage',
        children: [
          {
            path: '',
            loadChildren: () => import('../alta-mensaje/alta-mensaje.module').then(m => m.AltaMensajePageModule)
          }
        ],
      },
      {
        path: 'photo-gallery',
        children: [
          {
            path: '',
            loadChildren: () => import('../photo-gallery/photo-gallery.module').then(m => m.PhotoGalleryPageModule)
          }
        ],
      },
      {
        path: '',
        children: [
          {
            path: '',
            loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
          }
        ]
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
