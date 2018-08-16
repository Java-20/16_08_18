import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  title:string = '';
  time:string = '';

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    // this.time = this.route.snapshot.params['time'];
    // this.title = this.route.snapshot.params['title'];

    this.route.params.subscribe((value: Params) => {
      this.title = value['title'];
      this.time = value['time'];
    });
  }

}
