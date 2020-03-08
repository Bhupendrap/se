import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { DialogesComponent } from '../dialoges/dialoges.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  titles = [
    {
      title: 'Title 1',
      color: 'violet'
    },
    {
      title: 'Title 2',
      color: 'orange'
    },
    {
      title: 'Title 3',
      color: 'violet'
    },
    {
      title: 'Title 4',
      color: 'orange'
    },
    {
      title: 'Title 5',
      color: 'violet'
    },
    {
      title: 'Title 6',
      color: 'orange'
    },
    {
      title: 'Title 7',
      color: 'violet'
    },
    {
      title: 'Title 8',
      color: 'orange'
    },
    {
      title: 'Title 9',
      color: 'violet'
    },
    {
      title: 'Title 10',
      color: 'orange'
    },
    {
      title: 'Title 11',
      color: 'violet'
    },
    {
      title: 'Title 12',
      color: 'orange'
    },
  ];
  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  onPopup() {
    const dialogRef = this.dialog.open(DialogesComponent,{
      data:{
        message: 'HelloWorld',
        buttonText: {
          cancel: 'Done'
        }
      },
    });
  }
}
