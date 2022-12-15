import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Event } from './event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private events: Event[] = [];
  eventListChangedEvent = new Subject<Event[]>();
  maxEventId:number = 0;

  constructor(private http: HttpClient) {
    this.http
      .get(
        'http://localhost:3000/events'
      )
      .subscribe(
        (data: any) => {
          this.events = data;
          this.maxEventId = this.getMaxId();
          //sort the list of contacts
          this.events.sort((a, b) => {
            if (a < b) {
              return -1;
            } else if (a > b) {
              return 1;
            }
            return 0;
          });
          //emit the next contact list change event
          this.eventListChangedEvent.next(this.events.slice());
        },
        // error method
        (error: any) => {
          //print the error to the console
          console.error(error);
        }
      );
  }

  getEvents(): Event[] {
    return this.events.slice();
  }

  getEvent(id: string = ""): Event {
    let event:Event = {};
    this.getEvents().map((c) => {
      if (c.id === id) {
        event = c;
      }
      return c;
    });
    return event;
  }

  getMaxId(): number {
    let maxId = 0;
    this.getEvents().forEach((c:Event) => {
      let currentId = Number(c.id);
      if(currentId>maxId) {
        maxId = currentId;
      }
    });
    return maxId
  }

  addEvent(event: Event) {
    if (!event) {
      return;
    }

    console.log(event);

    event.id = '';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    // add to database
    this.http
      .post<{ message: string; event: Event }>(
        'http://localhost:3000/events',
        event,
        { headers: headers }
      )
      .subscribe((responseData) => {
        // add new event to events
        this.events.push(responseData.event);
      });
  }

  updateEvent(originalEvent: Event, newEvent: Event) {
    if(!originalEvent || !newEvent){
      return;
    }

    const pos = this.events.findIndex(c => c.id === originalEvent.id)
    if(pos < 0){
      return
    }

    newEvent.id = originalEvent.id;
    newEvent._id = originalEvent._id;

    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    // update database
    this.http.put('http://localhost:3000/events/' + originalEvent.id,
    newEvent, { headers: headers })
      .subscribe(
        (response) => {
          this.events[pos] = newEvent;
        }
      );
  }

}
