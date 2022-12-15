import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Stream } from './stream.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StreamService {

  private streams: Stream[] = [];
  streamListChangedEvent = new Subject<Stream[]>();
  maxStreamId:number = 0;

  constructor(private http: HttpClient) {
    this.http
      .get(
        'http://localhost:3000/streams'
      )
      .subscribe(
        (data: any) => {
          this.streams = data.streams;
          this.maxStreamId = this.getMaxId();
          //sort the list of contacts
          this.streams.sort((a, b) => {
            if (a < b) {
              return -1;
            } else if (a > b) {
              return 1;
            }
            return 0;
          });
          //emit the next contact list change event
          this.streamListChangedEvent.next(this.streams.slice());
        },
        // error method
        (error: any) => {
          //print the error to the console
          console.error(error);
        }
      );
  }

  getStreams(): Stream[] {
    return this.streams.slice();
  }

  getStream(id: string = ""): Stream {
    let stream:Stream = {};
    this.getStreams().map((c) => {
      if (c.id === id) {
        stream = c;
      }
      return c;
    });
    return stream;
  }

  getMaxId(): number {
    let maxId = 0;
    this.getStreams().forEach((c:Stream) => {
      let currentId = Number(c.id);
      if(currentId>maxId) {
        maxId = currentId;
      }
    });
    return maxId
  }

  addStream(stream: Stream) {
    if (!stream) {
      return;
    }

    console.log(stream);

    stream.id = '';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    // add to database
    this.http
      .post<{ message: string; stream: Stream }>(
        'http://localhost:3000/streams',
        stream,
        { headers: headers }
      )
      .subscribe((responseData) => {
        // add new stream to streams
        this.streams.push(responseData.stream);
      });
  }

  updateStream(originalStream: Stream, newStream: Stream) {
    if(!originalStream || !newStream){
      return;
    }

    const pos = this.streams.findIndex(c => c.id === originalStream.id)
    if(pos < 0){
      return
    }

    newStream.id = originalStream.id;
    newStream._id = originalStream._id;

    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    // update database
    this.http.put('http://localhost:3000/streams/' + originalStream.id,
    newStream, { headers: headers })
      .subscribe(
        (response) => {
          this.streams[pos] = newStream;
        }
      );
  }

  deleteStream(stream:Stream) {
    if (!stream) {
      return;
    }
    const pos = this.streams.findIndex(c => c.id === stream.id);
    if (pos < 0) {
      return;
    }

    this.http.delete('http://localhost:3000/streams/' + stream.id)
      .subscribe(
        (response) => {
          this.streams.splice(pos, 1);
        }
      );
  }

}
