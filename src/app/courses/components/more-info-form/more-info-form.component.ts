import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Course } from 'src/app/models/courses';

@Component({
  selector: 'app-more-info-form',
  templateUrl: './more-info-form.component.html',
  styleUrls: ['./more-info-form.component.css']
})
export class MoreInfoFormComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<MoreInfoFormComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: Course,
  ) { }

  ngOnInit(): void {
  }

}
