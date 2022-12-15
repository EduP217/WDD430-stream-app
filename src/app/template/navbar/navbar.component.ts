import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navLinks = [
    {
      title: "Streams",
      path: "/streams"
    },
    /*{
      title: "Events",
      path: "/events"
    }*/
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
