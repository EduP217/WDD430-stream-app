import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Stream } from '../stream.model';
import { StreamService } from '../stream.service';

@Component({
  selector: 'app-stream-list',
  templateUrl: './stream-list.component.html',
  styleUrls: ['./stream-list.component.css']
})
export class StreamListComponent implements OnInit, OnDestroy {
  Streams: Stream[] = [];
  StreamId: string = '';
  private subscription: Subscription = new Subscription();

  constructor(private streamService: StreamService) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.Streams = this.streamService.getStreams();
    this.subscription = this.streamService.streamListChangedEvent.subscribe(
      (list) => {
        this.Streams = list;
      }
    );
  }

}
