import {Component, Inject, OnInit} from '@angular/core';
import {TaskService} from "../task.service";
import {Router} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Task} from "../task";

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.css']
})
export class DeleteTaskComponent implements OnInit {

  public taskId: string;

  constructor(private taskService: TaskService, private router: Router,
              public dialogRef: MatDialogRef<DeleteTaskComponent>, @Inject(MAT_DIALOG_DATA) public data: Task) { }

  ngOnInit(): void {
    this.taskId = this.data.taskId;
  }

  back() {
    this.dialogRef.close({})
  }

  delete() {
    this.taskService.deleteTask(this.data.taskId).subscribe( () => {
    })
    this.dialogRef.close(
      {
        taskId: this.taskId,
      }
    )
  }
}
