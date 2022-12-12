import { FormControl } from '@angular/forms';

export class Session {
  constructor(
    public minutes: number = 0,
    public description: string = '',
    public date = new FormControl(new Date())
  ) {}
}
