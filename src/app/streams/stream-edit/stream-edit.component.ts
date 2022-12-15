import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Stream } from '../stream.model';
import { StreamService } from '../stream.service';

@Component({
  selector: 'app-stream-edit',
  templateUrl: './stream-edit.component.html',
  styleUrls: ['./stream-edit.component.css']
})
export class StreamEditComponent implements OnInit {
  originalStream: Stream = {};
  stream: Stream = {};
  editMode: boolean = false;
  id: string = '';

  constructor(
    private service: StreamService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const { id } = params;

      console.log(id);

      if (id == undefined || id == null) {
        this.editMode = false;
        return;
      }

      this.originalStream = this.service.getStream(id);
      if (this.originalStream == undefined || this.originalStream == null) {
        return;
      }
      this.editMode = true;
      this.stream = JSON.parse(JSON.stringify(this.originalStream));
    });
  }

  onSubmit(form: NgForm) {
    let value = form.value;
    let newStream = new Stream("",value.name, value.shortDescription, value.longDescription, value.thumbnail, value.fullImage, value.keywords, new Date().toISOString());
    if (this.editMode) {
      this.service.updateStream(this.originalStream, newStream);
    } else {
      this.service.addStream(newStream);
    }
    this.router.navigateByUrl('/streams');
  }

  onRemoveItem() {
    this.service.deleteStream(this.stream);
    this.router.navigateByUrl('/streams');
  }

  onCancel() {
    this.router.navigateByUrl('/streams');
  }

}
