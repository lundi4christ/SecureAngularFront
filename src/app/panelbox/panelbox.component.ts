import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panelbox',
  templateUrl: './panelbox.component.html',
  styleUrls: ['./panelbox.component.css']
})
export class PanelboxComponent implements OnInit {
  title = 'Dashboards';
  constructor() { }

  ngOnInit(): void {
  }

}
