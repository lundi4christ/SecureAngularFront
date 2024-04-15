import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {DformsComponent} from '../dforms/dforms.component';


@Component({
  selector: 'app-sidenavnext',
  templateUrl: './sidenavnext.component.html',
  styleUrls: ['./sidenavnext.component.css']
})
export class SidenavnextComponent implements OnInit {

  depositLabel: string;
  constructor(private modalService: NgbModal) { }
  // tslint:disable-next-line:typedef
  openModal() {
    const modalRef = this.modalService.open(DformsComponent, { size: 'md' });
  }
  // tslint:disable-next-line:typedef
  openDebitModal() {
    const modalRef = this.modalService.open(DformsComponent, { size: 'md' });
    this.depositLabel = 'Withdrawals';
  }
  ngOnInit(): void {
  }

}
