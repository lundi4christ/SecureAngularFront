import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {DformsComponent} from '../dforms/dforms.component';

@Component({
  selector: 'app-sidenavnext',
  templateUrl: './sidenavnext.component.html',
  styleUrls: ['./sidenavnext.component.css']
})
export class SidenavnextComponent implements OnInit {

  constructor(private modalService: NgbModal) { }
  // tslint:disable-next-line:typedef
  openModal() {
    const modalRef = this.modalService.open(DformsComponent, { size: 'md' });
    // Replace YOUR_MODAL_COMPONENT with the component you want to display in the modal.
    // You need to import and pr
    // ovide the component here.
  }
  ngOnInit(): void {
  }

}
