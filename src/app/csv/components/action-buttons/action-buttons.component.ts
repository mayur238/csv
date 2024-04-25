import { Component, EventEmitter, Output } from '@angular/core';
import { CsvService } from '../../service/csv.service';

@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.css'],
})
export class ActionButtonsComponent {
  @Output() onSelectFile: EventEmitter<any> = new EventEmitter();

  constructor(private csvService: CsvService) {}

  onFileChange(event: any) {
    this.onSelectFile.emit(event);
  }
}
