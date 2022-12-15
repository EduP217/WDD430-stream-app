import { User } from "../authentication/auth.model";
import { Stream } from "../streams/stream.model";

export class Subscription {
    public _id?: string;
    public id?: string;
    public user?: User;
    public stream?: Stream;
    public category?: string;

    constructor(
      id: string,
      user: User,
      stream: Stream,
      category: string
    ) {
      this.id = id;
      this.user = user;
      this.stream = stream;
      this.category = category;
    }
}
