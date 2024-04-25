import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CsvService } from '../../service/csv.service';
import { User } from '../../class/user';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent {
  @Input() users: User[] = [];
  @Output() onUpdate: EventEmitter<any> = new EventEmitter();
  @Output() onDelete: EventEmitter<any> = new EventEmitter();
  constructor(private csvService: CsvService) {}

  ngOnInit(): void {}

  onClickUpdate(event: any) {
    this.onUpdate.emit(event);
  }

  onClickDelete(event: any) {
    this.onDelete.emit(event);
  }
}
