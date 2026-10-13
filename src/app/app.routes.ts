import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Member } from './Member/member';
import { MemberForm } from './member-form/member-form';
import { Dashboard } from './dashboard/dashboard';
import { Tools } from './tools/tools';
import { Articles } from './articles/articles';
import { Events } from './events/events';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login, 
    
  },
  { path: 'members', component: Member,
    // canActivate:[authGuard] //nekteb etha star ala kol composant ma nhebouch yethal kbal ma naml login
   },
  { path: 'create', component: MemberForm },
  { path: 'update/:id', component: MemberForm },
  { path: 'dashboard', component: Dashboard },
  { path: 'tools', component: Tools },
  { path: 'articles', component: Articles },
  { path: 'events', component: Events },
];