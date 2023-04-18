import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; // added import statement for MatDialog
import { LoginComponent } from '../popup/login/login.component';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {
  constructor(public dialog: MatDialog) {}
  
  openDialog() {
    this.dialog.open(LoginComponent);
  }

}
