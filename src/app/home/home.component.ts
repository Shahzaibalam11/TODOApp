import { Component, OnInit } from '@angular/core';
import {TODOService} from './TODOService/todo.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  TODOListContents : any[];
 
  constructor(private TODOservice: TODOService) { }

  ngOnInit(): void {
    this.TODOservice.getList().snapshotChanges()
    .subscribe(item => {
      this.TODOListContents = [];
      item.forEach(element => {
        var temp = element.payload.toJSON();
        temp["$key"] =element.key;
        this.TODOListContents.push(temp);
      })
    })
  }

  onAdd(tasktitle){
    this.TODOservice.addTaskTolist(tasktitle.value);
    tasktitle.value = null;
  }

  ChangeCheck($key : string, Completed){
    this.TODOservice.ChangeStatusOFTask($key,!Completed);
  }

  onDelete($key : string){
    this.TODOservice.deleteTask($key);
  }


}
