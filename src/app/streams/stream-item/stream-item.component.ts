import { Component, Input, OnInit } from '@angular/core';
import { Stream } from '../stream.model';

@Component({
  selector: 'app-stream-item',
  templateUrl: './stream-item.component.html',
  styleUrls: ['./stream-item.component.css']
})
export class StreamItemComponent implements OnInit {

  @Input() stream:Stream = {};

  constructor() { }

  ngOnInit(): void {
  }

}
