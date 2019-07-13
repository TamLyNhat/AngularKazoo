import { Component, OnInit } from '@angular/core';
import { CallerService} from '../shared/caller.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-caller-list',
  templateUrl: './caller-list.component.html',
  styleUrls: ['./caller-list.component.css']
})
export class CallerListComponent implements OnInit {

  constructor(private callerService: CallerService) { }
  CallerArray = [];
  showDeleteMessage: boolean

  ngOnInit() {
    this.callerService.getCaller().subscribe(
      list => {
        this.CallerArray = list.map(item => {
          return {
            $key: item.key,
             ...item.payload.val()
          };
        });
    });
  }

  onDelete($key){
    if(confirm('Are you sure to delete this record ?')){
      this.callerService.deleteCaller($key);
      
      this.showDeleteMessage = true;
      setTimeout(() => this.showDeleteMessage = false, 3000);

      this.showDeleteMessage = false;
    }
  }

}
