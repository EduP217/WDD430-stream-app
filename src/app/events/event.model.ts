import { Stream } from "../streams/stream.model";

export class Event {
    public _id?: string;
    public id?: string;
    public title?: string;
    public description?: string;
    public type?: string;
    public category?: string;
    public createdAt?: string;
    public scheduledAt?: string;
    public stream?: Stream;

    constructor(
      id: string,
      title: string,
      description: string,
      type: string,
      category: string,
      createdAt: string,
      scheduledAt: string,
      stream: Stream
    ) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.type = type;
      this.category = category;
      this.createdAt = createdAt;
      this.scheduledAt = scheduledAt;
      this.stream = stream;
    }
}
