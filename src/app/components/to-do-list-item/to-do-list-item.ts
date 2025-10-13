import {ChangeDetectionStrategy, Component, input, output} from '@angular/core';
import {ToDo} from '../to-do-list/to-do-list';
import {Button} from '@components/button/button';
import {TooltipDirective} from '@directives/tooltip';

@Component({
  selector: 'app-to-do-list-item',
  imports: [Button, TooltipDirective],
  templateUrl: './to-do-list-item.html',
  styleUrl: './to-do-list-item.sass',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToDoListItem {
  item = input.required<ToDo>();
  isSelected = input<boolean>(false);
  delete = output();

  deleteTask() {
    this.delete.emit();
  }
}
