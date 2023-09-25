import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.scss'],
})
export class InterestComponent implements OnInit {
  @Input() interest: number;
  constructor() {}

  ngOnInit(): void {}
}