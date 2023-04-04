import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dunya',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dunya.component.html',
  styleUrls: ['./dunya.component.css'],
})
export class DunyaComponent implements OnInit {
  @Input()
  title = '';

  @Input()
  subTitle = '';

  @Input()
  content = '';

  @Input()
  cardStyle = '';

  @Input()
  paths = [];

  constructor() {}

  ngOnInit() {}
}
