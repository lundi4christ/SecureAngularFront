import {Component, OnInit, TemplateRef} from '@angular/core';
import { UsersService} from '../services/users.service';
import {User} from '../user/model';
import { Subject} from 'rxjs';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-datatableview',
  templateUrl: './datatableview.component.html',
  styleUrls: ['./datatableview.component.css']
})
export class DatatableviewComponent implements OnInit {

  title = 'Users';

  closeResult: string;

  constructor(private service: UsersService, private fb: FormBuilder, private modalService: BsModalService,
              private modalngService: NgbModal, private route: ActivatedRoute) {
  }

  userdetails: User[];

  /// userss: User[] = new User();

  usersList: any;

  deleteuser: string;

  modalRef: BsModalRef;

  saveuserForm: FormGroup;
  editForm: FormGroup;
  saveuser: User = new User();

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  ngOnInit(): void {
    // this.title = this.route.snapshot.data.title;

    this.getUsersDetails();

    this.saveuserForm = this.fb.group({
      name: [this.saveuser.name, Validators.required],
      username: [this.saveuser.username, Validators.required],
      email: [this.saveuser.email, Validators.required],
      password: [this.saveuser.password, Validators.required]
      // state: [this.saveuser.state, Validators.required]
    });

    this.editForm = this.fb.group({
      id: [''],
      name: [''],
      username: [''],
      email: [''],
      password: ['']
      // state: ['']
    } );
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  getUsersDetails(): void {
    this.service.getUsersDetails()
      .subscribe((userdata) => {
        this.userdetails = userdata,
          // initiate our data table
          this.dtTrigger.next();
        console.log(userdata);
      }, (error) => {
        console.log(error);
      });
  }
/*to save user*/
  saveUser(): void {
    this.saveuser = this.saveuserForm.value;
    const theUser = {
      name: this.saveuserForm.controls.name.value,
      username: this.saveuserForm.controls.username.value,
      email: this.saveuserForm.controls.email.value,
      password: this.saveuserForm.controls.password.value
      // state: this.saveuserForm.controls.state.value
    };
    this.service.saveUser(theUser)
      .pipe().subscribe((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }

  updateUser(): void {
    this.saveuser = this.editForm.value;

    this.service.updateUser(this.saveuser)
      .pipe().subscribe((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }


  deleteUser(deleteuser: User): void {
    this.service.deleteUser(deleteuser)
      .pipe().subscribe((response) => {
      console.log(response);
      this.getUsersDetails();
    }, (error) => {
      console.log(error);
    });
  }

  // tslint:disable-next-line:typedef
  openModaldeposit(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {
      animated: true,
      backdrop: 'static'
    });
  }

  open(content) {
    this.modalngService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  openEdit(targetModal, user: User) {
    this.modalngService.open(targetModal, {
      backdrop: 'static',
      size: 'md'
    });
    this.editForm.patchValue( {
      id: user.id,
      firstname: user.name,
      lastname: user.username,
      email: user.email,
      address: user.password
      // state: user.state
    });
  }

  openDetails(targetModal, user: User) {
    this.modalngService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'md'
    });
    document.getElementById('fname').setAttribute('value', user.name);
    document.getElementById('lname').setAttribute('value', user.username);
    document.getElementById('addr').setAttribute('value', user.password);
    document.getElementById('email2').setAttribute('value', user.email);
    // document.getElementById('st').setAttribute('value', user.state);
  }

}
