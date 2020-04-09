import { Injectable } from '@angular/core';
import {AngularFireDatabase,AngularFireList} from '@angular/fire/database'
@Injectable({
  providedIn: 'root'
})
export class TODOService {

  TODOlist :AngularFireList<any>;
  constructor(private database : AngularFireDatabase) { }

  getList(){
    this.TODOlist = this.database.list('tasks');
    return this.TODOlist;
  }

  addTaskTolist(task:string){
    this.TODOlist.push({
      Task:task,
      Completed : false
    });
  }

  ChangeStatusOFTask($key: string, flag: boolean) {
      this.TODOlist.update($key, { Completed: flag });
  }
  
  deleteTask($key: string) {
     this.TODOlist.remove($key);
    }
    

  
}
