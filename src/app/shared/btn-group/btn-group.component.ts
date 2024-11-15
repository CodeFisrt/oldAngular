import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn-group',
  templateUrl: './btn-group.component.html',
  styleUrl: './btn-group.component.css'
})
export class BtnGroupComponent {

  @Input() btnList: string[] = [];

  @Output() onSelectBtn =  new EventEmitter<string>();


  onClickBtn(btnName: string) {
    debugger;
    this.onSelectBtn.emit(btnName)
  }
}
