import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-crudform',
  templateUrl: './crudform.component.html',
  styleUrls: ['./crudform.component.css'],
})

export class CrudformComponent implements OnInit {


  ngOnInit(): void {}

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: "50%",
      data: {
        animal: 'panda',
      },
    });
  }



}

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
