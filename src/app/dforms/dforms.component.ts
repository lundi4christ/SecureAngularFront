import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dforms',
  templateUrl: './dforms.component.html',
  styleUrls: ['./dforms.component.css']
})
export class DformsComponent implements OnInit {

  @Input() depositLabel: string = 'Deposit Amount123';

  constructor() { }
  ngOnInit(): void {
  }

}
