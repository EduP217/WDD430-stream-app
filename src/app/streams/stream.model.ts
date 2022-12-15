export class Stream {
  public _id?: string;
  public id?: string;
  public name?: string;
  public shortDescription?: string;
  public longDescription?: string;
  public thumbnail?: string;
  public fullImage?: string;
  public keywords?: string;
  public createdAt?: string;

  constructor(
    id: string,
    name: string,
    shortDescription: string,
    longDescription: string,
    thumbnail: string,
    fullImage: string,
    keywords: string,
    createdAt: string
  ) {
    this.id = id;
    this.name = name;
    this.shortDescription = shortDescription;
    this.longDescription = longDescription;
    this.thumbnail = thumbnail;
    this.fullImage = fullImage;
    this.keywords = keywords;
    this.createdAt = createdAt;
  }
}
