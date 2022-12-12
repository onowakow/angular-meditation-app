import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-session-logger',
  templateUrl: './session-logger.component.html',
  styleUrls: ['./session-logger.component.css'],
})
export class SessionLoggerComponent {
  public sessionForm?: FormGroup;

  createNewSession() {
    this.sessionForm = new FormGroup({
      date: new FormControl(new Date(), Validators.required),
      minutes: new FormControl('', Validators.required),
      notes: new FormControl(''),
    });
  }

  cancelNewSession() {
    this.sessionForm = undefined;
  }

  onSubmit() {
    console.log(this.sessionForm?.value);
    this.cancelNewSession()
  }
}
