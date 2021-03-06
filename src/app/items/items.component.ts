import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLogin() {
    this.router.navigate(['/login']);
  }
}
