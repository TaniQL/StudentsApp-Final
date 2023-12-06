import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Students } from 'src/app/models/students';

@Component({
  selector: 'app-more-info-students',
  templateUrl: './more-info-students.component.html',
  styleUrls: ['./more-info-students.component.css']
})
export class MoreInfoStudentsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<MoreInfoStudentsComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
  }


}
