import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../class/user';
import { CsvService } from '../../service/csv.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @Input() user!: User; // Initialize user object
  @Output() onAddUser: EventEmitter<any> = new EventEmitter();
  @Output() onUpdateUser: EventEmitter<any> = new EventEmitter();
  constructor(private csvService: CsvService) {}

  onClickAdd() {
    this.onAddUser.emit(this.user);
    this.user = new User();
  }

  onClickUpdate() {
    this.onUpdateUser.emit(this.user);
    this.user = new User();
  }
}
