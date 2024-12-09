import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrl: './my-table.component.css'
})
export class MyTableComponent {

  @Input() headingArray: string []= [];

  @Input() gridData : any []= [];

  @Output () onEdit = new EventEmitter<any>();

  onEditRecord(data: any) {
    debugger;
    this.onEdit.emit(data);
  }

}
