import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { CommunityComponent } from './community/community.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { EventEditComponent } from './events/event-edit/event-edit.component';
import { EventsComponent } from './events/events.component';
import { StreamDetailComponent } from './streams/stream-detail/stream-detail.component';
import { StreamEditComponent } from './streams/stream-edit/stream-edit.component';
import { StreamsComponent } from './streams/streams.component';
import { SubscriptionComponent } from './subscription/subscription.component';

const routes: Routes = [
  { path: '', redirectTo: '/streams', pathMatch: 'full' },
  { path: 'auth', component: AuthenticationComponent, children: [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'logout', redirectTo: '' }
  ] },
  { path: 'streams', component: StreamsComponent, children: [
    { path: 'new', component: StreamEditComponent },
    { path: ':id', component: StreamDetailComponent },
    { path: ':id/edit', component: StreamEditComponent }
  ]},
  { path: 'community', component: CommunityComponent },
  { path: 'events', component: EventsComponent, children: [
    { path: 'new', component: EventEditComponent },
    { path: ':id', component: EventDetailComponent },
    { path: ':id/edit', component: EventEditComponent }
  ] },
  { path: 'subscriptions', component: SubscriptionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
