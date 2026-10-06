import { Routes } from '@angular/router';
import { Member } from './Member/member';
import { MemberForm } from './member-form/member-form';
import path from 'path';
import { Dashboard } from './dashboard/dashboard';
import { Tools } from './tools/tools';
import { Articles } from './articles/articles';
import { Events } from './events/events';

export const routes: Routes = [
  { path: '', redirectTo: 'members', pathMatch: 'full' },
  { path: 'members', component: Member },
  { path: 'create', component: MemberForm },
  { path: 'update/:id', component: MemberForm },
  {path: 'dashboard',
        component: Dashboard
    },
    {
        path: 'tools',
        component: Tools
    },
    {
        path: 'articles',
        component: Articles
    },
    {
        path: 'events',
        component: Events
    } // :id => contenu dynamique
];