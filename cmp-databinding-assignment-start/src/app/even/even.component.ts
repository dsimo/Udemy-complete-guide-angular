import { Component, OnInit, Input } from '@angular/core';
import { NumberFormatStyle } from '@angular/common';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
  @Input() number: number;

  constructor() { }

  ngOnInit() {
  }

}
