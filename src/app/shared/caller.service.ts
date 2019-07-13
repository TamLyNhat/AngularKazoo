import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CallerService {

  constructor(private firebase: AngularFireDatabase) { }
  callerList: AngularFireList<any>;
  
  form = new FormGroup({
    $key : new FormControl(null),
    calleeNum : new FormControl('', Validators.required),
    callerNum : new FormControl('', Validators.required)
  });

  getCaller(){
    this.callerList = this.firebase.list('caller');
    return this.callerList.snapshotChanges();
  }

  insertCaller(caller){
    this.callerList.push({
      calleeNum: caller.calleeNum,
      callerNum: caller.callerNum
    });
  }

  populateForm(caller){
    this.form.setValue(caller);
  }
  
  updateCaller(caller){
    this.callerList.update(caller.$key,{
      callerNum: caller.callerNum,
      calleeNum: caller.calleeNum
    });
  }

  deleteCaller($key: string){
    this.callerList.remove($key);
  }
}
