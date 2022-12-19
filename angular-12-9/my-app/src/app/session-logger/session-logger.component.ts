import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Session } from '../model/session.model';
import { SessionService } from '../model/session.service';

@Component({
  selector: 'app-session-logger',
  templateUrl: './session-logger.component.html',
  providers: [SessionService],
  styleUrls: ['./session-logger.component.css'],
})
export class SessionLoggerComponent {
  error: any;
  public sessionForm?: FormGroup;
  public sessions: Session[] = []

  constructor(private sessionService: SessionService) {}

  createNewSession() {
    this.sessionForm = new FormGroup({
      date: new FormControl(new Date(), Validators.required),
      minutes: new FormControl('', Validators.required),
      notes: new FormControl(''),
    });
  }

  ngOnInit() {
    this.loadSessions();
  }

  loadSessions() {
    this.sessionService.getSessions().subscribe({
      next: (data: Session) => {
        this.sessions.push(data)
        console.log(data)
      },
      error: error => this.error = error,
    });
  }

  cancelNewSession() {
    this.sessionForm = undefined;
  }

  onSubmit() {
    console.log(this.sessionForm?.value);
    this.cancelNewSession();
  }
}
