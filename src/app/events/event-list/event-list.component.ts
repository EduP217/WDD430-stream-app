import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Event } from '../event.model';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit, OnDestroy {
  Events: Event[] = [];
  EventId: string = '';
  private subscription: Subscription = new Subscription();

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.Events = this.eventService.getEvents();
    this.subscription = this.eventService.eventListChangedEvent.subscribe(
      (list) => {
        this.Events = list;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
