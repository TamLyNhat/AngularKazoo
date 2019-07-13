import { Component, OnInit } from '@angular/core';

import { CallerService} from '../shared/caller.service';

@Component({
  selector: 'app-caller',
  templateUrl: './caller.component.html',
  styleUrls: ['./caller.component.css']
})
export class CallerComponent implements OnInit {

  constructor(private callerService: CallerService) { }
  submitted: boolean;
  showSuccessMessage: boolean;
  formControls = this.callerService.form.controls;
  
  ngOnInit() {
  }

  onSubmit(){
    this.submitted = true; 
    if(this.callerService.form.valid)
    {
      if(this.callerService.form.get('$key').value == null)
        this.callerService.insertCaller(this.callerService.form.value);
      else
        this.callerService.updateCaller(this.callerService.form.value);
      this.showSuccessMessage = true;
      setTimeout(() => this.showSuccessMessage = false, 3000);
      
      this.callerService.form.reset(); 
      this.submitted = false;
    }
    
  }
}
