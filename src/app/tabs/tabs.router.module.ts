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
        path: 'pedidos',
        children: [
          {
            path: '',
            loadChildren: () => import('../pedidos/pedidos.module').then(m => m.PedidosPageModule)
          }
        ],
      },
      {
        path: 'settings',
        children: [
          {
            path: '',
            loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
          },
          { path: 'message/:id', loadChildren: () => import('../view-message/view-message.module').then(m => m.ViewMessagePageModule) }
        ],
      },
      {
        path:'',
        children:[
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
