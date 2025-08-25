import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Signup } from './signup/signup'
import { Login } from './login/login';
import { Chat} from './chat/chat';

const routes: Routes = [
  { path: '', component: Login  },
  { path: 'signup', component: Signup },
  { path: 'login', component: Login },
  { path: 'chat', component: Chat }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
