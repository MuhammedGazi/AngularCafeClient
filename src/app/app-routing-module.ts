import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './ui-components/home/home';
import { Contact } from './ui-components/contact/contact';
import { UiLayout } from './layouts/ui-layout/ui-layout';
import { AdminLayout } from './layouts/admin-layout/admin-layout';
import { Category } from './admin-components/category/category';
import { Menu } from './admin-components/menu/menu';
import { About } from './admin-components/about/about';
import { CreateCategory } from './admin-components/category/create-category/create-category';

const routes: Routes = [

  //ui routes
  {path:'',component:UiLayout,children:[
    {path:'',component:Home},
    {path:'contact',component:Contact}
  ]},

  //admin routes
  {path:'admin',component:AdminLayout,children:[
    {path:'category',component:Category},
    {path:'category/create',component:CreateCategory},
    {path:'menu',component:Menu},
    {path:'about',component:About}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
