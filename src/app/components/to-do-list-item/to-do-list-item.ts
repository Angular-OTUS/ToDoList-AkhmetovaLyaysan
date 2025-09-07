import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import {ToDo} from '../to-do-list/to-do-list';

@Component({
  selector: 'app-to-do-list-item',
  imports: [],
  templateUrl: './to-do-list-item.html',
  styleUrl: './to-do-list-item.sass',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToDoListItem {
  item = input.required<ToDo>();
  delete = output();

  deleteTask() {
    this.delete.emit();
  }
}
