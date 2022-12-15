import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { StreamsComponent } from './streams/streams.component';
import { CommunityComponent } from './community/community.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { EventsComponent } from './events/events.component';
import { CommunityListComponent } from './community/community-list/community-list.component';
import { CommunityItemComponent } from './community/community-item/community-item.component';
import { CommunityDetailComponent } from './community/community-detail/community-detail.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventItemComponent } from './events/event-item/event-item.component';
import { EventEditComponent } from './events/event-edit/event-edit.component';
import { StreamListComponent } from './streams/stream-list/stream-list.component';
import { StreamItemComponent } from './streams/stream-item/stream-item.component';
import { StreamDetailComponent } from './streams/stream-detail/stream-detail.component';
import { StreamEditComponent } from './streams/stream-edit/stream-edit.component';

import { DropdownDirective } from './ext/dropdown.directive';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { MainComponent } from './template/main/main.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';
import { NavbarComponent } from './template/navbar/navbar.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { StreamFilterPipe } from './streams/stream-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    StreamsComponent,
    CommunityComponent,
    SubscriptionComponent,
    EventsComponent,
    CommunityListComponent,
    CommunityItemComponent,
    CommunityDetailComponent,
    EventDetailComponent,
    EventListComponent,
    EventItemComponent,
    EventEditComponent,
    StreamListComponent,
    StreamItemComponent,
    StreamDetailComponent,
    StreamEditComponent,
    DropdownDirective,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SidebarComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    StreamFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
