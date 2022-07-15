import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <h2>{{title}}</h2>
  `,
  styles: [
    'h2 {color: red; font-size: 18px;}}',
    `h2:hover {color: blue}`
  ]
})

export class HeaderComponent implements OnInit {
  title = "Angular Todo App";

  constructor() { }

  ngOnInit(): void {
  }

}
