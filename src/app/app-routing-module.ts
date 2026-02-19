import { UpdateMenu } from './admin-components/menu/update-menu/update-menu';
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
import { UpdateCategory } from './admin-components/category/update-category/update-category';
import { CreateMenu } from './admin-components/menu/create-menu/create-menu';

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
    {path:'category/update/:id',component:UpdateCategory},
    {path:'menu',component:Menu},
    {path:'menu/create',component:CreateMenu},
    {path:'menu/update/:id',component:UpdateMenu},
    {path:'about',component:About}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{bindToComponentInputs:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
